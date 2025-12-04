document.addEventListener('DOMContentLoaded', () => {
    const cardGrid = document.getElementById('cardGrid');
    const searchInput = document.getElementById('searchInput');
    const prefectureSelect = document.getElementById('prefectureSelect');
    const noResults = document.getElementById('noResults');

    let companies = [];

    // Use data from data.js
    if (typeof companyData !== 'undefined') {
        // Sort by name
        companies = companyData.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
        populatePrefectures(companies);
        renderCards(companies);
    } else {
        console.error('Error loading data: companyData is undefined');
        cardGrid.innerHTML = '<p class="error">データの読み込みに失敗しました。</p>';
    }

    // Populate Prefecture Dropdown
    function populatePrefectures(data) {
        const prefectureOrder = [
            "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
            "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
            "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
            "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
            "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
            "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
            "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
        ];

        const uniquePrefectures = [...new Set(data.map(item => item.prefecture))];

        const sortedPrefectures = uniquePrefectures.sort((a, b) => {
            const indexA = prefectureOrder.indexOf(a);
            const indexB = prefectureOrder.indexOf(b);

            // Handle cases not in the list (shouldn't happen with correct data, but safe fallback)
            if (indexA === -1 && indexB === -1) return a.localeCompare(b, 'ja');
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;

            return indexA - indexB;
        });

        sortedPrefectures.forEach(pref => {
            const option = document.createElement('option');
            option.value = pref;
            option.textContent = pref;
            prefectureSelect.appendChild(option);
        });
    }

    // Render cards
    function renderCards(data) {
        cardGrid.innerHTML = '';

        if (data.length === 0) {
            noResults.classList.remove('hidden');
            return;
        } else {
            noResults.classList.add('hidden');
        }

        data.forEach(company => {
            const card = document.createElement('a');
            card.href = company.url;
            card.className = 'card';
            card.target = '_blank';
            card.rel = 'noopener noreferrer';

            // Create a clean display URL
            let displayUrl = company.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
            if (displayUrl.length > 30) {
                displayUrl = displayUrl.substring(0, 30) + '...';
            }

            card.innerHTML = `
                <div class="card-name">${escapeHtml(company.name)}</div>
                <div class="card-meta">
                    <span class="card-pref">${escapeHtml(company.prefecture)}</span>
                </div>
                <div class="card-url">${escapeHtml(displayUrl)}</div>
            `;

            cardGrid.appendChild(card);
        });
    }

    // Filter function
    function filterData() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedPref = prefectureSelect.value;

        const filteredCompanies = companies.filter(company => {
            const matchesSearch = company.name.toLowerCase().includes(searchTerm) ||
                company.kana.toLowerCase().includes(searchTerm) ||
                company.url.toLowerCase().includes(searchTerm);
            const matchesPref = selectedPref === '' || company.prefecture === selectedPref;

            return matchesSearch && matchesPref;
        });

        renderCards(filteredCompanies);
    }

    // Event Listeners
    searchInput.addEventListener('input', filterData);
    prefectureSelect.addEventListener('change', filterData);

    // Utility to prevent XSS
    function escapeHtml(text) {
        if (!text) return '';
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});
