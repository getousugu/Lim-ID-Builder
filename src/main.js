/* src/main.js */
import { initDictionary, getDictionary, saveDictionary, renderDictionaryManager } from './dictionary.js';
import { renderList } from './list.js';
import { renderBuilder } from './builder.js';
import { renderPreview } from './preview.js';

// Global state
let identities = [];
let activeIdentityId = null;

// Sample Character Database for Prepopulation
const SAMPLE_CHARACTER = {
  id: "sample-middle-sister",
  name: "蜘蛛の巣 中指の親方",
  prisoner: "良秀",
  team: "中指",
  image: null,
  season: "シーズン7",
  releaseDate: "2026-05-28",
  stats: {
    hp: 285,
    speedMin: 4,
    speedMax: 7,
    defCorrection: 5
  },
  resistances: {
    slash: "normal",
    slashVal: 1.0,
    pierce: "fatal",
    pierceVal: 2.0,
    strike: "resist",
    strikeVal: 0.5
  },
  staggers: [213, 142, 71],
  keywords: ["指", "長姉", "蜘蛛の巣", "中指"],
  skills: {
    skill1: [
      {
        id: "s1-1",
        name: "怨念スタンピング",
        levelBonus: 3,
        affinity: "envy",
        atkType: "slash",
        coins: 4,
        unbreakableCoins: 1,
        basePower: 4,
        coinPower: 3,
        atkLevel: 64,
        weight: 1,
        effectText: "対象の[[火傷]]と[[出血]]の合計4につき、最終威力 +1 (最大3)\n[[嫉妬完全共鳴]]の数が6以上なら、コイン威力 +1\n[使用前] 自分の剣が📐[[レーヴァテイン]]状態なら、「即決処刑」として発動\n[使用時] (最も高い共鳴数)だけ、このスキルの攻撃レベルが増加 (最大6)\n[使用時] 自分の[[中指 - 怨恨の刺青 [長姉]]]1につき、最終威力 +1 (最大3)\n[使用時] 自分の[[中指 - 怨恨の刺青 [長姉]]]の数だけ、3コイン目から[[破壊不能コイン]]に変更される\n[使用時] 自分の剣が📐1段階 封印解除または📐2段階 封印解除状態なら、このスキルのコイン的中時にスキルで付与する[[出血]]の基本値と同量の[[火傷]]を付与\n[攻撃後] 自分の[[中指 - 怨恨]]を全て消耗\n[攻撃後] このスキルを反撃スキルで発動したなら、次のターンに[[打撃ダメージ量増加]]1を得る (1ターンにつき1回)",
        flavorText: "中指の仕返しは必ず成される。",
        coinEffects: [
          { text: "[的中時] [[出血]]3を付与" },
          { text: "[的中時] [[出血]]回数が1増加" },
          { text: "[的中時] [[出血]]2を付与" },
          { text: "[的中時] [[出血]]回数が1増加" }
        ],
        tagMatchImpossible: false,
        tagTargetIndistinguishable: false,
        tagTargetImmutable: false
      }
    ],
    skill2: [],
    skill3: [],
    defense: []
  },
  passives: [
    {
      name: "血と火の匂い",
      type: "none",
      count: 0,
      affinity: "sloth",
      text: "この人格は[[火傷]]・[[出血]]を付与する人格として扱われる。\n自分の剣が📐[[1段階 封印解除]]、📐[[2段階 封印解除]]状態なら、[[出血]]を付与するスキルがこの効果によって[[火傷]]と[[出血]]を付与するスキルとして扱われる。"
    }
  ],
  supportPassives: [
    {
      name: "誰が家族に手を出したかった",
      type: "resonance",
      count: 4,
      affinity: "sloth",
      text: "戦闘開始時、反撃を装備した味方1名に[[ダメージ量増加]]1、[[保護]]1を付与（戦闘ごとに最大2回発動可能、マッチ可能反撃を除く）\n効果を受ける味方が中指所属なら、代わりに[[ダメージ量増加]]2、[[保護]]2を付与"
    }
  ],
  panic: {
    name: "パニック",
    text: "1ターンの間行動しない",
    image: null
  },
  sanity: {
    increase: "・マッチ勝利時、マッチ回数に比例して増加（増加量：基本値10、2マッチ目から1マッチにつき20%ずつ増加）\n・敵討伐時、倒した敵のレベルが自分のレベル以上の場合、10増加\n・味方が倒した敵のレベルが自分のレベル以上の場合、5増加",
    decrease: "・味方死亡時、死亡した味方のレベルが自分のレベル以上の場合、レベル差によって減少（減少量：基本値10、レベル差につき10ずつ増加）"
  },
  dictionary: [
    {
      id: "term-lev",
      name: "レーヴァテイン",
      type: "special",
      color: "#ffaa00",
      description: "良秀の固有装備状態。\n攻撃時に追加効果を誘発する特殊な剣。",
      icon: "preset-haste"
    },
    {
      id: "term-tattoo",
      name: "中指 - 怨恨の刺青 [長姉]",
      type: "buff",
      color: "#ba68c8",
      description: "中指の「長姉」の印。属性共鳴によって獲得する。\n最終威力を増加させる効果を持つ。",
      icon: "preset-protection"
    },
    {
      id: "term-grudge",
      name: "中指 - 怨恨",
      type: "resource",
      color: "#ab47bc",
      description: "攻撃を受けた際に増加する固有リソース。特定の仕返しスキルに全て消耗して威力を増加させる。",
      icon: "preset-protection"
    },
    {
      id: "term-unbreakable",
      name: "破壊不能コイン",
      type: "special",
      color: "#e53935",
      description: "マッチに敗北しても破壊されず、最後まで投げ続けられるコイン。",
      icon: "preset-protection"
    },
    {
      id: "term-res-envy",
      name: "嫉妬完全共鳴",
      type: "special",
      color: "#8e24aa",
      description: "嫉妬属性のスキルがチェーン上で連続して3つ以上繋がった状態。",
      icon: "default"
    },
    {
      id: "term-seal1",
      name: "1段階 封印解除",
      type: "buff",
      color: "#ffa726",
      description: "剣 of 封印の一部解除された状態。効果：与ダメージ量増加。",
      icon: "preset-dmg-up"
    },
    {
      id: "term-seal2",
      name: "2段階 封印解除",
      type: "buff",
      color: "#f57c00",
      description: "剣 of 封印の大部分解除された状態。効果：クリティカル確率増加および与ダメージ量増加。",
      icon: "preset-dmg-up"
    }
  ],
  updatedAt: new Date().toISOString()
};

// Initialize app data
function initApp() {
  initDictionary();
  
  // Load identities from localStorage with error safety
  const stored = localStorage.getItem("limbus_identities");
  try {
    if (stored) {
      identities = JSON.parse(stored).filter(Boolean);
      if (identities.length === 0) {
        identities = [SAMPLE_CHARACTER];
        localStorage.setItem("limbus_identities", JSON.stringify(identities));
      }
    } else {
      identities = [SAMPLE_CHARACTER];
      localStorage.setItem("limbus_identities", JSON.stringify(identities));
    }
  } catch (e) {
    console.error("Failed to parse identities from localStorage, resetting to default sample", e);
    identities = [SAMPLE_CHARACTER];
    localStorage.setItem("limbus_identities", JSON.stringify(identities));
  }
  
  // Setup global modals and markup
  setupGlobalModals();
  
  // Start router
  window.addEventListener("hashchange", handleRouting);
  handleRouting();
}

// Router
function handleRouting() {
  const hash = window.location.hash || "#/";
  const contentEl = document.getElementById("app-content");
  const navEl = document.getElementById("header-nav");
  
  if (!contentEl || !navEl) return;
  
  // Clear tooltips
  const existingTooltip = document.getElementById("global-term-tooltip");
  if (existingTooltip) existingTooltip.classList.remove("visible");

  if (hash === "#/" || hash === "") {
    // List View
    navEl.innerHTML = "";
    renderList(contentEl, identities, {
      onEdit: (id) => window.location.hash = `#/edit/${id}`,
      onPreview: (id) => window.location.hash = `#/preview/${id}`,
      onDuplicate: duplicateIdentity,
      onDelete: deleteIdentity,
      onCreateNew: createNewIdentity,
      onOpenDict: openGlobalDictionaryModal,
      onImportJSON: importIdentityJSON
    });
  } 
  else if (hash.startsWith("#/edit/")) {
    // Edit Builder View
    const id = hash.replace("#/edit/", "");
    const char = identities.find(c => c.id === id);
    if (!char) {
      window.location.hash = "#/";
      return;
    }
    
    // Header navigation: switcher between Edit and Preview
    navEl.innerHTML = `
      <div class="mode-toggle-group">
        <button class="mode-btn active" onclick="location.hash='#/edit/${id}'">編集モード</button>
        <button class="mode-btn" onclick="location.hash='#/preview/${id}'">プレビュー</button>
      </div>
    `;
    
    renderBuilder(contentEl, char, saveIdentity, () => window.location.hash = "#/");
  } 
  else if (hash.startsWith("#/preview/")) {
    // Preview Mode View
    const id = hash.replace("#/preview/", "");
    const char = identities.find(c => c.id === id);
    if (!char) {
      window.location.hash = "#/";
      return;
    }
    
    navEl.innerHTML = `
      <div class="mode-toggle-group">
        <button class="mode-btn" onclick="location.hash='#/edit/${id}'">編集モード</button>
        <button class="mode-btn active" onclick="location.hash='#/preview/${id}'">プレビュー</button>
      </div>
      <button class="btn" onclick="location.hash='#/'" style="margin-left: 12px;">人格一覧へ</button>
    `;
    
    // Wrapper for preview styles
    contentEl.innerHTML = `<div class="view-container" id="preview-wrapper"></div>`;
    const previewWrapper = contentEl.querySelector("#preview-wrapper");
    renderPreview(previewWrapper, char);
  }
}

// State Operations
function saveIdentity(updatedChar) {
  identities = identities.map(c => c.id === updatedChar.id ? updatedChar : c);
  localStorage.setItem("limbus_identities", JSON.stringify(identities));
}

function createNewIdentity() {
  const newChar = {
    id: "char-" + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
    name: "",
    prisoner: "イサン",
    team: "",
    image: null,
    season: "",
    releaseDate: new Date().toISOString().split('T')[0],
    stats: {
      hp: 200,
      speedMin: 1,
      speedMax: 5,
      defCorrection: 0
    },
    resistances: {
      slash: "normal",
      slashVal: 1.0,
      pierce: "normal",
      pierceVal: 1.0,
      strike: "normal",
      strikeVal: 1.0
    },
    staggers: [120, 60],
    keywords: [],
    skills: {
      skill1: [],
      skill2: [],
      skill3: [],
      defense: []
    },
    passives: [],
    supportPassives: [],
    panic: {
      name: "パニック",
      text: "1ターンの間行動しない",
      image: null
    },
    sanity: {
      increase: "・マッチ勝利時、マッチ回数に比例して増加（増加量：基本値10、2マッチ目から1マッチにつき20%ずつ増加）\n・敵討伐時、倒した敵のレベルが自分のレベル以上の場合、10増加\n・味方が倒した敵のレベルが自分のレベル以上の場合、5増加",
      decrease: "・味方死亡時、死亡した味方のレベルが自分のレベル以上の場合、レベル差によって減少（減少量：基本値10、レベル差につき10ずつ増加）"
    },
    dictionary: [],
    updatedAt: new Date().toISOString()
  };
  
  identities.push(newChar);
  localStorage.setItem("limbus_identities", JSON.stringify(identities));
  window.location.hash = `#/edit/${newChar.id}`;
}

function duplicateIdentity(id) {
  const source = identities.find(c => c.id === id);
  if (source) {
    const copy = JSON.parse(JSON.stringify(source));
    copy.id = "char-" + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
    copy.name = copy.name ? `${copy.name} (コピー)` : "名称未設定 (コピー)";
    copy.updatedAt = new Date().toISOString();
    
    identities.push(copy);
    localStorage.setItem("limbus_identities", JSON.stringify(identities));
    handleRouting(); // refresh list
  }
}

function deleteIdentity(id) {
  identities = identities.filter(c => c.id !== id);
  localStorage.setItem("limbus_identities", JSON.stringify(identities));
  handleRouting(); // refresh list
}

// JSON Import & Dictionary Conflict Resolution
async function importIdentityJSON(charData) {
  if (!charData.id || !charData.skills) {
    alert("無効なキャラクターデータです。");
    return;
  }
  
  // Make id unique to avoid overwriting existing
  charData.id = "char-" + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
  charData.updatedAt = new Date().toISOString();
  
  const importedDict = charData.dictionary || [];
  const localDict = getDictionary();
  const duplicateTerms = [];
  
  // Find terms in imported list that are already in local dictionary but differ
  importedDict.forEach(impTerm => {
    const local = localDict.find(l => l.name === impTerm.name);
    if (local) {
      const isDifferent = local.color !== impTerm.color || 
                          local.type !== impTerm.type || 
                          local.description !== impTerm.description ||
                          local.icon !== impTerm.icon;
      if (isDifferent) {
        duplicateTerms.push({ local, imported: impTerm });
      }
    }
  });

  if (duplicateTerms.length > 0) {
    // Process conflicts sequentially
    for (const conflict of duplicateTerms) {
      const resolution = await showConflictResolverModal(conflict);
      
      if (resolution === 'overwrite') {
        // Overwrite local dictionary term
        const idx = localDict.findIndex(l => l.name === conflict.local.name);
        localDict[idx] = { ...localDict[idx], ...conflict.imported };
      } 
      else if (resolution === 'rename') {
        // Keep both: rename the imported one in the character's references
        const newName = `${conflict.imported.name}(インポート)`;
        
        // Update name in imported dictionary
        conflict.imported.name = newName;
        conflict.imported.id = 'term-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        
        // Add to local dictionary as new term
        localDict.push(conflict.imported);
        
        // Replace all references in character data
        const oldRef = `[[${conflict.local.name}]]`;
        const newRef = `[[${newName}]]`;
        
        const replaceRefs = (text) => {
          if (!text) return "";
          return text.replaceAll(oldRef, newRef);
        };

        charData.panic.text = replaceRefs(charData.panic.text);
        charData.sanity.increase = replaceRefs(charData.sanity.increase);
        charData.sanity.decrease = replaceRefs(charData.sanity.decrease);
        
        Object.values(charData.skills).flat().forEach(s => {
          s.effectText = replaceRefs(s.effectText);
          if (s.coinEffects) {
            s.coinEffects.forEach(c => c.text = replaceRefs(c.text));
          }
        });
        if (charData.passives) charData.passives.forEach(p => p.text = replaceRefs(p.text));
        if (charData.supportPassives) charData.supportPassives.forEach(p => p.text = replaceRefs(p.text));
      }
      // 'use-local': do nothing, references remain but point to local colors/descriptions
    }
    saveDictionary(localDict);
  }

  // Add remaining non-duplicate imported terms to local dictionary
  const finalLocalDict = getDictionary();
  importedDict.forEach(impTerm => {
    if (!finalLocalDict.some(l => l.name === impTerm.name)) {
      finalLocalDict.push(impTerm);
    }
  });
  saveDictionary(finalLocalDict);

  // Save the imported character
  identities.push(charData);
  localStorage.setItem("limbus_identities", JSON.stringify(identities));
  
  alert(`キャラクター「${charData.name || "名称未設定"}」をインポートしました。`);
  handleRouting();
}

// Modal management utilities
function setupGlobalModals() {
  document.body.insertAdjacentHTML('beforeend', `
    <!-- Global Dictionary Modal -->
    <div id="modal-global-dict" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">用語辞書管理</h3>
          <button class="modal-close" onclick="document.getElementById('modal-global-dict').classList.remove('active')">×</button>
        </div>
        <div class="modal-body" id="modal-global-dict-body"></div>
      </div>
    </div>

    <!-- Conflict Resolution Modal -->
    <div id="modal-conflict" class="modal-overlay">
      <div class="modal-content" style="max-width: 500px;">
        <div class="modal-header">
          <h3 class="modal-title" style="color: var(--warning-color);">用語重複の競合解決</h3>
        </div>
        <div class="modal-body">
          <p style="margin-bottom: 16px; font-size: 0.95rem;">
            インポートされた用語 <strong id="conflict-term-name" style="color: var(--gold-primary);"></strong> はローカルの用語辞書にすでに存在しますが、内容が異なります。処理方法を選択してください。
          </p>
          
          <div class="conflict-option" data-action="use-local">
            <div class="conflict-option-title">ローカル辞書の定義を優先する</div>
            <div class="conflict-option-desc">既存の定義をそのまま維持します。インポートする人格テキスト内のカラーや説明はローカルのものが反映されます。</div>
          </div>

          <div class="conflict-option" data-action="overwrite">
            <div class="conflict-option-title" style="color: var(--danger-color);">ローカル辞書を上書きする</div>
            <div class="conflict-option-desc">既存の定義をインポートされた定義で置き換えます。他キャラクターへの表示も上書きされます。</div>
          </div>

          <div class="conflict-option" data-action="rename">
            <div class="conflict-option-title">別名として両方残す</div>
            <div class="conflict-option-desc">インポートされた用語に「(インポート)」を付けて新規登録し、この人格からそちらを参照させます。</div>
          </div>
        </div>
      </div>
    </div>
  `);
}

function openGlobalDictionaryModal() {
  const modal = document.getElementById("modal-global-dict");
  const body = document.getElementById("modal-global-dict-body");
  renderDictionaryManager(body);
  modal.classList.add("active");
}

function showConflictResolverModal(conflict) {
  return new Promise((resolve) => {
    const modal = document.getElementById("modal-conflict");
    modal.querySelector("#conflict-term-name").textContent = `「${conflict.imported.name}」`;
    modal.classList.add("active");
    
    const options = modal.querySelectorAll(".conflict-option");
    
    const handler = (e) => {
      const option = e.currentTarget;
      const action = option.getAttribute("data-action");
      
      options.forEach(opt => opt.removeEventListener("click", handler));
      modal.classList.remove("active");
      resolve(action);
    };

    options.forEach(opt => {
      opt.addEventListener("click", handler);
    });
  });
}

// Initial HTML Injection
document.getElementById("app").innerHTML = `
  <header class="app-header">
    <div class="logo-container">
      <span class="logo-text">人格ビルダー</span>
    </div>
    <nav id="header-nav">
      <!-- Routing links dynamically placed -->
    </nav>
  </header>
  <main id="app-content"></main>
`;

// Start App!
initApp();
