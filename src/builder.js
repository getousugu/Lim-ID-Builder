/* src/builder.js */
import { setupAutocomplete } from './dictionary.js';

const SINNERS_LIST = [
  "イサン", "ファウスト", "ドンキホーテ", "良秀", "ムルソー", 
  "ホンル", "ヒースクリフ", "イシュメール", "ロージャ", 
  "シンクレア", "ウーティス", "グレゴール"
];

const SIN_OPTIONS = [
  { value: "wrath", label: "憤怒 (赤)" },
  { value: "lust", label: "色欲 (橙)" },
  { value: "sloth", label: "怠惰 (黄)" },
  { value: "gluttony", label: "暴食 (緑)" },
  { value: "gloom", label: "憂鬱 (水色)" },
  { value: "pride", label: "傲慢 (青)" },
  { value: "envy", label: "嫉妬 (紫)" }
];

export function renderBuilder(container, char, onSave, onBackToList) {
  let activeTab = "builder-tab-s1"; // default tab
  const inlineDict = char.dictionary || [];

  // Setup basic HTML shell
  container.innerHTML = `
    <div class="view-container">
      <div class="builder-header">
        <div style="display: flex; align-items: center; gap: 16px;">
          <button class="btn" id="btn-back"><svg class="icon" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> 戻る</button>
          <h2 style="font-family: 'Cinzel', serif; color: var(--gold-primary);">人格の編集</h2>
        </div>
        <div style="display: flex; gap: 12px;">
          <button class="btn btn-primary" id="btn-save-character">JSONエクスポート</button>
        </div>
      </div>
      
      <div class="builder-layout">
        <!-- Left Panel: Stats & Details -->
        <div class="panel" id="builder-left-panel"></div>
        
        <!-- Right Panel: Tabs, Skills & Passives -->
        <div class="panel" id="builder-right-panel" style="padding: 20px 0;"></div>
      </div>
    </div>
  `;

  // Left Panel controls
  const renderLeftPanel = () => {
    const leftPanel = container.querySelector("#builder-left-panel");
    if (!leftPanel) return;

    const sinnerOptions = SINNERS_LIST.map(s => 
      `<option value="${s}" ${char.prisoner === s ? 'selected' : ''}>${s}</option>`
    ).join('');

    const imageStyle = char.image ? `background-image: url('${char.image}');` : '';

    leftPanel.innerHTML = `
      <div class="panel-title">基本情報</div>
      
      <!-- Image Uploader -->
      <div class="form-group">
        <label>キャラクター画像</label>
        <div class="image-uploader ${char.image ? 'has-image' : ''}" id="image-upload-area" style="${imageStyle}">
          <div class="uploader-text" style="text-align: center; color: var(--text-muted); font-size: 0.85rem;">
            <svg class="icon" style="width: 32px; height: 32px; margin-bottom: 8px;" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
            クリックして画像をアップロード
          </div>
          <div class="uploader-overlay">
            <button class="btn btn-sm btn-danger" id="btn-delete-image">画像を削除</button>
          </div>
          <input type="file" id="char-image-input" accept="image/*" style="display: none;">
        </div>
      </div>

      <div class="form-group">
        <label>人格（キャラクター）名</label>
        <input type="text" id="char-name" class="form-control" placeholder="例: 蜘蛛の巣 中指の親方" value="${char.name || ''}">
      </div>

      <div class="form-row-grid">
        <div class="form-group">
          <label>所属囚人</label>
          <select id="char-prisoner" class="form-control">
            ${sinnerOptions}
          </select>
        </div>
        <div class="form-group">
          <label>所属・チーム名</label>
          <input type="text" id="char-team" class="form-control" placeholder="例: 中指" value="${char.team || ''}">
        </div>
      </div>

      <div class="panel-title" style="margin-top: 24px;">ステータス</div>
      <div class="form-row-grid">
        <div class="form-group">
          <label>最大HP</label>
          <input type="number" id="char-hp" class="form-control" value="${char.stats.hp || 100}">
        </div>
        <div class="form-group">
          <label>速度(最小)</label>
          <input type="number" id="char-speed-min" class="form-control" value="${char.stats.speedMin || 1}">
        </div>
        <div class="form-group">
          <label>速度(最大)</label>
          <input type="number" id="char-speed-max" class="form-control" value="${char.stats.speedMax || 5}">
        </div>
      </div>
      <div class="form-group">
        <label>防御補正 (±)</label>
        <input type="number" id="char-def-correction" class="form-control" value="${char.stats.defCorrection || 0}">
      </div>

      <div class="panel-title" style="margin-top: 24px;">属性耐性</div>
      ${renderResistanceSelect("斬撃", "slash", char.resistances.slash, char.resistances.slashVal)}
      ${renderResistanceSelect("貫通", "pierce", char.resistances.pierce, char.resistances.pierceVal)}
      ${renderResistanceSelect("打撃", "strike", char.resistances.strike, char.resistances.strikeVal)}

      <div class="panel-title" style="margin-top: 24px; display: flex; justify-content: space-between;">
        <span>混乱区間</span>
        <button class="btn btn-sm btn-primary" id="btn-add-stagger" style="padding: 2px 8px;">+ 追加</button>
      </div>
      <div id="stagger-inputs-container">
        <!-- Rendered stagger inputs -->
      </div>

      <div class="panel-title" style="margin-top: 24px;">特性キーワード</div>
      <div class="form-group">
        <div style="display: flex; gap: 8px;">
          <input type="text" id="keyword-input" class="form-control" placeholder="タグを入力してEnterか追加">
          <button class="btn btn-sm btn-primary" id="btn-add-keyword">追加</button>
        </div>
        <div class="tags-container" id="keywords-badges-container">
          <!-- Keyword badges -->
        </div>
      </div>

      <div class="panel-title" style="margin-top: 24px;">その他メタデータ</div>
      <div class="form-group">
        <label>シーズン名</label>
        <input type="text" id="char-season" class="form-control" placeholder="例: シーズン7" value="${char.season || ''}">
      </div>
      <div class="form-group">
        <label>リリース日</label>
        <input type="date" id="char-releasedate" class="form-control" value="${char.releaseDate || ''}">
      </div>
    `;

    // Hook image uploading
    const uploadArea = leftPanel.querySelector("#image-upload-area");
    const fileInput = leftPanel.querySelector("#char-image-input");
    const deleteImgBtn = leftPanel.querySelector("#btn-delete-image");

    uploadArea.addEventListener("click", (e) => {
      if (e.target !== deleteImgBtn) {
        fileInput.click();
      }
    });

    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          char.image = event.target.result;
          uploadArea.style.backgroundImage = `url('${char.image}')`;
          uploadArea.classList.add("has-image");
          saveState();
        };
        reader.readAsDataURL(file);
      }
    });

    deleteImgBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      char.image = null;
      uploadArea.style.backgroundImage = '';
      uploadArea.classList.remove("has-image");
      fileInput.value = "";
      saveState();
    });

    // Basic text bindings
    leftPanel.querySelector("#char-name").addEventListener("input", (e) => {
      char.name = e.target.value;
      saveState();
    });
    leftPanel.querySelector("#char-prisoner").addEventListener("change", (e) => {
      char.prisoner = e.target.value;
      saveState();
    });
    leftPanel.querySelector("#char-team").addEventListener("input", (e) => {
      char.team = e.target.value;
      saveState();
    });
    leftPanel.querySelector("#char-hp").addEventListener("input", (e) => {
      char.stats.hp = parseInt(e.target.value) || 0;
      updateStaggerPercentages();
      saveState();
    });
    leftPanel.querySelector("#char-speed-min").addEventListener("input", (e) => {
      char.stats.speedMin = parseInt(e.target.value) || 0;
      saveState();
    });
    leftPanel.querySelector("#char-speed-max").addEventListener("input", (e) => {
      char.stats.speedMax = parseInt(e.target.value) || 0;
      saveState();
    });
    leftPanel.querySelector("#char-def-correction").addEventListener("input", (e) => {
      char.stats.defCorrection = parseInt(e.target.value) || 0;
      saveState();
    });
    leftPanel.querySelector("#char-season").addEventListener("input", (e) => {
      char.season = e.target.value;
      saveState();
    });
    leftPanel.querySelector("#char-releasedate").addEventListener("change", (e) => {
      char.releaseDate = e.target.value;
      saveState();
    });

    // Resistances change handlers
    ["slash", "pierce", "strike"].forEach(resKey => {
      const typeSel = leftPanel.querySelector(`#res-type-${resKey}`);
      const valInput = leftPanel.querySelector(`#res-val-${resKey}`);
      
      typeSel.addEventListener("change", (e) => {
        char.resistances[resKey] = e.target.value;
        if (e.target.value === 'custom') {
          valInput.style.display = 'block';
        } else {
          valInput.style.display = 'none';
          char.resistances[`${resKey}Val`] = {
            fatal: 2.0, weak: 1.5, normal: 1.0, resist: 0.5, immune: 0.0
          }[e.target.value] || 1.0;
        }
        saveState();
      });

      valInput.addEventListener("input", (e) => {
        char.resistances[`${resKey}Val`] = parseFloat(e.target.value) || 1.0;
        saveState();
      });
    });

    // Stagger render & events
    renderStaggerInputs();
    leftPanel.querySelector("#btn-add-stagger").addEventListener("click", () => {
      char.staggers = char.staggers || [];
      char.staggers.push(0);
      renderStaggerInputs();
      saveState();
    });

    // Keywords render & events
    renderKeywords();
    const keywordInput = leftPanel.querySelector("#keyword-input");
    const addKeyword = () => {
      const val = keywordInput.value.trim();
      if (val && !char.keywords.includes(val)) {
        char.keywords.push(val);
        keywordInput.value = "";
        renderKeywords();
        saveState();
      }
    };
    leftPanel.querySelector("#btn-add-keyword").addEventListener("click", addKeyword);
    keywordInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addKeyword();
      }
    });
  };

  // Helper: Resistance dropdown rendering
  const renderResistanceSelect = (label, key, selectedType, val) => {
    const isCustom = selectedType === 'custom';
    return `
      <div class="form-group" style="margin-bottom: 12px;">
        <label>${label}耐性</label>
        <div style="display: flex; gap: 8px;">
          <select id="res-type-${key}" class="form-control" style="flex: 1;">
            <option value="normal" ${selectedType === 'normal' ? 'selected' : ''}>普通 (x1.0)</option>
            <option value="resist" ${selectedType === 'resist' ? 'selected' : ''}>耐性 (x0.5)</option>
            <option value="weak" ${selectedType === 'weak' ? 'selected' : ''}>弱点 (x1.5)</option>
            <option value="fatal" ${selectedType === 'fatal' ? 'selected' : ''}>脆弱 (x2.0)</option>
            <option value="immune" ${selectedType === 'immune' ? 'selected' : ''}>無効 (x0.0)</option>
            <option value="custom" ${selectedType === 'custom' ? 'selected' : ''}>カスタム入力</option>
          </select>
          <input type="number" step="0.1" id="res-val-${key}" class="form-control" style="width: 80px; display: ${isCustom ? 'block' : 'none'};" value="${val || 1.0}">
        </div>
      </div>
    `;
  };

  // Helper: Stagger List render
  const renderStaggerInputs = () => {
    const containerEl = container.querySelector("#stagger-inputs-container");
    if (!containerEl) return;
    char.staggers = char.staggers || [];
    
    containerEl.innerHTML = char.staggers.map((val, idx) => {
      const pct = char.stats.hp > 0 ? Math.round((val / char.stats.hp) * 100) : 0;
      return `
        <div class="list-editor-item stagger-row-item" data-index="${idx}">
          <input type="number" class="form-control stagger-value-input" value="${val}" style="flex: 1;">
          <span class="stagger-calc-percentage" style="min-width: 60px; font-weight: 600; color: var(--gold-primary); text-align: center;">(${pct}%)</span>
          <button class="btn btn-sm btn-danger btn-remove-stagger"><svg class="icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>
        </div>
      `;
    }).join('');

    // Events for stagger rows
    containerEl.querySelectorAll(".stagger-row-item").forEach(row => {
      const idx = parseInt(row.getAttribute("data-index"));
      const input = row.querySelector(".stagger-value-input");
      const pctText = row.querySelector(".stagger-calc-percentage");
      
      input.addEventListener("input", (e) => {
        const val = parseInt(e.target.value) || 0;
        char.staggers[idx] = val;
        const pct = char.stats.hp > 0 ? Math.round((val / char.stats.hp) * 100) : 0;
        pctText.textContent = `(${pct}%)`;
        saveState();
      });

      row.querySelector(".btn-remove-stagger").addEventListener("click", () => {
        char.staggers.splice(idx, 1);
        renderStaggerInputs();
        saveState();
      });
    });
  };

  const updateStaggerPercentages = () => {
    const rows = container.querySelectorAll(".stagger-row-item");
    rows.forEach(row => {
      const input = row.querySelector(".stagger-value-input");
      const pctText = row.querySelector(".stagger-calc-percentage");
      const val = parseInt(input.value) || 0;
      const pct = char.stats.hp > 0 ? Math.round((val / char.stats.hp) * 100) : 0;
      pctText.textContent = `(${pct}%)`;
    });
  };

  // Helper: Keywords render
  const renderKeywords = () => {
    const containerEl = container.querySelector("#keywords-badges-container");
    if (!containerEl) return;
    
    containerEl.innerHTML = char.keywords.map((kw, idx) => `
      <span class="tag-badge">
        ${kw}
        <span class="remove-tag" data-index="${idx}">×</span>
      </span>
    `).join('');

    containerEl.querySelectorAll(".remove-tag").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"));
        char.keywords.splice(idx, 1);
        renderKeywords();
        saveState();
      });
    });
  };

  // Right Panel UI Render
  const renderRightPanel = () => {
    const rightPanel = container.querySelector("#builder-right-panel");
    if (!rightPanel) return;

    rightPanel.innerHTML = `
      <div style="padding: 0 20px;">
        <div class="tabs-header" style="margin-bottom: 20px;">
          <button class="tab-link ${activeTab === 'builder-tab-s1' ? 'active' : ''}" data-target="builder-tab-s1">スキル1</button>
          <button class="tab-link ${activeTab === 'builder-tab-s2' ? 'active' : ''}" data-target="builder-tab-s2">スキル2</button>
          <button class="tab-link ${activeTab === 'builder-tab-s3' ? 'active' : ''}" data-target="builder-tab-s3">スキル3</button>
          <button class="tab-link ${activeTab === 'builder-tab-def' ? 'active' : ''}" data-target="builder-tab-def">守備</button>
          <button class="tab-link ${activeTab === 'builder-tab-passives' ? 'active' : ''}" data-target="builder-tab-passives">パッシブ・精神力</button>
        </div>
      </div>

      <div class="tab-content ${activeTab === 'builder-tab-s1' ? 'active' : ''}" id="builder-tab-s1" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">スキル1 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="skill1">+ スキル追加</button>
        </div>
        <div class="skills-editor-list" data-tab="skill1"></div>
      </div>

      <div class="tab-content ${activeTab === 'builder-tab-s2' ? 'active' : ''}" id="builder-tab-s2" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">スキル2 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="skill2">+ スキル追加</button>
        </div>
        <div class="skills-editor-list" data-tab="skill2"></div>
      </div>

      <div class="tab-content ${activeTab === 'builder-tab-s3' ? 'active' : ''}" id="builder-tab-s3" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">スキル3 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="skill3">+ スキル追加</button>
        </div>
        <div class="skills-editor-list" data-tab="skill3"></div>
      </div>

      <div class="tab-content ${activeTab === 'builder-tab-def' ? 'active' : ''}" id="builder-tab-def" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">守備スキル 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="defense">+ 守備追加</button>
        </div>
        <div class="skills-editor-list" data-tab="defense"></div>
      </div>

      <div class="tab-content ${activeTab === 'builder-tab-passives' ? 'active' : ''}" id="builder-tab-passives" style="padding: 0 20px;">
        <!-- Passives & Panic & Sanity -->
        <div id="passives-editor-container"></div>
      </div>
    `;

    // Hook tab buttons
    const tabLinks = rightPanel.querySelectorAll(".tab-link");
    const tabContents = rightPanel.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
      link.addEventListener("click", () => {
        const target = link.getAttribute("data-target");
        activeTab = target;
        
        tabLinks.forEach(l => l.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));
        
        link.classList.add("active");
        rightPanel.querySelector(`#${target}`).classList.add("active");
      });
    });

    // Bind add-skill buttons
    rightPanel.querySelectorAll(".btn-add-skill").forEach(btn => {
      btn.addEventListener("click", () => {
        const tabKey = btn.getAttribute("data-tab");
        const defaultSkill = {
          id: 'skill-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
          name: "",
          levelBonus: 0,
          affinity: "sloth",
          atkType: "slash", // slash, pierce, strike
          defenseType: "defense", // defense, evade, counter, match_guard, match_counter
          coins: 1,
          unbreakableCoins: 0,
          basePower: 10,
          atkLevel: 40,
          weight: 1,
          effectText: "",
          flavorText: "",
          coinEffects: [{ text: "" }],
          tagMatchImpossible: false,
          tagTargetIndistinguishable: false,
          tagTargetImmutable: false,
          specialTagsText: ""
        };
        char.skills[tabKey] = char.skills[tabKey] || [];
        char.skills[tabKey].push(defaultSkill);
        renderSkillsEditorList(tabKey);
        saveState();
      });
    });

    // Render contents
    renderSkillsEditorList("skill1");
    renderSkillsEditorList("skill2");
    renderSkillsEditorList("skill3");
    renderSkillsEditorList("defense");
    renderPassivesAndMore();
  };

  // Renders the list of skill editor cards for a tab
  const renderSkillsEditorList = (tabKey) => {
    const listContainer = container.querySelector(`.skills-editor-list[data-tab="${tabKey}"]`);
    if (!listContainer) return;
    
    const skills = char.skills[tabKey] || [];
    
    if (skills.length === 0) {
      listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); border: 1px dashed var(--border-color); padding: 24px; border-radius: 4px;">スキルが登録されていません。上のボタンから追加してください。</div>`;
      return;
    }

    listContainer.innerHTML = "";
    
    skills.forEach((skill, sIdx) => {
      const card = document.createElement("div");
      card.className = "skill-editor-card";
      card.dataset.index = sIdx;

      // Affinity options
      const sinOptionsHTML = SIN_OPTIONS.map(opt => 
        `<option value="${opt.value}" ${skill.affinity === opt.value ? 'selected' : ''}>${opt.label}</option>`
      ).join('');

      // Weight options
      let weightOptionsHTML = "";
      for (let w = 1; w <= 10; w++) {
        weightOptionsHTML += `<option value="${w}" ${parseInt(skill.weight) === w ? 'selected' : ''}>${w}</option>`;
      }

      // Check if this is the defense tab
      const isDefTab = tabKey === "defense";

      // HTML template for card
      card.innerHTML = `
        <div class="skill-editor-card-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="skill-drag-handle" style="display: none;">☰</span>
            <span style="font-weight: 700; color: var(--gold-primary);">#${sIdx + 1}</span>
            <h4 style="font-size: 1rem;">${skill.name || "（名称未設定）"}</h4>
          </div>
          
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-sm btn-reorder-up" ${sIdx === 0 ? 'disabled' : ''} title="上に移動">▲</button>
            <button class="btn btn-sm btn-reorder-down" ${sIdx === skills.length - 1 ? 'disabled' : ''} title="下に移動">▼</button>
            <button class="btn btn-danger btn-sm btn-delete-skill">削除</button>
          </div>
        </div>

        <div class="form-row-grid">
          <div class="form-group">
            <label>スキル名</label>
            <input type="text" class="form-control skill-name-input" value="${skill.name || ''}">
          </div>
          <div class="form-group">
            <label>罪悪属性</label>
            <select class="form-control skill-sin-select">
              ${sinOptionsHTML}
            </select>
          </div>
          ${isDefTab ? `
            <div class="form-group">
              <label>守備タイプ</label>
              <select class="form-control skill-deftype-select">
                <option value="defense" ${skill.defenseType === 'defense' ? 'selected' : ''}>防御</option>
                <option value="evade" ${skill.defenseType === 'evade' ? 'selected' : ''}>回避</option>
                <option value="counter" ${skill.defenseType === 'counter' ? 'selected' : ''}>反撃</option>
                <option value="match_guard" ${skill.defenseType === 'match_guard' ? 'selected' : ''}>マッチ可能ガード</option>
                <option value="match_counter" ${skill.defenseType === 'match_counter' ? 'selected' : ''}>マッチ可能反撃</option>
              </select>
            </div>
          ` : `
            <div class="form-group">
              <label>攻撃属性</label>
              <select class="form-control skill-atktype-select">
                <option value="slash" ${skill.atkType === 'slash' ? 'selected' : ''}>斬撃</option>
                <option value="pierce" ${skill.atkType === 'pierce' ? 'selected' : ''}>貫通</option>
                <option value="strike" ${skill.atkType === 'strike' ? 'selected' : ''}>打撃</option>
              </select>
            </div>
          `}
        </div>

        <!-- Conditional visibility: Attack attribute for Counters in defense tab -->
        ${isDefTab ? `
          <div class="form-group counter-atktype-container" style="display: ${skill.defenseType === 'counter' || skill.defenseType === 'match_counter' ? 'block' : 'none'};">
            <label>反撃攻撃属性</label>
            <select class="form-control skill-atktype-select">
              <option value="slash" ${skill.atkType === 'slash' ? 'selected' : ''}>斬撃</option>
              <option value="pierce" ${skill.atkType === 'pierce' ? 'selected' : ''}>貫通</option>
              <option value="strike" ${skill.atkType === 'strike' ? 'selected' : ''}>打撃</option>
            </select>
          </div>
        ` : ''}

        <div class="form-row-grid">
          <div class="form-group">
            <label>ベース威力</label>
            <input type="number" class="form-control skill-basepower-input" value="${skill.basePower || 0}">
          </div>
          <div class="form-group">
            <label>コイン威力（±）</label>
            <input type="number" class="form-control skill-coinpower-input" value="${skill.coinPower || 0}">
          </div>
          <div class="form-group">
            <label>レベルボーナス</label>
            <input type="number" class="form-control skill-lvlbonus-input" value="${skill.levelBonus || 0}">
          </div>
          <div class="form-group">
            <label>${isDefTab && skill.defenseType !== 'counter' && skill.defenseType !== 'match_counter' ? '防御レベル' : '攻撃レベル'}</label>
            <input type="number" class="form-control skill-level-input" value="${skill.atkLevel || 40}">
          </div>
          <div class="form-group">
            <label>攻撃加重値</label>
            <select class="form-control skill-weight-select">
              ${weightOptionsHTML}
            </select>
          </div>
        </div>

        <div class="form-row-grid">
          <div class="form-group">
            <label>コイン数</label>
            <input type="number" min="1" max="10" class="form-control skill-coin-count-input" value="${skill.coins || 1}">
          </div>
          <div class="form-group">
            <label>破壊不能コイン数（末尾）</label>
            <input type="number" min="0" max="${skill.coins || 1}" class="form-control skill-unbreakable-count-input" value="${skill.unbreakableCoins || 0}">
          </div>
        </div>

        <div class="form-group">
          <label>特殊タグ</label>
          <div style="display: flex; gap: 16px; margin-bottom: 8px; flex-wrap: wrap;">
            <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
              <input type="checkbox" class="skill-tag-match" ${skill.tagMatchImpossible ? 'checked' : ''}> マッチ不可
            </label>
            <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
              <input type="checkbox" class="skill-tag-distinguish" ${skill.tagTargetIndistinguishable ? 'checked' : ''}> 敵味方識別不可
            </label>
            <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
              <input type="checkbox" class="skill-tag-target" ${skill.tagTargetImmutable ? 'checked' : ''}> 対象変更不可
            </label>
          </div>
          <input type="text" class="form-control skill-specialtags-text" placeholder="その他のタグを入力（カンマ区切り、例: ダメージ量増加, 充電）" value="${skill.specialTagsText || ''}">
        </div>

        <div class="form-group">
          <label>スキル効果テキスト (@入力で用語サジェスト)</label>
          <div class="textarea-wrapper">
            <div class="shortcut-tags">
              <button class="btn btn-sm shortcut-btn" data-tag="[使用前]">使用前</button>
              <button class="btn btn-sm shortcut-btn" data-tag="[使用時]">使用時</button>
              <button class="btn btn-sm shortcut-btn" data-tag="[攻撃後]">攻撃後</button>
              <button class="btn btn-sm shortcut-btn" data-tag="[的中時]">的中時</button>
              <button class="btn btn-sm shortcut-btn" data-tag="[撃破後]">撃破後</button>
              <button class="btn btn-sm shortcut-btn" data-tag="[回避後]">回避後</button>
              <button class="btn btn-sm shortcut-btn" data-tag="[戦闘開始時]">戦闘開始時</button>
              <button class="btn btn-sm shortcut-btn btn-custom-shortcut">+ カスタム</button>
            </div>
            <textarea class="form-control skill-effect-textarea" rows="3" placeholder="スキル効果テキストを入力してください...">${skill.effectText || ''}</textarea>
          </div>
        </div>

        <div class="form-group">
          <label>フレーバーテキスト</label>
          <textarea class="form-control skill-flavor-textarea" rows="2" placeholder="世界観・設定のフレーバーテキストを入力（任意）">${skill.flavorText || ''}</textarea>
        </div>

        <!-- Coin Effects Textareas Container -->
        <div class="skill-coins-list">
          <label style="font-weight: 700; color: var(--gold-secondary); font-size: 0.85rem; display: block; margin-bottom: 8px;">各コインの効果</label>
          <div class="coin-effects-inputs">
            <!-- Dynamic coin textarea editors -->
          </div>
        </div>
      `;

      // Render coin effects textareas inside the card
      renderCoinEffectsEditors(card, skill);

      // --- Bind inputs ---
      const nameInput = card.querySelector(".skill-name-input");
      nameInput.addEventListener("input", (e) => {
        skill.name = e.target.value;
        card.querySelector("h4").textContent = e.target.value || "（名称未設定）";
        saveState();
      });

      card.querySelector(".skill-sin-select").addEventListener("change", (e) => {
        skill.affinity = e.target.value;
        saveState();
      });

      if (isDefTab) {
        card.querySelector(".skill-deftype-select").addEventListener("change", (e) => {
          skill.defenseType = e.target.value;
          
          // Toggle counter atkType visibility
          const containerAtk = card.querySelector(".counter-atktype-container");
          if (skill.defenseType === 'counter' || skill.defenseType === 'match_counter') {
            containerAtk.style.display = 'block';
          } else {
            containerAtk.style.display = 'none';
          }
          
          // Toggle defense/attack level label in view if needed
          const lvlLabel = card.querySelector(".form-row-grid").children[3].querySelector("label");
          if (skill.defenseType === 'counter' || skill.defenseType === 'match_counter') {
            lvlLabel.textContent = "攻撃レベル";
          } else {
            lvlLabel.textContent = "防御レベル";
          }

          saveState();
        });
      }

      card.querySelectorAll(".skill-atktype-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
          skill.atkType = e.target.value;
          saveState();
        });
      });

      card.querySelector(".skill-basepower-input").addEventListener("input", (e) => {
        skill.basePower = parseInt(e.target.value) || 0;
        saveState();
      });

      card.querySelector(".skill-coinpower-input").addEventListener("input", (e) => {
        skill.coinPower = parseInt(e.target.value) || 0;
        saveState();
      });

      card.querySelector(".skill-lvlbonus-input").addEventListener("input", (e) => {
        skill.levelBonus = parseInt(e.target.value) || 0;
        saveState();
      });

      card.querySelector(".skill-level-input").addEventListener("input", (e) => {
        skill.atkLevel = parseInt(e.target.value) || 0;
        saveState();
      });

      card.querySelector(".skill-weight-select").addEventListener("change", (e) => {
        skill.weight = parseInt(e.target.value) || 1;
        saveState();
      });

      // Handle coin count changes (requires redrawing the coin editors)
      const coinCountInput = card.querySelector(".skill-coin-count-input");
      const unbreakableInput = card.querySelector(".skill-unbreakable-count-input");

      const updateCoins = () => {
        const count = Math.max(1, Math.min(10, parseInt(coinCountInput.value) || 1));
        const unbreakable = Math.max(0, Math.min(count, parseInt(unbreakableInput.value) || 0));
        
        skill.coins = count;
        skill.unbreakableCoins = unbreakable;
        
        // Re-align array size
        skill.coinEffects = skill.coinEffects || [];
        while (skill.coinEffects.length < count) {
          skill.coinEffects.push({ text: "" });
        }
        if (skill.coinEffects.length > count) {
          skill.coinEffects = skill.coinEffects.slice(0, count);
        }

        // Limit range of input fields in DOM
        coinCountInput.value = count;
        unbreakableInput.max = count;
        unbreakableInput.value = unbreakable;

        renderCoinEffectsEditors(card, skill);
        saveState();
      };

      coinCountInput.addEventListener("change", updateCoins);
      unbreakableInput.addEventListener("change", updateCoins);

      // Checkboxes
      card.querySelector(".skill-tag-match").addEventListener("change", (e) => {
        skill.tagMatchImpossible = e.target.checked;
        saveState();
      });
      card.querySelector(".skill-tag-distinguish").addEventListener("change", (e) => {
        skill.tagTargetIndistinguishable = e.target.checked;
        saveState();
      });
      card.querySelector(".skill-tag-target").addEventListener("change", (e) => {
        skill.tagTargetImmutable = e.target.checked;
        saveState();
      });
      
      card.querySelector(".skill-specialtags-text").addEventListener("input", (e) => {
        skill.specialTagsText = e.target.value;
        saveState();
      });

      // Textareas
      const effectTextarea = card.querySelector(".skill-effect-textarea");
      effectTextarea.addEventListener("input", (e) => {
        skill.effectText = e.target.value;
        saveState();
      });
      setupAutocomplete(effectTextarea, card.querySelector(".textarea-wrapper"), inlineDict);

      card.querySelector(".skill-flavor-textarea").addEventListener("input", (e) => {
        skill.flavorText = e.target.value;
        saveState();
      });

      // Shortcut tags click helper
      card.querySelectorAll(".shortcut-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          let tagText = btn.getAttribute("data-tag");
          
          if (btn.classList.contains("btn-custom-shortcut")) {
            const custom = prompt("カスタム条件タグを入力してください:\n(例: [的中時], [使用前])");
            if (custom) {
              tagText = custom.startsWith('[') && custom.endsWith(']') ? custom : `[${custom}]`;
            } else {
              return;
            }
          }

          const start = effectTextarea.selectionStart;
          const end = effectTextarea.selectionEnd;
          const text = effectTextarea.value;
          effectTextarea.value = text.substring(0, start) + tagText + text.substring(end);
          effectTextarea.selectionStart = effectTextarea.selectionEnd = start + tagText.length;
          
          // Trigger events
          skill.effectText = effectTextarea.value;
          effectTextarea.focus();
          effectTextarea.dispatchEvent(new Event("input"));
        });
      });

      // Header button events
      card.querySelector(".btn-reorder-up").addEventListener("click", () => {
        if (sIdx > 0) {
          char.skills[tabKey][sIdx] = char.skills[tabKey][sIdx - 1];
          char.skills[tabKey][sIdx - 1] = skill;
          renderSkillsEditorList(tabKey);
          saveState();
        }
      });

      card.querySelector(".btn-reorder-down").addEventListener("click", () => {
        if (sIdx < skills.length - 1) {
          char.skills[tabKey][sIdx] = char.skills[tabKey][sIdx + 1];
          char.skills[tabKey][sIdx + 1] = skill;
          renderSkillsEditorList(tabKey);
          saveState();
        }
      });

      card.querySelector(".btn-delete-skill").addEventListener("click", () => {
        if (confirm(`このスキルを削除しますか？`)) {
          char.skills[tabKey].splice(sIdx, 1);
          renderSkillsEditorList(tabKey);
          saveState();
        }
      });

      listContainer.appendChild(card);
    });
  };

  // Helper: Renders coin effects textareas inside a skill editor card
  const renderCoinEffectsEditors = (cardElement, skill) => {
    const coinContainer = cardElement.querySelector(".coin-effects-inputs");
    if (!coinContainer) return;
    
    const count = parseInt(skill.coins) || 1;
    const unbreakable = parseInt(skill.unbreakableCoins) || 0;
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

    coinContainer.innerHTML = "";
    
    for (let i = 0; i < count; i++) {
      const isUnbreakable = i >= (count - unbreakable);
      const val = skill.coinEffects && skill.coinEffects[i] ? skill.coinEffects[i].text : "";
      
      const row = document.createElement("div");
      row.className = "coin-effect-editor";
      row.innerHTML = `
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
          <span class="coin-num-badge" style="${isUnbreakable ? 'border-color: #ff5252; color: #ff5252;' : ''}">
            ${romanNumerals[i] || (i + 1)}
          </span>
          <span style="font-size: 0.8rem; font-weight: 700;">
            コイン ${i + 1} 効果 ${isUnbreakable ? '<strong style="color:#ff5252; margin-left:8px;">🔴破壊不能</strong>' : ''}
          </span>
        </div>
        <div class="textarea-wrapper">
          <div class="shortcut-tags">
            <button class="btn btn-sm coin-shortcut-btn" data-tag="[的中時]">的中時</button>
            <button class="btn btn-sm coin-shortcut-btn" data-tag="[表面的中時]">表面的中時</button>
            <button class="btn btn-sm coin-shortcut-btn" data-tag="[クリティカル的中時]">クリティカル</button>
            <button class="btn btn-sm coin-shortcut-btn" data-tag="[再使用表面的中時]">再使用的中</button>
            <button class="btn btn-sm coin-shortcut-btn btn-custom-coin-shortcut">+ カスタム</button>
          </div>
          <textarea class="form-control coin-desc-textarea" rows="2" placeholder="的中時の効果などを入力...">${val}</textarea>
        </div>
      `;

      const tx = row.querySelector(".coin-desc-textarea");
      tx.addEventListener("input", (e) => {
        skill.coinEffects = skill.coinEffects || [];
        skill.coinEffects[i] = skill.coinEffects[i] || { text: "" };
        skill.coinEffects[i].text = e.target.value;
        saveState();
      });

      // Autocomplete suggest setup
      setupAutocomplete(tx, row.querySelector(".textarea-wrapper"), inlineDict);

      // Shortcut tags click helper
      row.querySelectorAll(".coin-shortcut-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          let tagText = btn.getAttribute("data-tag");
          
          if (btn.classList.contains("btn-custom-coin-shortcut")) {
            const custom = prompt("カスタム条件タグを入力してください:");
            if (custom) {
              tagText = custom.startsWith('[') && custom.endsWith(']') ? custom : `[${custom}]`;
            } else {
              return;
            }
          }

          const start = tx.selectionStart;
          const end = tx.selectionEnd;
          const text = tx.value;
          tx.value = text.substring(0, start) + tagText + text.substring(end);
          tx.selectionStart = tx.selectionEnd = start + tagText.length;
          
          // Trigger events
          skill.coinEffects[i].text = tx.value;
          tx.focus();
          tx.dispatchEvent(new Event("input"));
        });
      });

      coinContainer.appendChild(row);
    }
  };

  // Render passives, panic and sanity editors
  const renderPassivesAndMore = () => {
    const containerEl = container.querySelector("#passives-editor-container");
    if (!containerEl) return;

    containerEl.innerHTML = `
      <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <h3 style="color: var(--gold-primary); font-size: 1.1rem;">バトルパッシブ</h3>
        <button class="btn btn-primary btn-sm" id="btn-add-passive">+ パッシブ追加</button>
      </div>
      <div id="passives-list-editor"></div>

      <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-top: 32px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <h3 style="color: var(--gold-primary); font-size: 1.1rem;">サポートパッシブ</h3>
        <button class="btn btn-primary btn-sm" id="btn-add-support">+ サポート追加</button>
      </div>
      <div id="supports-list-editor"></div>

      <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-top: 32px; margin-bottom: 16px;">
        <h3 style="color: var(--gold-primary); font-size: 1.1rem;">パニック設定</h3>
      </div>
      <div class="form-group">
        <label>パニックタイプ名</label>
        <input type="text" id="panic-name-input" class="form-control" value="${char.panic?.name || 'パニック'}">
      </div>
      <div class="form-group">
        <label>パニック効果 (@入力でサジェスト)</label>
        <div class="textarea-wrapper" id="panic-text-wrapper">
          <textarea id="panic-text-input" class="form-control" rows="2" placeholder="パニック効果を入力...">${char.panic?.text || '1ターンの間行動しない'}</textarea>
        </div>
      </div>

      <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-top: 32px; margin-bottom: 16px;">
        <h3 style="color: var(--gold-primary); font-size: 1.1rem;">精神力増減条件 (@入力でサジェスト)</h3>
      </div>
      <div class="form-row-grid">
        <div class="form-group">
          <label>基本精神力増加条件</label>
          <div class="textarea-wrapper" id="sanity-inc-wrapper">
            <textarea id="sanity-inc-input" class="form-control" rows="4" placeholder="精神力増加条件を入力...">${char.sanity?.increase || ''}</textarea>
          </div>
        </div>
        <div class="form-group">
          <label>基本精神力減少条件</label>
          <div class="textarea-wrapper" id="sanity-dec-wrapper">
            <textarea id="sanity-dec-input" class="form-control" rows="4" placeholder="精神力減少条件を入力...">${char.sanity?.decrease || ''}</textarea>
          </div>
        </div>
      </div>
    `;

    // Render lists
    renderPassivesSublist("passives", "passives-list-editor");
    renderPassivesSublist("supportPassives", "supports-list-editor");

    // Add buttons
    containerEl.querySelector("#btn-add-passive").addEventListener("click", () => {
      char.passives = char.passives || [];
      char.passives.push({
        name: "", type: "own", count: 1, affinity: "sloth", text: "", flavorText: ""
      });
      renderPassivesSublist("passives", "passives-list-editor");
      saveState();
    });

    containerEl.querySelector("#btn-add-support").addEventListener("click", () => {
      char.supportPassives = char.supportPassives || [];
      char.supportPassives.push({
        name: "", type: "resonance", count: 1, affinity: "sloth", text: "", flavorText: ""
      });
      renderPassivesSublist("supportPassives", "supports-list-editor");
      saveState();
    });

    // Panic bindings
    const panicName = containerEl.querySelector("#panic-name-input");
    const panicText = containerEl.querySelector("#panic-text-input");
    
    panicName.addEventListener("input", (e) => {
      char.panic = char.panic || {};
      char.panic.name = e.target.value;
      saveState();
    });
    panicText.addEventListener("input", (e) => {
      char.panic = char.panic || {};
      char.panic.text = e.target.value;
      saveState();
    });
    setupAutocomplete(panicText, containerEl.querySelector("#panic-text-wrapper"), inlineDict);

    // Sanity bindings
    const sanityInc = containerEl.querySelector("#sanity-inc-input");
    const sanityDec = containerEl.querySelector("#sanity-dec-input");

    sanityInc.addEventListener("input", (e) => {
      char.sanity = char.sanity || {};
      char.sanity.increase = e.target.value;
      saveState();
    });
    setupAutocomplete(sanityInc, containerEl.querySelector("#sanity-inc-wrapper"), inlineDict);

    sanityDec.addEventListener("input", (e) => {
      char.sanity = char.sanity || {};
      char.sanity.decrease = e.target.value;
      saveState();
    });
    setupAutocomplete(sanityDec, containerEl.querySelector("#sanity-dec-wrapper"), inlineDict);
  };

  // Helper: renders passive items (both battle and support)
  const renderPassivesSublist = (key, targetId) => {
    const listDiv = container.querySelector(`#${targetId}`);
    if (!listDiv) return;

    const list = char[key] || [];

    if (list.length === 0) {
      listDiv.innerHTML = `<div style="text-align: center; color: var(--text-muted); border: 1px dashed var(--border-color); padding: 16px; border-radius: 4px; font-size: 0.85rem;">パッシブが追加されていません</div>`;
      return;
    }

    listDiv.innerHTML = "";
    
    list.forEach((item, idx) => {
      const row = document.createElement("div");
      row.className = "skill-editor-card";
      row.style.padding = "12px";
      row.style.marginBottom = "12px";
      
      const sinOptionsHTML = SIN_OPTIONS.map(opt => 
        `<option value="${opt.value}" ${item.affinity === opt.value ? 'selected' : ''}>${opt.label}</option>`
      ).join('');

      row.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong style="color: var(--gold-secondary); font-size: 0.9rem;">パッシブ #${idx + 1}</strong>
          <button class="btn btn-danger btn-sm btn-delete-passive">削除</button>
        </div>
        <div class="form-row-grid">
          <div class="form-group">
            <label>パッシブ名</label>
            <input type="text" class="form-control passive-name-input" value="${item.name || ''}">
          </div>
          <div class="form-group" style="min-width: 140px;">
            <label>発動条件</label>
            <div style="display: flex; gap: 4px;">
              <select class="form-control passive-type-select" style="flex: 1;">
                <option value="resonance" ${item.type === 'resonance' ? 'selected' : ''}>共鳴</option>
                <option value="own" ${item.type === 'own' ? 'selected' : ''}>保有</option>
                <option value="none" ${item.type === 'none' ? 'selected' : ''}>なし</option>
              </select>
              <input type="number" min="1" class="form-control passive-count-input" style="width: 50px; display: ${item.type === 'none' ? 'none' : 'block'};" value="${item.count || 1}">
            </div>
          </div>
          <div class="form-group passive-affinity-container" style="display: ${item.type === 'none' ? 'none' : 'block'};">
            <label>罪悪属性</label>
            <select class="form-control passive-affinity-select">
              ${sinOptionsHTML}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>効果テキスト (@入力でサジェスト)</label>
          <div class="textarea-wrapper">
            <textarea class="form-control passive-desc-textarea" rows="2" placeholder="パッシブ効果テキスト...">${item.text || ''}</textarea>
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label>フレーバーテキスト</label>
          <textarea class="form-control passive-flavor-textarea" rows="1" placeholder="フレーバーテキストを入力（任意）">${item.flavorText || ''}</textarea>
        </div>
      `;

      // Event bindings
      row.querySelector(".passive-name-input").addEventListener("input", (e) => {
        item.name = e.target.value;
        saveState();
      });

      const typeSelect = row.querySelector(".passive-type-select");
      const countInput = row.querySelector(".passive-count-input");
      const affContainer = row.querySelector(".passive-affinity-container");
      
      typeSelect.addEventListener("change", (e) => {
        item.type = e.target.value;
        if (item.type === 'none') {
          countInput.style.display = 'none';
          affContainer.style.display = 'none';
        } else {
          countInput.style.display = 'block';
          affContainer.style.display = 'block';
        }
        saveState();
      });

      countInput.addEventListener("input", (e) => {
        item.count = parseInt(e.target.value) || 1;
        saveState();
      });

      row.querySelector(".passive-affinity-select").addEventListener("change", (e) => {
        item.affinity = e.target.value;
        saveState();
      });

      const descTextarea = row.querySelector(".passive-desc-textarea");
      descTextarea.addEventListener("input", (e) => {
        item.text = e.target.value;
        saveState();
      });
      setupAutocomplete(descTextarea, row.querySelector(".textarea-wrapper"), inlineDict);

      row.querySelector(".passive-flavor-textarea").addEventListener("input", (e) => {
        item.flavorText = e.target.value;
        saveState();
      });

      row.querySelector(".btn-delete-passive").addEventListener("click", () => {
        if (confirm(`このパッシブを削除しますか？`)) {
          char[key].splice(idx, 1);
          renderPassivesSublist(key, targetId);
          saveState();
        }
      });

      listDiv.appendChild(row);
    });
  };

  // Back button and save button
  container.querySelector("#btn-back").addEventListener("click", onBackToList);
  
  // JSON Export button
  container.querySelector("#btn-save-character").addEventListener("click", () => {
    // Generate JSON file download
    const filename = `${char.name || "limbus_identity"}.json`;
    
    // Self-contain dictionary terms inside the character file
    // Find all term names referenced in the character's skill descriptions and passives
    const referencedTerms = new Set();
    const findReferences = (text) => {
      if (!text) return;
      const matches = text.match(/\[\[([^\]]+)\]\]/g);
      if (matches) {
        matches.forEach(m => {
          const name = m.slice(2, -2);
          referencedTerms.add(name);
        });
      }
    };

    // Scan all text fields
    findReferences(char.panic?.text);
    findReferences(char.sanity?.increase);
    findReferences(char.sanity?.decrease);
    
    Object.values(char.skills).flat().forEach(s => {
      findReferences(s.effectText);
      if (s.coinEffects) {
        s.coinEffects.forEach(c => findReferences(c.text));
      }
    });

    if (char.passives) char.passives.forEach(p => findReferences(p.text));
    if (char.supportPassives) char.supportPassives.forEach(p => findReferences(p.text));

    // Get current global dictionary and filter terms
    const globalDict = JSON.parse(localStorage.getItem("limbus_dictionary")) || [];
    const embeddedTerms = globalDict.filter(t => referencedTerms.has(t.name));
    
    // Embed in character data
    char.dictionary = embeddedTerms;
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(char, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });

  // State saving
  function saveState() {
    char.updatedAt = new Date().toISOString();
    onSave(char);
  }

  // Initial renders
  renderLeftPanel();
  renderRightPanel();
}
