document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');
  const searchInput = document.getElementById('searchInput');
  const positionFilter = document.getElementById('positionFilter');
  const clearButton = document.getElementById('clearSearch');

  // Dynamically populate position dropdown
  const positions = players
    .map(p => p.position)
    .reduce((unique, pos) => unique.includes(pos) ? unique : [...unique, pos], [])
    .sort();

  positionFilter.innerHTML = '<option value="all">All Positions</option>';
  positions.forEach(pos => {
    const option = document.createElement('option');
    option.value = pos;
    option.textContent = pos;
    positionFilter.appendChild(option);
  });

  const render = list => {
    grid.innerHTML = '';
    list.forEach((p, index) => {
      const modalId = `playerModal-${p.firstName}-${p.lastName}`.replace(/\s+/g, '-');
      const escapedFunFact = p.funFact.replace(/"/g, '&quot;').replace(/'/g, '&apos;');

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

      grid.appendChild(col);
    });

    // Handle modal "Fun Fact" button clicks using event delegation
    grid.addEventListener('click', function (e) {
      const btn = e.target.closest('.toggle-fact');
      if (btn) {
        const modalId = btn.getAttribute('data-modal-id');
        const funFact = btn.getAttribute('data-fact');
        const modal = document.getElementById(modalId);
        const bodies = modal.getElementsByClassName('modal-body');
        if (bodies.length > 0) bodies[0].textContent = funFact;

        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show';
        document.body.appendChild(backdrop);
      }

      // Close modal buttons
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

    // Click outside modal to close
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

  const filterPlayers = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const position = positionFilter.value;

    let filteredPlayers = players;

    if (position !== 'all') {
      filteredPlayers = filteredPlayers.filter(p => p.position === position);
    }

    if (searchTerm) {
      filteredPlayers = filteredPlayers.filter(p => {
        const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
        if (searchTerm.includes('-')) {
          const [minAge, maxAge] = searchTerm.split('-').map(Number);
          return p.age >= minAge && p.age <= maxAge;
        } else if (!isNaN(searchTerm)) {
          return p.age === Number(searchTerm);
        } else {
          return fullName.includes(searchTerm);
        }
      });
    }

    render(filteredPlayers);
  };

  searchInput.addEventListener('input', filterPlayers);
  positionFilter.addEventListener('change', filterPlayers);
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    positionFilter.value = 'all';
    render(players);
  });

  render(players);
});
