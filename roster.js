// Run this code after the page content has fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get references to key HTML elements
  const grid = document.getElementById('rosterGrid');
  const searchInput = document.getElementById('searchInput');
  const positionFilter = document.getElementById('positionFilter');
  const clearButton = document.getElementById('clearSearch');

  // Get all unique player positions, sort them, and populate the dropdown menu
  const positions = players
    .map(p => p.position) // extract positions from players
    .reduce((unique, pos) => unique.includes(pos) ? unique : [...unique, pos], []) // remove duplicates
    .sort(); // sort alphabetically

  // Add the "All Positions" option
  positionFilter.innerHTML = '<option value="all">All Positions</option>';
  // Add each unique position as an option in the dropdown
  positions.forEach(pos => {
    const option = document.createElement('option');
    option.value = pos;
    option.textContent = pos;
    positionFilter.appendChild(option);
  });

  // Function to display a list of players as cards in the grid
  const render = list => {
    grid.innerHTML = ''; // Clear existing grid content

    list.forEach((p, index) => {
      // Create unique ID for the modal using the player's name
      const modalId = `playerModal-${p.firstName}-${p.lastName}`.replace(/\s+/g, '-');

      // Escape quotes in the fun fact to safely use in HTML attribute
      const escapedFunFact = p.funFact.replace(/"/g, '&quot;').replace(/'/g, '&apos;');

      // Create a new Bootstrap card for the player
      const col = document.createElement('div');
      col.className = 'col-6 col-md-4 col-lg-2';
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${p.photo}" alt="${p.firstName} ${p.lastName}" class="card-img-top">
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
            <div class="badge badge-position position-${p.position}">${p.position}</div>
            <p class="small text-muted mb-2">Age ${p.age}</p>
            <button class="btn btn-sm btn-outline-primary toggle-fact" data-fact="${escapedFunFact}" data-modal-id="${modalId}">Fun Fact</button>
          </div>
        </div>
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="${modalId}Label">${p.firstName} ${p.lastName}</h5>
                <button type="button" class="btn-close" aria-label="Close"></button>
              </div>
              <div class="modal-body"></div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-close-modal>Close</button>
              </div>
            </div>
          </div>
        </div>
      `;

      grid.appendChild(col); // Add card to the grid
    });

    // Add event listener to handle clicks on fun fact buttons and close buttons
    grid.addEventListener('click', function (e) {
      const btn = e.target.closest('.toggle-fact');
      if (btn) {
        // Open modal and show fun fact
        const modalId = btn.getAttribute('data-modal-id');
        const funFact = btn.getAttribute('data-fact');
        const modal = document.getElementById(modalId);
        const bodies = modal.getElementsByClassName('modal-body');
        if (bodies.length > 0) bodies[0].textContent = funFact;

        // Show modal and backdrop manually
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show';
        document.body.appendChild(backdrop);
      }

      // Handle modal close buttons
      if (
        e.target.classList.contains('btn-close') ||
        e.target.hasAttribute('data-close-modal')
      ) {
        const modal = e.target.closest('.modal');
        if (modal) {
          modal.classList.remove('show');
          modal.style.display = 'none';
          document.body.classList.remove('modal-open');
          const backdrop = document.getElementsByClassName('modal-backdrop')[0];
          if (backdrop) backdrop.remove();
        }
      }
    });

    // Allow clicking outside the modal to close it
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
      modals[i].addEventListener('click', function (e) {
        if (e.target === this) {
          this.classList.remove('show');
          this.style.display = 'none';
          document.body.classList.remove('modal-open');
          const backdrop = document.getElementsByClassName('modal-backdrop')[0];
          if (backdrop) backdrop.remove();
        }
      });
    }
  };

  // Function to filter the player list based on search and position
  const filterPlayers = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const position = positionFilter.value;

    let filteredPlayers = players;

    // Filter by position if a specific one is selected
    if (position !== 'all') {
      filteredPlayers = filteredPlayers.filter(p => p.position === position);
    }

    // Filter by search term: name or age
    if (searchTerm) {
      filteredPlayers = filteredPlayers.filter(p => {
        const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
        
        if (searchTerm.includes('-')) {
          // Range search (e.g., 20-30 for ages)
          const [minAge, maxAge] = searchTerm.split('-').map(Number);
          return p.age >= minAge && p.age <= maxAge;
        } else if (!isNaN(searchTerm)) {
          // Exact age search
          return p.age === Number(searchTerm);
        } else {
          // Name search
          return fullName.includes(searchTerm);
        }
      });
    }

    render(filteredPlayers); // Show filtered players
  };

  // Update player list as user types
  searchInput.addEventListener('input', filterPlayers);
  // Update player list when dropdown changes
  positionFilter.addEventListener('change', filterPlayers);
  // Clear search and show all players when clear button is clicked
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    positionFilter.value = 'all';
    render(players);
  });

  // Initial display of all players
  render(players);
});
