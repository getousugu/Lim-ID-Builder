/* src/list.js */

const SINNERS_LIST = [
  "イサン", "ファウスト", "ドンキホーテ", "良秀", "ムルソー", 
  "ホンル", "ヒースクリフ", "イシュメール", "ロージャ", 
  "シンクレア", "ウーティス", "グレゴール"
];

export function renderList(container, identities, actions) {
  // Save filter state in simple session/module level variables so they persist while browsing
  if (!window._listFilterState) {
    window._listFilterState = {
      search: "",
      sinner: "all",
      sort: "updated_desc"
    };
  }
  
  const filterState = window._listFilterState;

  const renderContent = () => {
    // Filter identities
    let filtered = [...identities];
    
    if (filterState.search) {
      const q = filterState.search.toLowerCase();
      filtered = filtered.filter(char => 
        (char.name || "").toLowerCase().includes(q) ||
        (char.team || "").toLowerCase().includes(q) ||
        (char.keywords || []).some(k => k.toLowerCase().includes(q))
      );
    }
    
    if (filterState.sinner !== "all") {
      filtered = filtered.filter(char => char.prisoner === filterState.sinner);
    }
    
    // Sort
    filtered.sort((a, b) => {
      if (filterState.sort === "updated_desc") {
        return new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0);
      } else if (filterState.sort === "updated_asc") {
        return new Date(a.updatedAt || 0) - new Date(b.updatedAt || 0);
      } else if (filterState.sort === "name_asc") {
        return (a.name || "").localeCompare(b.name || "", "ja");
      }
      return 0;
    });

    const grid = container.querySelector("#identity-grid-container");
    if (!grid) return;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-muted); background: var(--panel-bg); border: 1px solid var(--border-color);">
          該当するキャラクターが見つかりません。新規作成するか、JSONファイルをインポートしてください。
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(char => {
      const imageStyle = char.image 
        ? `background-image: url('${char.image}');` 
        : '';
        
      const updateDate = char.updatedAt 
        ? new Date(char.updatedAt).toLocaleString("ja-JP", { hour12: false }) 
        : '不明';

      return `
        <div class="identity-card" data-id="${char.id}">
          <div class="identity-card-image" style="${imageStyle}">
            ${!char.image ? `<div class="identity-card-image-placeholder">${char.prisoner || 'イサン'}</div>` : ''}
            <div class="identity-card-tag">${char.prisoner || '未設定'}</div>
          </div>
          <div class="identity-card-info">
            <h3 class="identity-card-title">${char.name || "（名称未設定）"}</h3>
            <div class="identity-card-subtitle">${char.team || "所属・チーム未設定"}</div>
            
            <div class="identity-card-meta">
              <span>スキル: ${(char.skills?.skill1?.length || 0) + (char.skills?.skill2?.length || 0) + (char.skills?.skill3?.length || 0)} / 守備: ${char.skills?.defense?.length || 0}</span>
              <span>更新: ${updateDate.split(' ')[0]}</span>
            </div>
          </div>
          <div class="identity-card-actions">
            <button class="btn-open-edit" title="編集"><svg class="icon" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> 編集</button>
            <button class="btn-open-preview" title="プレビュー"><svg class="icon" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg> 表示</button>
            <button class="btn-duplicate" title="複製"><svg class="icon" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></button>
            <button class="btn-delete btn-danger" title="削除"><svg class="icon" viewBox="0 0 24 24" style="fill: #ff5252;"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
          </div>
        </div>
      `;
    }).join('');

    // Attach card action listeners
    grid.querySelectorAll(".identity-card").forEach(card => {
      const id = card.getAttribute("data-id");
      
      card.querySelector(".btn-open-edit").addEventListener("click", () => actions.onEdit(id));
      card.querySelector(".btn-open-preview").addEventListener("click", () => actions.onPreview(id));
      card.querySelector(".btn-duplicate").addEventListener("click", () => actions.onDuplicate(id));
      
      card.querySelector(".btn-delete").addEventListener("click", () => {
        const char = identities.find(c => c.id === id);
        if (char && confirm(`キャラクター「${char.name || "無題"}」を削除しますか？\n（この操作は取り消せません）`)) {
          actions.onDelete(id);
        }
      });
    });
  };

  // Render container shell
  const sinnerOptions = SINNERS_LIST.map(s => 
    `<option value="${s}" ${filterState.sinner === s ? 'selected' : ''}>${s}</option>`
  ).join('');

  container.innerHTML = `
    <div class="view-container">
      <div class="list-controls">
        <h2 style="font-family: 'Cinzel', serif; color: var(--gold-primary);">登録人格一覧</h2>
        <div style="display: flex; gap: 12px;">
          <button class="btn btn-primary" id="btn-create-new">+ 新規人格作成</button>
          <button class="btn" id="btn-import-json">
            <svg class="icon" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
            JSONインポート
          </button>
          <button class="btn" id="btn-open-global-dict">
            <svg class="icon" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
            用語辞書管理
          </button>
        </div>
      </div>

      <div class="panel" style="margin-bottom: 24px; padding: 16px;">
        <div class="search-filter-group">
          <input type="text" id="search-input" class="search-input" placeholder="名前、所属、キーワードで検索..." value="${filterState.search}">
          
          <select id="sinner-filter" class="filter-select">
            <option value="all" ${filterState.sinner === 'all' ? 'selected' : ''}>すべての囚人</option>
            ${sinnerOptions}
          </select>
          
          <select id="sort-select" class="filter-select">
            <option value="updated_desc" ${filterState.sort === 'updated_desc' ? 'selected' : ''}>最終更新（新しい順）</option>
            <option value="updated_asc" ${filterState.sort === 'updated_asc' ? 'selected' : ''}>最終更新（古い順）</option>
            <option value="name_asc" ${filterState.sort === 'name_asc' ? 'selected' : ''}>名前順（昇順）</option>
          </select>
        </div>
      </div>

      <div class="identity-grid" id="identity-grid-container">
        <!-- Rendered items go here -->
      </div>
    </div>

    <!-- Hidden file input for JSON import -->
    <input type="file" id="json-file-input" accept=".json" style="display: none;">
  `;

  // Attach search and filter events
  const searchInput = container.querySelector("#search-input");
  const sinnerFilter = container.querySelector("#sinner-filter");
  const sortSelect = container.querySelector("#sort-select");

  searchInput.addEventListener("input", (e) => {
    filterState.search = e.target.value;
    renderContent();
  });

  sinnerFilter.addEventListener("change", (e) => {
    filterState.sinner = e.target.value;
    renderContent();
  });

  sortSelect.addEventListener("change", (e) => {
    filterState.sort = e.target.value;
    renderContent();
  });

  // Action buttons
  container.querySelector("#btn-create-new").addEventListener("click", () => actions.onCreateNew());
  
  container.querySelector("#btn-open-global-dict").addEventListener("click", () => actions.onOpenDict());
  
  // JSON Import trigger
  const fileInput = container.querySelector("#json-file-input");
  container.querySelector("#btn-import-json").addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const charData = JSON.parse(event.target.result);
          actions.onImportJSON(charData);
        } catch (err) {
          alert("JSONファイルの解析に失敗しました。正しいフォーマットか確認してください。");
        }
      };
      reader.readAsText(file);
      // Reset input
      fileInput.value = "";
    }
  });

  // Initial render
  renderContent();
}
