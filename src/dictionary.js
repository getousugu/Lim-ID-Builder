/* src/dictionary.js */

// Default terms to pre-populate the dictionary
const DEFAULT_TERMS = [
  {
    id: "term-poise",
    name: "呼吸",
    type: "buff",
    color: "#81c784", // Light green
    description: "クリティカル確率が増加する。\nクリティカル発生時、呼吸回数を1消費し、ダメージが+20%増加する。",
    icon: "preset-wind"
  },
  {
    id: "term-bleed",
    name: "出血",
    type: "debuff",
    color: "#e57373", // Light red
    description: "コインを投げる度、出血数値分の固定ダメージを受け、出血回数が1減少する。",
    icon: "preset-blood"
  },
  {
    id: "term-burn",
    name: "火傷",
    type: "debuff",
    color: "#ff8a65", // Orange-red
    description: "ターン終了時、火傷数値分の固定ダメージを受け、火傷回数が1減少する。",
    icon: "preset-fire"
  },
  {
    id: "term-sinking",
    name: "沈潜",
    type: "debuff",
    color: "#64b5f6", // Light blue
    description: "被撃時、沈潜数値分の精神力ダメージを受け、沈潜回数が1減少する。\n(幻想体など精神力のない対象の場合は、憂鬱属性ダメージを与える)",
    icon: "preset-sinking"
  },
  {
    id: "term-tremor",
    name: "振動",
    type: "debuff",
    color: "#a1887f", // Brownish/gold
    description: "振動爆発を誘発するスキルの的中時、振動数値分だけ混乱閾値を前進させる。\nターン終了時、振動回数が1減少する。",
    icon: "preset-tremor"
  },
  {
    id: "term-rupture",
    name: "破裂",
    type: "debuff",
    color: "#dce775", // Lime/yellow-green
    description: "被撃時、破裂数値分の固定ダメージを受け、破裂回数が1減少する。",
    icon: "preset-rupture"
  },
  {
    id: "term-charge",
    name: "充電",
    type: "resource",
    color: "#4dd0e1", // Cyan
    description: "特定のスキル効果を発動するために消費される固有リソース。\nターン終了時、充電回数が1減少する。",
    icon: "preset-charge"
  },
  {
    id: "term-haste",
    name: "クイック",
    type: "buff",
    color: "#ffd54f", // Gold/Amber
    description: "次のターンの速度の最大値と最小値が数値分増加する。",
    icon: "preset-haste"
  },
  {
    id: "term-protection",
    name: "保護",
    type: "buff",
    color: "#9575cd", // Purple
    description: "このターン中、被撃時に受けるダメージ量が(数値×10)%減少する。",
    icon: "preset-protection"
  },
  {
    id: "term-dmg-up",
    name: "ダメージ量増加",
    type: "buff",
    color: "#ffb74d", // Orange
    description: "与えるダメージ量が(数値×10)%増加する。",
    icon: "preset-dmg-up"
  }
];

export function initDictionary() {
  if (!localStorage.getItem("limbus_dictionary")) {
    localStorage.setItem("limbus_dictionary", JSON.stringify(DEFAULT_TERMS));
  }
}

export function getDictionary() {
  initDictionary();
  return JSON.parse(localStorage.getItem("limbus_dictionary"));
}

export function saveDictionary(dict) {
  localStorage.setItem("limbus_dictionary", JSON.stringify(dict));
}

export function addTerm(term) {
  const dict = getDictionary();
  const newTerm = {
    id: 'term-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
    ...term
  };
  dict.push(newTerm);
  saveDictionary(dict);
  return newTerm;
}

export function updateTerm(id, updatedTerm) {
  let dict = getDictionary();
  dict = dict.map(t => t.id === id ? { ...t, ...updatedTerm } : t);
  saveDictionary(dict);
}

export function deleteTerm(id) {
  let dict = getDictionary();
  dict = dict.filter(t => t.id !== id);
  saveDictionary(dict);
}

// Preset Icon SVGs mapped by name
const PRESET_ICONS = {
  "preset-wind": `<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M2 12h14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2h-2c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.8-1.2 3.3-2.8 3.8l.6 1.9C21.4 14.2 23 12.3 23 10c0-3.9-3.1-7-7-7s-7 3.1-7 7H2v2zm16 4h-2c0 1.1-.9 2-2 2s-2-.9-2-2H8c0 2.2 1.8 4 4 4s4-1.8 4-4 1.8-4 4-4v2c-1.1 0-2 .9-2 2z"/></svg>`,
  "preset-blood": `<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  "preset-fire": `<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 23c-4.41 0-8-3.59-8-8 0-4.04 4-9.33 8-13.62 4 4.29 8 9.58 8 13.62 0 4.41-3.59 8-8 8zm0-18.73c-2.83 3.25-6 7.42-6 10.73 0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.31-3.17-7.48-6-10.73z"/></svg>`,
  "preset-sinking": `<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
  "preset-tremor": `<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48l2.12 2.12M18.36 5.64l-2.12 2.12M7.76 16.24l-2.12 2.12M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>`,
  "preset-rupture": `<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5l7 2.5z"/></svg>`,
  "preset-charge": `<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>`,
  "preset-haste": `<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/></svg>`,
  "preset-protection": `<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`,
  "preset-dmg-up": `<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>`,
  "default": `<svg class="term-link-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`
};

export function getTermIcon(iconName) {
  return PRESET_ICONS[iconName] || PRESET_ICONS["default"];
}

// Convert [[用語名]] in text to colorized tags with hover card triggers
export function parseTermsHTML(text, inlineDict = []) {
  if (!text) return "";
  
  // Combine global dictionary and identity's inline dict (inline dict has precedence)
  const globalDict = getDictionary();
  const combinedDict = [...inlineDict, ...globalDict];
  
  // Create a map by name to easily find terms
  const termMap = new Map();
  combinedDict.forEach(term => {
    termMap.set(term.name, term);
  });
  
  // Replace [[用語名]]
  return text.replace(/\[\[([^\]]+)\]\]/g, (match, termName) => {
    const term = termMap.get(termName);
    if (term) {
      const iconSVG = getTermIcon(term.icon);
      return `<span class="term-link" style="color: ${term.color};" data-term-id="${term.id}" data-term-name="${term.name}" data-term-desc="${term.description.replace(/"/g, '&quot;')}" data-term-type="${term.type}">${iconSVG}${term.name}</span>`;
    }
    return termName; // fallback if term not found in dictionary
  });
}

// Setup @ autocomplete for a textarea
export function setupAutocomplete(textarea, container, inlineDict = []) {
  // Create autocomplete popup element if it doesn't exist
  let popup = container.querySelector(".autocomplete-suggestions");
  if (!popup) {
    popup = document.createElement("div");
    popup.className = "autocomplete-suggestions";
    container.appendChild(popup);
  }

  let activeIndex = -1;
  let matchingTerms = [];
  let queryStartIdx = -1;

  textarea.addEventListener("input", (e) => {
    const text = textarea.value;
    const selStart = textarea.selectionStart;
    const textBefore = text.slice(0, selStart);
    
    // Find the last '@'
    const atIndex = textBefore.lastIndexOf('@');
    
    if (atIndex !== -1) {
      // Check if there is any whitespace between '@' and cursor
      const textAfterAt = textBefore.slice(atIndex + 1);
      if (!/\s/.test(textAfterAt)) {
        // We are querying!
        queryStartIdx = atIndex;
        const query = textAfterAt.toLowerCase();
        
        const globalDict = getDictionary();
        const combinedDict = [...inlineDict, ...globalDict];
        
        // Remove duplicates by name
        const uniqueDict = [];
        const seen = new Set();
        combinedDict.forEach(t => {
          if (!seen.has(t.name)) {
            seen.add(t.name);
            uniqueDict.push(t);
          }
        });

        matchingTerms = uniqueDict.filter(term => 
          term.name.toLowerCase().includes(query)
        );

        if (matchingTerms.length > 0) {
          renderSuggestions(matchingTerms);
          showPopup();
          return;
        }
      }
    }
    
    hidePopup();
  });

  textarea.addEventListener("keydown", (e) => {
    if (popup.style.display === "block") {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIndex = (activeIndex + 1) % matchingTerms.length;
        updateActiveSuggestion();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIndex = (activeIndex - 1 + matchingTerms.length) % matchingTerms.length;
        updateActiveSuggestion();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < matchingTerms.length) {
          selectSuggestion(matchingTerms[activeIndex]);
        } else if (matchingTerms.length > 0) {
          selectSuggestion(matchingTerms[0]);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        hidePopup();
      }
    }
  });

  // Hide popup on blur (with delay to allow click)
  textarea.addEventListener("blur", () => {
    setTimeout(hidePopup, 200);
  });

  function showPopup() {
    popup.style.display = "block";
    
    // Position the popup below the caret if possible, or just below the textarea
    // For simplicity and bulletproof layout, position it relative to the wrapper/textarea
    const textareaRect = textarea.getBoundingClientRect();
    const wrapperRect = textarea.parentElement.getBoundingClientRect();
    
    popup.style.left = `12px`;
    popup.style.top = `${textarea.offsetHeight}px`;
    activeIndex = -1;
  }

  function hidePopup() {
    popup.style.display = "none";
    activeIndex = -1;
  }

  function renderSuggestions(terms) {
    popup.innerHTML = "";
    terms.forEach((term, idx) => {
      const item = document.createElement("div");
      item.className = "autocomplete-suggestion-item";
      if (idx === activeIndex) item.classList.add("active");
      
      const typeLabel = {
        buff: "バフ",
        debuff: "デバフ",
        status: "状態異常",
        resource: "資源",
        item: "アイテム",
        special: "特殊",
        other: "その他"
      }[term.type] || "用語";

      item.innerHTML = `
        <span style="color: ${term.color}; font-weight: 700;">${term.name}</span>
        <span class="suggestion-type">${typeLabel}</span>
      `;
      
      item.addEventListener("mousedown", (e) => {
        e.preventDefault(); // prevent blur
        selectSuggestion(term);
      });
      
      popup.appendChild(item);
    });
  }

  function updateActiveSuggestion() {
    const items = popup.querySelectorAll(".autocomplete-suggestion-item");
    items.forEach((item, idx) => {
      if (idx === activeIndex) {
        item.classList.add("active");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("active");
      }
    });
  }

  function selectSuggestion(term) {
    const text = textarea.value;
    const selStart = textarea.selectionStart;
    
    // Replace '@query' with '[[用語名]]'
    const beforeAt = text.slice(0, queryStartIdx);
    const afterCursor = text.slice(selStart);
    
    textarea.value = beforeAt + `[[${term.name}]]` + afterCursor;
    
    // Position cursor after the inserted term
    const newCursorPos = queryStartIdx + term.name.length + 4; // '[[name]]' is name.length + 4 chars
    textarea.setSelectionRange(newCursorPos, newCursorPos);
    
    hidePopup();
    
    // Trigger input event to update previews
    textarea.dispatchEvent(new Event("input"));
  }
}

// Tooltip floating manager
let activeTooltip = null;

export function setupTooltips(container) {
  // Create global tooltip element if not exists
  let tooltip = document.getElementById("global-term-tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "global-term-tooltip";
    tooltip.className = "term-tooltip";
    document.body.appendChild(tooltip);
  }

  container.addEventListener("mouseover", (e) => {
    const termLink = e.target.closest(".term-link");
    if (termLink) {
      const name = termLink.getAttribute("data-term-name");
      const desc = termLink.getAttribute("data-term-desc");
      const type = termLink.getAttribute("data-term-type");
      const color = termLink.style.color;

      const typeText = {
        buff: "バフ",
        debuff: "デバフ",
        status: "状態異常",
        resource: "固有リソース",
        item: "固有アイテム",
        special: "特殊",
        other: "その他"
      }[type] || "用語";

      tooltip.innerHTML = `
        <div class="term-tooltip-title" style="color: ${color};">${name}</div>
        <div class="term-tooltip-type">${typeText}</div>
        <div class="term-tooltip-desc">${desc}</div>
      `;
      
      tooltip.classList.add("visible");
      activeTooltip = termLink;
      
      positionTooltip(e, tooltip);
    }
  });

  container.addEventListener("mousemove", (e) => {
    if (activeTooltip) {
      positionTooltip(e, tooltip);
    }
  });

  container.addEventListener("mouseout", (e) => {
    const termLink = e.target.closest(".term-link");
    if (termLink && activeTooltip === termLink) {
      tooltip.classList.remove("visible");
      activeTooltip = null;
    }
  });

  function positionTooltip(e, tooltipEl) {
    const margin = 15;
    let x = e.clientX + margin;
    let y = e.clientY + margin;
    
    // Boundary check
    const tooltipRect = tooltipEl.getBoundingClientRect();
    if (x + tooltipRect.width > window.innerWidth) {
      x = e.clientX - tooltipRect.width - margin;
    }
    if (y + tooltipRect.height > window.innerHeight) {
      y = e.clientY - tooltipRect.height - margin;
    }
    
    // Apply scroll offsets (tooltip is fixed or absolute)
    tooltipEl.style.left = `${x + window.scrollX}px`;
    tooltipEl.style.top = `${y + window.scrollY}px`;
  }
}

// Renders the dictionary manager inside a modal
export function renderDictionaryManager(modalBody) {
  const dict = getDictionary();
  
  modalBody.innerHTML = `
    <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
      <h3 style="color: var(--gold-primary);">登録用語一覧</h3>
      <button class="btn btn-primary btn-sm" id="btn-add-new-term">+ 新規用語追加</button>
    </div>
    
    <div id="term-form-container" style="display: none; background: var(--panel-bg-alt); padding: 16px; border: 1px solid var(--border-color); margin-bottom: 16px; border-radius: 4px;">
      <h4 id="term-form-title" style="margin-bottom: 12px; color: var(--gold-primary);">新規用語登録</h4>
      <input type="hidden" id="edit-term-id">
      
      <div class="form-group">
        <label>用語名</label>
        <input type="text" id="term-name-input" class="form-control" placeholder="例: 出血">
      </div>
      
      <div class="form-row-grid">
        <div class="form-group">
          <label>種別</label>
          <select id="term-type-input" class="form-control">
            <option value="buff">バフ</option>
            <option value="debuff">デバフ</option>
            <option value="status">状態異常</option>
            <option value="resource">固有リソース</option>
            <option value="item">固有アイテム</option>
            <option value="special">特殊</option>
            <option value="other">その他</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>表示カラー</label>
          <div style="display: flex; gap: 8px; align-items: center;">
            <input type="color" id="term-color-input" class="form-control" style="width: 50px; padding: 2px; height: 38px;" value="#ffd54f">
            <input type="text" id="term-color-text" class="form-control" placeholder="#ffd54f" value="#ffd54f" style="flex: 1;">
          </div>
        </div>

        <div class="form-group">
          <label>アイコンプリセット</label>
          <select id="term-icon-input" class="form-control">
            <option value="preset-wind">呼吸（風）</option>
            <option value="preset-blood">出血（滴）</option>
            <option value="preset-fire">火傷（炎）</option>
            <option value="preset-sinking">沈潜（闇）</option>
            <option value="preset-tremor">振動（音叉）</option>
            <option value="preset-rupture">破裂（亀裂）</option>
            <option value="preset-charge">充電（雷）</option>
            <option value="preset-haste">クイック（矢印）</option>
            <option value="preset-protection">保護（盾）</option>
            <option value="preset-dmg-up">攻撃（上矢印）</option>
            <option value="default">デフォルト（丸）</option>
          </select>
        </div>
      </div>
      
      <div class="form-group">
        <label>効果説明テキスト</label>
        <textarea id="term-desc-input" class="form-control" placeholder="説明を入力してください..." rows="3"></textarea>
      </div>
      
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="btn btn-sm" id="btn-cancel-term">キャンセル</button>
        <button class="btn btn-primary btn-sm" id="btn-save-term">保存</button>
      </div>
    </div>

    <div style="max-height: 400px; overflow-y: auto;">
      <table class="dict-table">
        <thead>
          <tr>
            <th>名前</th>
            <th>種別</th>
            <th>カラー</th>
            <th style="text-align: right;">操作</th>
          </tr>
        </thead>
        <tbody id="dict-table-body">
          <!-- Terms will be rendered here -->
        </tbody>
      </table>
    </div>
  `;

  const formContainer = modalBody.querySelector("#term-form-container");
  const formTitle = modalBody.querySelector("#term-form-title");
  const editIdInput = modalBody.querySelector("#edit-term-id");
  const nameInput = modalBody.querySelector("#term-name-input");
  const typeSelect = modalBody.querySelector("#term-type-input");
  const colorInput = modalBody.querySelector("#term-color-input");
  const colorTextInput = modalBody.querySelector("#term-color-text");
  const iconSelect = modalBody.querySelector("#term-icon-input");
  const descInput = modalBody.querySelector("#term-desc-input");
  const tableBody = modalBody.querySelector("#dict-table-body");
  
  // Sync color colorpicker and text input
  colorInput.addEventListener("input", (e) => {
    colorTextInput.value = e.target.value;
  });
  colorTextInput.addEventListener("input", (e) => {
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      colorInput.value = e.target.value;
    }
  });

  function renderTable() {
    const currentDict = getDictionary();
    tableBody.innerHTML = "";
    currentDict.forEach(term => {
      const row = document.createElement("tr");
      
      const typeLabel = {
        buff: "バフ",
        debuff: "デバフ",
        status: "状態異常",
        resource: "固有リソース",
        item: "固有アイテム",
        special: "特殊",
        other: "その他"
      }[term.type] || "用語";

      row.innerHTML = `
        <td>
          <span style="color: ${term.color}; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
            ${getTermIcon(term.icon)}${term.name}
          </span>
        </td>
        <td>${typeLabel}</td>
        <td>
          <span class="color-preview-circle" style="background-color: ${term.color};"></span>
          <code>${term.color}</code>
        </td>
        <td style="text-align: right;">
          <button class="btn btn-sm btn-edit-term" data-id="${term.id}" style="margin-right: 4px;">編集</button>
          <button class="btn btn-danger btn-sm btn-delete-term" data-id="${term.id}">削除</button>
        </td>
      `;
      tableBody.appendChild(row);
    });

    // Attach row button events
    tableBody.querySelectorAll(".btn-edit-term").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const term = currentDict.find(t => t.id === id);
        if (term) {
          editIdInput.value = term.id;
          nameInput.value = term.name;
          typeSelect.value = term.type;
          colorInput.value = term.color;
          colorTextInput.value = term.color;
          iconSelect.value = term.icon || "default";
          descInput.value = term.description;
          
          formTitle.textContent = "用語の編集";
          formContainer.style.display = "block";
        }
      });
    });

    tableBody.querySelectorAll(".btn-delete-term").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const term = currentDict.find(t => t.id === id);
        if (term && confirm(`用語「${term.name}」を削除しますか？`)) {
          deleteTerm(id);
          renderTable();
        }
      });
    });
  }

  // Add new click
  modalBody.querySelector("#btn-add-new-term").addEventListener("click", () => {
    editIdInput.value = "";
    nameInput.value = "";
    typeSelect.value = "buff";
    colorInput.value = "#ffd54f";
    colorTextInput.value = "#ffd54f";
    iconSelect.value = "default";
    descInput.value = "";
    
    formTitle.textContent = "新規用語登録";
    formContainer.style.display = "block";
  });

  // Cancel click
  modalBody.querySelector("#btn-cancel-term").addEventListener("click", () => {
    formContainer.style.display = "none";
  });

  // Save click
  modalBody.querySelector("#btn-save-term").addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) {
      alert("用語名を入力してください。");
      return;
    }
    
    const termData = {
      name: name,
      type: typeSelect.value,
      color: colorTextInput.value,
      icon: iconSelect.value,
      description: descInput.value.trim()
    };

    const id = editIdInput.value;
    if (id) {
      updateTerm(id, termData);
    } else {
      // Check duplicate
      const currentDict = getDictionary();
      if (currentDict.some(t => t.name === name)) {
        alert("すでに同じ名前の用語が登録されています。");
        return;
      }
      addTerm(termData);
    }

    formContainer.style.display = "none";
    renderTable();
  });

  renderTable();
}
