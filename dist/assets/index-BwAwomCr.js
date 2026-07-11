(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const y of l.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&i(y)}).observe(document,{childList:!0,subtree:!0});function d(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=d(n);fetch(n.href,l)}})();const te=[{id:"term-poise",name:"呼吸",type:"buff",color:"#81c784",description:`クリティカル確率が増加する。
クリティカル発生時、呼吸回数を1消費し、ダメージが+20%増加する。`,icon:"preset-wind"},{id:"term-bleed",name:"出血",type:"debuff",color:"#e57373",description:"コインを投げる度、出血数値分の固定ダメージを受け、出血回数が1減少する。",icon:"preset-blood"},{id:"term-burn",name:"火傷",type:"debuff",color:"#ff8a65",description:"ターン終了時、火傷数値分の固定ダメージを受け、火傷回数が1減少する。",icon:"preset-fire"},{id:"term-sinking",name:"沈潜",type:"debuff",color:"#64b5f6",description:`被撃時、沈潜数値分の精神力ダメージを受け、沈潜回数が1減少する。
(幻想体など精神力のない対象の場合は、憂鬱属性ダメージを与える)`,icon:"preset-sinking"},{id:"term-tremor",name:"振動",type:"debuff",color:"#a1887f",description:`振動爆発を誘発するスキルの的中時、振動数値分だけ混乱閾値を前進させる。
ターン終了時、振動回数が1減少する。`,icon:"preset-tremor"},{id:"term-rupture",name:"破裂",type:"debuff",color:"#dce775",description:"被撃時、破裂数値分の固定ダメージを受け、破裂回数が1減少する。",icon:"preset-rupture"},{id:"term-charge",name:"充電",type:"resource",color:"#4dd0e1",description:`特定のスキル効果を発動するために消費される固有リソース。
ターン終了時、充電回数が1減少する。`,icon:"preset-charge"},{id:"term-haste",name:"クイック",type:"buff",color:"#ffd54f",description:"次のターンの速度の最大値と最小値が数値分増加する。",icon:"preset-haste"},{id:"term-protection",name:"保護",type:"buff",color:"#9575cd",description:"このターン中、被撃時に受けるダメージ量が(数値×10)%減少する。",icon:"preset-protection"},{id:"term-dmg-up",name:"ダメージ量増加",type:"buff",color:"#ffb74d",description:"与えるダメージ量が(数値×10)%増加する。",icon:"preset-dmg-up"}];function Y(){localStorage.getItem("limbus_dictionary")||localStorage.setItem("limbus_dictionary",JSON.stringify(te))}function H(){return Y(),JSON.parse(localStorage.getItem("limbus_dictionary"))}function D(t){localStorage.setItem("limbus_dictionary",JSON.stringify(t))}function se(t){const e=H(),d={id:"term-"+Date.now()+"-"+Math.random().toString(36).substr(2,9),...t};return e.push(d),D(e),d}function ie(t,e){let d=H();d=d.map(i=>i.id===t?{...i,...e}:i),D(d)}function ne(t){let e=H();e=e.filter(d=>d.id!==t),D(e)}const U={"preset-wind":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M2 12h14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2h-2c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.8-1.2 3.3-2.8 3.8l.6 1.9C21.4 14.2 23 12.3 23 10c0-3.9-3.1-7-7-7s-7 3.1-7 7H2v2zm16 4h-2c0 1.1-.9 2-2 2s-2-.9-2-2H8c0 2.2 1.8 4 4 4s4-1.8 4-4 1.8-4 4-4v2c-1.1 0-2 .9-2 2z"/></svg>',"preset-blood":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',"preset-fire":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 23c-4.41 0-8-3.59-8-8 0-4.04 4-9.33 8-13.62 4 4.29 8 9.58 8 13.62 0 4.41-3.59 8-8 8zm0-18.73c-2.83 3.25-6 7.42-6 10.73 0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.31-3.17-7.48-6-10.73z"/></svg>',"preset-sinking":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',"preset-tremor":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48l2.12 2.12M18.36 5.64l-2.12 2.12M7.76 16.24l-2.12 2.12M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>',"preset-rupture":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5l7 2.5z"/></svg>',"preset-charge":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>',"preset-haste":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/></svg>',"preset-protection":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',"preset-dmg-up":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',default:'<svg class="term-link-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>'};function Q(t){return U[t]||U.default}function _(t,e=[]){if(!t)return"";const d=H(),i=[...e,...d],n=new Map;return i.forEach(l=>{n.set(l.name,l)}),t.replace(/\[\[([^\]]+)\]\]/g,(l,y)=>{const h=n.get(y);if(h){const S=Q(h.icon);return`<span class="term-link" style="color: ${h.color};" data-term-id="${h.id}" data-term-name="${h.name}" data-term-desc="${h.description.replace(/"/g,"&quot;")}" data-term-type="${h.type}">${S}${h.name}</span>`}return y})}function O(t,e,d=[]){let i=e.querySelector(".autocomplete-suggestions");i||(i=document.createElement("div"),i.className="autocomplete-suggestions",e.appendChild(i));let n=-1,l=[],y=-1;t.addEventListener("input",r=>{const m=t.value,L=t.selectionStart,x=m.slice(0,L),c=x.lastIndexOf("@");if(c!==-1){const o=x.slice(c+1);if(!/\s/.test(o)){y=c;const v=o.toLowerCase(),u=H(),s=[...d,...u],a=[],p=new Set;if(s.forEach(g=>{p.has(g.name)||(p.add(g.name),a.push(g))}),l=a.filter(g=>g.name.toLowerCase().includes(v)),l.length>0){q(l),h();return}}}S()}),t.addEventListener("keydown",r=>{i.style.display==="block"&&(r.key==="ArrowDown"?(r.preventDefault(),n=(n+1)%l.length,w()):r.key==="ArrowUp"?(r.preventDefault(),n=(n-1+l.length)%l.length,w()):r.key==="Enter"?(r.preventDefault(),n>=0&&n<l.length?k(l[n]):l.length>0&&k(l[0])):r.key==="Escape"&&(r.preventDefault(),S()))}),t.addEventListener("blur",()=>{setTimeout(S,200)});function h(){i.style.display="block",t.getBoundingClientRect(),t.parentElement.getBoundingClientRect(),i.style.left="12px",i.style.top=`${t.offsetHeight}px`,n=-1}function S(){i.style.display="none",n=-1}function q(r){i.innerHTML="",r.forEach((m,L)=>{const x=document.createElement("div");x.className="autocomplete-suggestion-item",L===n&&x.classList.add("active");const c={buff:"バフ",debuff:"デバフ",status:"状態異常",resource:"資源",item:"アイテム",special:"特殊",other:"その他"}[m.type]||"用語";x.innerHTML=`
        <span style="color: ${m.color}; font-weight: 700;">${m.name}</span>
        <span class="suggestion-type">${c}</span>
      `,x.addEventListener("mousedown",o=>{o.preventDefault(),k(m)}),i.appendChild(x)})}function w(){i.querySelectorAll(".autocomplete-suggestion-item").forEach((m,L)=>{L===n?(m.classList.add("active"),m.scrollIntoView({block:"nearest"})):m.classList.remove("active")})}function k(r){const m=t.value,L=t.selectionStart,x=m.slice(0,y),c=m.slice(L);t.value=x+`[[${r.name}]]`+c;const o=y+r.name.length+4;t.setSelectionRange(o,o),S(),t.dispatchEvent(new Event("input"))}}let R=null;function ae(t){let e=document.getElementById("global-term-tooltip");e||(e=document.createElement("div"),e.id="global-term-tooltip",e.className="term-tooltip",document.body.appendChild(e)),t.addEventListener("mouseover",i=>{const n=i.target.closest(".term-link");if(n){const l=n.getAttribute("data-term-name"),y=n.getAttribute("data-term-desc"),h=n.getAttribute("data-term-type"),S=n.style.color,q={buff:"バフ",debuff:"デバフ",status:"状態異常",resource:"固有リソース",item:"固有アイテム",special:"特殊",other:"その他"}[h]||"用語";e.innerHTML=`
        <div class="term-tooltip-title" style="color: ${S};">${l}</div>
        <div class="term-tooltip-type">${q}</div>
        <div class="term-tooltip-desc">${y}</div>
      `,e.classList.add("visible"),R=n,d(i,e)}}),t.addEventListener("mousemove",i=>{R&&d(i,e)}),t.addEventListener("mouseout",i=>{const n=i.target.closest(".term-link");n&&R===n&&(e.classList.remove("visible"),R=null)});function d(i,n){let y=i.clientX+15,h=i.clientY+15;const S=n.getBoundingClientRect();y+S.width>window.innerWidth&&(y=i.clientX-S.width-15),h+S.height>window.innerHeight&&(h=i.clientY-S.height-15),n.style.left=`${y+window.scrollX}px`,n.style.top=`${h+window.scrollY}px`}}function oe(t){H(),t.innerHTML=`
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
  `;const e=t.querySelector("#term-form-container"),d=t.querySelector("#term-form-title"),i=t.querySelector("#edit-term-id"),n=t.querySelector("#term-name-input"),l=t.querySelector("#term-type-input"),y=t.querySelector("#term-color-input"),h=t.querySelector("#term-color-text"),S=t.querySelector("#term-icon-input"),q=t.querySelector("#term-desc-input"),w=t.querySelector("#dict-table-body");y.addEventListener("input",r=>{h.value=r.target.value}),h.addEventListener("input",r=>{/^#[0-9A-F]{6}$/i.test(r.target.value)&&(y.value=r.target.value)});function k(){const r=H();w.innerHTML="",r.forEach(m=>{const L=document.createElement("tr"),x={buff:"バフ",debuff:"デバフ",status:"状態異常",resource:"固有リソース",item:"固有アイテム",special:"特殊",other:"その他"}[m.type]||"用語";L.innerHTML=`
        <td>
          <span style="color: ${m.color}; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
            ${Q(m.icon)}${m.name}
          </span>
        </td>
        <td>${x}</td>
        <td>
          <span class="color-preview-circle" style="background-color: ${m.color};"></span>
          <code>${m.color}</code>
        </td>
        <td style="text-align: right;">
          <button class="btn btn-sm btn-edit-term" data-id="${m.id}" style="margin-right: 4px;">編集</button>
          <button class="btn btn-danger btn-sm btn-delete-term" data-id="${m.id}">削除</button>
        </td>
      `,w.appendChild(L)}),w.querySelectorAll(".btn-edit-term").forEach(m=>{m.addEventListener("click",()=>{const L=m.getAttribute("data-id"),x=r.find(c=>c.id===L);x&&(i.value=x.id,n.value=x.name,l.value=x.type,y.value=x.color,h.value=x.color,S.value=x.icon||"default",q.value=x.description,d.textContent="用語の編集",e.style.display="block")})}),w.querySelectorAll(".btn-delete-term").forEach(m=>{m.addEventListener("click",()=>{const L=m.getAttribute("data-id"),x=r.find(c=>c.id===L);x&&confirm(`用語「${x.name}」を削除しますか？`)&&(ne(L),k())})})}t.querySelector("#btn-add-new-term").addEventListener("click",()=>{i.value="",n.value="",l.value="buff",y.value="#ffd54f",h.value="#ffd54f",S.value="default",q.value="",d.textContent="新規用語登録",e.style.display="block"}),t.querySelector("#btn-cancel-term").addEventListener("click",()=>{e.style.display="none"}),t.querySelector("#btn-save-term").addEventListener("click",()=>{const r=n.value.trim();if(!r){alert("用語名を入力してください。");return}const m={name:r,type:l.value,color:h.value,icon:S.value,description:q.value.trim()},L=i.value;if(L)ie(L,m);else{if(H().some(c=>c.name===r)){alert("すでに同じ名前の用語が登録されています。");return}se(m)}e.style.display="none",k()}),k()}const le=["イサン","ファウスト","ドンキホーテ","良秀","ムルソー","ホンル","ヒースクリフ","イシュメール","ロージャ","シンクレア","ウーティス","グレゴール"];function re(t,e,d){window._listFilterState||(window._listFilterState={search:"",sinner:"all",sort:"updated_desc"});const i=window._listFilterState,n=()=>{let w=[...e];if(i.search){const r=i.search.toLowerCase();w=w.filter(m=>(m.name||"").toLowerCase().includes(r)||(m.team||"").toLowerCase().includes(r)||(m.keywords||[]).some(L=>L.toLowerCase().includes(r)))}i.sinner!=="all"&&(w=w.filter(r=>r.prisoner===i.sinner)),w.sort((r,m)=>i.sort==="updated_desc"?new Date(m.updatedAt||0)-new Date(r.updatedAt||0):i.sort==="updated_asc"?new Date(r.updatedAt||0)-new Date(m.updatedAt||0):i.sort==="name_asc"?(r.name||"").localeCompare(m.name||"","ja"):0);const k=t.querySelector("#identity-grid-container");if(k){if(w.length===0){k.innerHTML=`
        <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-muted); background: var(--panel-bg); border: 1px solid var(--border-color);">
          該当するキャラクターが見つかりません。新規作成するか、JSONファイルをインポートしてください。
        </div>
      `;return}k.innerHTML=w.map(r=>{var x,c,o,v,u,s,a,p;const m=r.image?`background-image: url('${r.image}');`:"",L=r.updatedAt?new Date(r.updatedAt).toLocaleString("ja-JP",{hour12:!1}):"不明";return`
        <div class="identity-card" data-id="${r.id}">
          <div class="identity-card-image" style="${m}">
            ${r.image?"":`<div class="identity-card-image-placeholder">${r.prisoner||"イサン"}</div>`}
            <div class="identity-card-tag">${r.prisoner||"未設定"}</div>
          </div>
          <div class="identity-card-info">
            <h3 class="identity-card-title">${r.name||"（名称未設定）"}</h3>
            <div class="identity-card-subtitle">${r.team||"所属・チーム未設定"}</div>
            
            <div class="identity-card-meta">
              <span>スキル: ${(((c=(x=r.skills)==null?void 0:x.skill1)==null?void 0:c.length)||0)+(((v=(o=r.skills)==null?void 0:o.skill2)==null?void 0:v.length)||0)+(((s=(u=r.skills)==null?void 0:u.skill3)==null?void 0:s.length)||0)} / 守備: ${((p=(a=r.skills)==null?void 0:a.defense)==null?void 0:p.length)||0}</span>
              <span>更新: ${L.split(" ")[0]}</span>
            </div>
          </div>
          <div class="identity-card-actions">
            <button class="btn-open-edit" title="編集"><svg class="icon" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> 編集</button>
            <button class="btn-open-preview" title="プレビュー"><svg class="icon" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg> 表示</button>
            <button class="btn-duplicate" title="複製"><svg class="icon" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></button>
            <button class="btn-delete btn-danger" title="削除"><svg class="icon" viewBox="0 0 24 24" style="fill: #ff5252;"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
          </div>
        </div>
      `}).join(""),k.querySelectorAll(".identity-card").forEach(r=>{const m=r.getAttribute("data-id");r.querySelector(".btn-open-edit").addEventListener("click",()=>d.onEdit(m)),r.querySelector(".btn-open-preview").addEventListener("click",()=>d.onPreview(m)),r.querySelector(".btn-duplicate").addEventListener("click",()=>d.onDuplicate(m)),r.querySelector(".btn-delete").addEventListener("click",()=>{const L=e.find(x=>x.id===m);L&&confirm(`キャラクター「${L.name||"無題"}」を削除しますか？
（この操作は取り消せません）`)&&d.onDelete(m)})})}},l=le.map(w=>`<option value="${w}" ${i.sinner===w?"selected":""}>${w}</option>`).join("");t.innerHTML=`
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
          <input type="text" id="search-input" class="search-input" placeholder="名前、所属、キーワードで検索..." value="${i.search}">
          
          <select id="sinner-filter" class="filter-select">
            <option value="all" ${i.sinner==="all"?"selected":""}>すべての囚人</option>
            ${l}
          </select>
          
          <select id="sort-select" class="filter-select">
            <option value="updated_desc" ${i.sort==="updated_desc"?"selected":""}>最終更新（新しい順）</option>
            <option value="updated_asc" ${i.sort==="updated_asc"?"selected":""}>最終更新（古い順）</option>
            <option value="name_asc" ${i.sort==="name_asc"?"selected":""}>名前順（昇順）</option>
          </select>
        </div>
      </div>

      <div class="identity-grid" id="identity-grid-container">
        <!-- Rendered items go here -->
      </div>
    </div>

    <!-- Hidden file input for JSON import -->
    <input type="file" id="json-file-input" accept=".json" style="display: none;">
  `;const y=t.querySelector("#search-input"),h=t.querySelector("#sinner-filter"),S=t.querySelector("#sort-select");y.addEventListener("input",w=>{i.search=w.target.value,n()}),h.addEventListener("change",w=>{i.sinner=w.target.value,n()}),S.addEventListener("change",w=>{i.sort=w.target.value,n()}),t.querySelector("#btn-create-new").addEventListener("click",()=>d.onCreateNew()),t.querySelector("#btn-open-global-dict").addEventListener("click",()=>d.onOpenDict());const q=t.querySelector("#json-file-input");t.querySelector("#btn-import-json").addEventListener("click",()=>{q.click()}),q.addEventListener("change",w=>{const k=w.target.files[0];if(k){const r=new FileReader;r.onload=m=>{try{const L=JSON.parse(m.target.result);d.onImportJSON(L)}catch{alert("JSONファイルの解析に失敗しました。正しいフォーマットか確認してください。")}},r.readAsText(k),q.value=""}}),n()}const ce=["イサン","ファウスト","ドンキホーテ","良秀","ムルソー","ホンル","ヒースクリフ","イシュメール","ロージャ","シンクレア","ウーティス","グレゴール"],W=[{value:"wrath",label:"憤怒 (赤)"},{value:"lust",label:"色欲 (橙)"},{value:"sloth",label:"怠惰 (黄)"},{value:"gluttony",label:"暴食 (緑)"},{value:"gloom",label:"憂鬱 (水色)"},{value:"pride",label:"傲慢 (青)"},{value:"envy",label:"嫉妬 (紫)"}];function de(t,e,d,i){let n="builder-tab-s1";const l=e.dictionary||[];t.innerHTML=`
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
  `;const y=()=>{const o=t.querySelector("#builder-left-panel");if(!o)return;const v=ce.map(f=>`<option value="${f}" ${e.prisoner===f?"selected":""}>${f}</option>`).join(""),u=e.image?`background-image: url('${e.image}');`:"";o.innerHTML=`
      <div class="panel-title">基本情報</div>
      
      <!-- Image Uploader -->
      <div class="form-group">
        <label>キャラクター画像</label>
        <div class="image-uploader ${e.image?"has-image":""}" id="image-upload-area" style="${u}">
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
        <input type="text" id="char-name" class="form-control" placeholder="例: 蜘蛛の巣 中指の親方" value="${e.name||""}">
      </div>

      <div class="form-row-grid">
        <div class="form-group">
          <label>所属囚人</label>
          <select id="char-prisoner" class="form-control">
            ${v}
          </select>
        </div>
        <div class="form-group">
          <label>所属・チーム名</label>
          <input type="text" id="char-team" class="form-control" placeholder="例: 中指" value="${e.team||""}">
        </div>
      </div>

      <div class="panel-title" style="margin-top: 24px;">ステータス</div>
      <div class="form-row-grid">
        <div class="form-group">
          <label>最大HP</label>
          <input type="number" id="char-hp" class="form-control" value="${e.stats.hp||100}">
        </div>
        <div class="form-group">
          <label>速度(最小)</label>
          <input type="number" id="char-speed-min" class="form-control" value="${e.stats.speedMin||1}">
        </div>
        <div class="form-group">
          <label>速度(最大)</label>
          <input type="number" id="char-speed-max" class="form-control" value="${e.stats.speedMax||5}">
        </div>
      </div>
      <div class="form-group">
        <label>防御補正 (±)</label>
        <input type="number" id="char-def-correction" class="form-control" value="${e.stats.defCorrection||0}">
      </div>

      <div class="panel-title" style="margin-top: 24px;">属性耐性</div>
      ${h("斬撃","slash",e.resistances.slash,e.resistances.slashVal)}
      ${h("貫通","pierce",e.resistances.pierce,e.resistances.pierceVal)}
      ${h("打撃","strike",e.resistances.strike,e.resistances.strikeVal)}

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
        <input type="text" id="char-season" class="form-control" placeholder="例: シーズン7" value="${e.season||""}">
      </div>
      <div class="form-group">
        <label>リリース日</label>
        <input type="date" id="char-releasedate" class="form-control" value="${e.releaseDate||""}">
      </div>
    `;const s=o.querySelector("#image-upload-area"),a=o.querySelector("#char-image-input"),p=o.querySelector("#btn-delete-image");s.addEventListener("click",f=>{f.target!==p&&a.click()}),a.addEventListener("change",f=>{const E=f.target.files[0];if(E){const $=new FileReader;$.onload=M=>{e.image=M.target.result,s.style.backgroundImage=`url('${e.image}')`,s.classList.add("has-image"),c()},$.readAsDataURL(E)}}),p.addEventListener("click",f=>{f.stopPropagation(),e.image=null,s.style.backgroundImage="",s.classList.remove("has-image"),a.value="",c()}),o.querySelector("#char-name").addEventListener("input",f=>{e.name=f.target.value,c()}),o.querySelector("#char-prisoner").addEventListener("change",f=>{e.prisoner=f.target.value,c()}),o.querySelector("#char-team").addEventListener("input",f=>{e.team=f.target.value,c()}),o.querySelector("#char-hp").addEventListener("input",f=>{e.stats.hp=parseInt(f.target.value)||0,q(),c()}),o.querySelector("#char-speed-min").addEventListener("input",f=>{e.stats.speedMin=parseInt(f.target.value)||0,c()}),o.querySelector("#char-speed-max").addEventListener("input",f=>{e.stats.speedMax=parseInt(f.target.value)||0,c()}),o.querySelector("#char-def-correction").addEventListener("input",f=>{e.stats.defCorrection=parseInt(f.target.value)||0,c()}),o.querySelector("#char-season").addEventListener("input",f=>{e.season=f.target.value,c()}),o.querySelector("#char-releasedate").addEventListener("change",f=>{e.releaseDate=f.target.value,c()}),["slash","pierce","strike"].forEach(f=>{const E=o.querySelector(`#res-type-${f}`),$=o.querySelector(`#res-val-${f}`);E.addEventListener("change",M=>{e.resistances[f]=M.target.value,M.target.value==="custom"?$.style.display="block":($.style.display="none",e.resistances[`${f}Val`]={fatal:2,weak:1.5,normal:1,resist:.5,immune:0}[M.target.value]||1),c()}),$.addEventListener("input",M=>{e.resistances[`${f}Val`]=parseFloat(M.target.value)||1,c()})}),S(),o.querySelector("#btn-add-stagger").addEventListener("click",()=>{e.staggers=e.staggers||[],e.staggers.push(0),S(),c()}),w();const g=o.querySelector("#keyword-input"),C=()=>{const f=g.value.trim();f&&!e.keywords.includes(f)&&(e.keywords.push(f),g.value="",w(),c())};o.querySelector("#btn-add-keyword").addEventListener("click",C),g.addEventListener("keydown",f=>{f.key==="Enter"&&(f.preventDefault(),C())})},h=(o,v,u,s)=>`
      <div class="form-group" style="margin-bottom: 12px;">
        <label>${o}耐性</label>
        <div style="display: flex; gap: 8px;">
          <select id="res-type-${v}" class="form-control" style="flex: 1;">
            <option value="normal" ${u==="normal"?"selected":""}>普通 (x1.0)</option>
            <option value="resist" ${u==="resist"?"selected":""}>耐性 (x0.5)</option>
            <option value="weak" ${u==="weak"?"selected":""}>弱点 (x1.5)</option>
            <option value="fatal" ${u==="fatal"?"selected":""}>脆弱 (x2.0)</option>
            <option value="immune" ${u==="immune"?"selected":""}>無効 (x0.0)</option>
            <option value="custom" ${u==="custom"?"selected":""}>カスタム入力</option>
          </select>
          <input type="number" step="0.1" id="res-val-${v}" class="form-control" style="width: 80px; display: ${u==="custom"?"block":"none"};" value="${s||1}">
        </div>
      </div>
    `,S=()=>{const o=t.querySelector("#stagger-inputs-container");o&&(e.staggers=e.staggers||[],o.innerHTML=e.staggers.map((v,u)=>{const s=e.stats.hp>0?Math.round(v/e.stats.hp*100):0;return`
        <div class="list-editor-item stagger-row-item" data-index="${u}">
          <input type="number" class="form-control stagger-value-input" value="${v}" style="flex: 1;">
          <span class="stagger-calc-percentage" style="min-width: 60px; font-weight: 600; color: var(--gold-primary); text-align: center;">(${s}%)</span>
          <button class="btn btn-sm btn-danger btn-remove-stagger"><svg class="icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>
        </div>
      `}).join(""),o.querySelectorAll(".stagger-row-item").forEach(v=>{const u=parseInt(v.getAttribute("data-index")),s=v.querySelector(".stagger-value-input"),a=v.querySelector(".stagger-calc-percentage");s.addEventListener("input",p=>{const g=parseInt(p.target.value)||0;e.staggers[u]=g;const C=e.stats.hp>0?Math.round(g/e.stats.hp*100):0;a.textContent=`(${C}%)`,c()}),v.querySelector(".btn-remove-stagger").addEventListener("click",()=>{e.staggers.splice(u,1),S(),c()})}))},q=()=>{t.querySelectorAll(".stagger-row-item").forEach(v=>{const u=v.querySelector(".stagger-value-input"),s=v.querySelector(".stagger-calc-percentage"),a=parseInt(u.value)||0,p=e.stats.hp>0?Math.round(a/e.stats.hp*100):0;s.textContent=`(${p}%)`})},w=()=>{const o=t.querySelector("#keywords-badges-container");o&&(o.innerHTML=e.keywords.map((v,u)=>`
      <span class="tag-badge">
        ${v}
        <span class="remove-tag" data-index="${u}">×</span>
      </span>
    `).join(""),o.querySelectorAll(".remove-tag").forEach(v=>{v.addEventListener("click",()=>{const u=parseInt(v.getAttribute("data-index"));e.keywords.splice(u,1),w(),c()})}))},k=()=>{const o=t.querySelector("#builder-right-panel");if(!o)return;o.innerHTML=`
      <div style="padding: 0 20px;">
        <div class="tabs-header" style="margin-bottom: 20px;">
          <button class="tab-link ${n==="builder-tab-s1"?"active":""}" data-target="builder-tab-s1">スキル1</button>
          <button class="tab-link ${n==="builder-tab-s2"?"active":""}" data-target="builder-tab-s2">スキル2</button>
          <button class="tab-link ${n==="builder-tab-s3"?"active":""}" data-target="builder-tab-s3">スキル3</button>
          <button class="tab-link ${n==="builder-tab-def"?"active":""}" data-target="builder-tab-def">守備</button>
          <button class="tab-link ${n==="builder-tab-passives"?"active":""}" data-target="builder-tab-passives">パッシブ・精神力</button>
        </div>
      </div>

      <div class="tab-content ${n==="builder-tab-s1"?"active":""}" id="builder-tab-s1" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">スキル1 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="skill1">+ スキル追加</button>
        </div>
        <div class="skills-editor-list" data-tab="skill1"></div>
      </div>

      <div class="tab-content ${n==="builder-tab-s2"?"active":""}" id="builder-tab-s2" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">スキル2 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="skill2">+ スキル追加</button>
        </div>
        <div class="skills-editor-list" data-tab="skill2"></div>
      </div>

      <div class="tab-content ${n==="builder-tab-s3"?"active":""}" id="builder-tab-s3" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">スキル3 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="skill3">+ スキル追加</button>
        </div>
        <div class="skills-editor-list" data-tab="skill3"></div>
      </div>

      <div class="tab-content ${n==="builder-tab-def"?"active":""}" id="builder-tab-def" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">守備スキル 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="defense">+ 守備追加</button>
        </div>
        <div class="skills-editor-list" data-tab="defense"></div>
      </div>

      <div class="tab-content ${n==="builder-tab-passives"?"active":""}" id="builder-tab-passives" style="padding: 0 20px;">
        <!-- Passives & Panic & Sanity -->
        <div id="passives-editor-container"></div>
      </div>
    `;const v=o.querySelectorAll(".tab-link"),u=o.querySelectorAll(".tab-content");v.forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-target");n=a,v.forEach(p=>p.classList.remove("active")),u.forEach(p=>p.classList.remove("active")),s.classList.add("active"),o.querySelector(`#${a}`).classList.add("active")})}),o.querySelectorAll(".btn-add-skill").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-tab"),p={id:"skill-"+Date.now()+"-"+Math.random().toString(36).substr(2,5),name:"",levelBonus:0,affinity:"sloth",atkType:"slash",defenseType:"defense",coins:1,unbreakableCoins:0,basePower:10,atkLevel:40,weight:1,effectText:"",flavorText:"",coinEffects:[{text:""}],tagMatchImpossible:!1,tagTargetIndistinguishable:!1,tagTargetImmutable:!1,specialTagsText:""};e.skills[a]=e.skills[a]||[],e.skills[a].push(p),r(a),c()})}),r("skill1"),r("skill2"),r("skill3"),r("defense"),L()},r=o=>{const v=t.querySelector(`.skills-editor-list[data-tab="${o}"]`);if(!v)return;const u=e.skills[o]||[];if(u.length===0){v.innerHTML='<div style="text-align: center; color: var(--text-muted); border: 1px dashed var(--border-color); padding: 24px; border-radius: 4px;">スキルが登録されていません。上のボタンから追加してください。</div>';return}v.innerHTML="",u.forEach((s,a)=>{const p=document.createElement("div");p.className="skill-editor-card",p.dataset.index=a;const g=W.map(b=>`<option value="${b.value}" ${s.affinity===b.value?"selected":""}>${b.label}</option>`).join("");let C="";for(let b=1;b<=10;b++)C+=`<option value="${b}" ${parseInt(s.weight)===b?"selected":""}>${b}</option>`;const f=o==="defense";p.innerHTML=`
        <div class="skill-editor-card-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="skill-drag-handle" style="display: none;">☰</span>
            <span style="font-weight: 700; color: var(--gold-primary);">#${a+1}</span>
            <h4 style="font-size: 1rem;">${s.name||"（名称未設定）"}</h4>
          </div>
          
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-sm btn-reorder-up" ${a===0?"disabled":""} title="上に移動">▲</button>
            <button class="btn btn-sm btn-reorder-down" ${a===u.length-1?"disabled":""} title="下に移動">▼</button>
            <button class="btn btn-danger btn-sm btn-delete-skill">削除</button>
          </div>
        </div>

        <div class="form-row-grid">
          <div class="form-group">
            <label>スキル名</label>
            <input type="text" class="form-control skill-name-input" value="${s.name||""}">
          </div>
          <div class="form-group">
            <label>罪悪属性</label>
            <select class="form-control skill-sin-select">
              ${g}
            </select>
          </div>
          ${f?`
            <div class="form-group">
              <label>守備タイプ</label>
              <select class="form-control skill-deftype-select">
                <option value="defense" ${s.defenseType==="defense"?"selected":""}>防御</option>
                <option value="evade" ${s.defenseType==="evade"?"selected":""}>回避</option>
                <option value="counter" ${s.defenseType==="counter"?"selected":""}>反撃</option>
                <option value="match_guard" ${s.defenseType==="match_guard"?"selected":""}>マッチ可能ガード</option>
                <option value="match_counter" ${s.defenseType==="match_counter"?"selected":""}>マッチ可能反撃</option>
              </select>
            </div>
          `:`
            <div class="form-group">
              <label>攻撃属性</label>
              <select class="form-control skill-atktype-select">
                <option value="slash" ${s.atkType==="slash"?"selected":""}>斬撃</option>
                <option value="pierce" ${s.atkType==="pierce"?"selected":""}>貫通</option>
                <option value="strike" ${s.atkType==="strike"?"selected":""}>打撃</option>
              </select>
            </div>
          `}
        </div>

        <!-- Conditional visibility: Attack attribute for Counters in defense tab -->
        ${f?`
          <div class="form-group counter-atktype-container" style="display: ${s.defenseType==="counter"||s.defenseType==="match_counter"?"block":"none"};">
            <label>反撃攻撃属性</label>
            <select class="form-control skill-atktype-select">
              <option value="slash" ${s.atkType==="slash"?"selected":""}>斬撃</option>
              <option value="pierce" ${s.atkType==="pierce"?"selected":""}>貫通</option>
              <option value="strike" ${s.atkType==="strike"?"selected":""}>打撃</option>
            </select>
          </div>
        `:""}

        <div class="form-row-grid">
          <div class="form-group">
            <label>ベース威力</label>
            <input type="number" class="form-control skill-basepower-input" value="${s.basePower||0}">
          </div>
          <div class="form-group">
            <label>コイン威力（±）</label>
            <input type="number" class="form-control skill-coinpower-input" value="${s.coinPower||0}">
          </div>
          <div class="form-group">
            <label>レベルボーナス</label>
            <input type="number" class="form-control skill-lvlbonus-input" value="${s.levelBonus||0}">
          </div>
          <div class="form-group">
            <label>${f&&s.defenseType!=="counter"&&s.defenseType!=="match_counter"?"防御レベル":"攻撃レベル"}</label>
            <input type="number" class="form-control skill-level-input" value="${s.atkLevel||40}">
          </div>
          <div class="form-group">
            <label>攻撃加重値</label>
            <select class="form-control skill-weight-select">
              ${C}
            </select>
          </div>
        </div>

        <div class="form-row-grid">
          <div class="form-group">
            <label>コイン数</label>
            <input type="number" min="1" max="10" class="form-control skill-coin-count-input" value="${s.coins||1}">
          </div>
          <div class="form-group">
            <label>破壊不能コイン数（末尾）</label>
            <input type="number" min="0" max="${s.coins||1}" class="form-control skill-unbreakable-count-input" value="${s.unbreakableCoins||0}">
          </div>
        </div>

        <div class="form-group">
          <label>特殊タグ</label>
          <div style="display: flex; gap: 16px; margin-bottom: 8px; flex-wrap: wrap;">
            <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
              <input type="checkbox" class="skill-tag-match" ${s.tagMatchImpossible?"checked":""}> マッチ不可
            </label>
            <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
              <input type="checkbox" class="skill-tag-distinguish" ${s.tagTargetIndistinguishable?"checked":""}> 敵味方識別不可
            </label>
            <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
              <input type="checkbox" class="skill-tag-target" ${s.tagTargetImmutable?"checked":""}> 対象変更不可
            </label>
          </div>
          <input type="text" class="form-control skill-specialtags-text" placeholder="その他のタグを入力（カンマ区切り、例: ダメージ量増加, 充電）" value="${s.specialTagsText||""}">
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
            <textarea class="form-control skill-effect-textarea" rows="3" placeholder="スキル効果テキストを入力してください...">${s.effectText||""}</textarea>
          </div>
        </div>

        <div class="form-group">
          <label>フレーバーテキスト</label>
          <textarea class="form-control skill-flavor-textarea" rows="2" placeholder="世界観・設定のフレーバーテキストを入力（任意）">${s.flavorText||""}</textarea>
        </div>

        <!-- Coin Effects Textareas Container -->
        <div class="skill-coins-list">
          <label style="font-weight: 700; color: var(--gold-secondary); font-size: 0.85rem; display: block; margin-bottom: 8px;">各コインの効果</label>
          <div class="coin-effects-inputs">
            <!-- Dynamic coin textarea editors -->
          </div>
        </div>
      `,m(p,s),p.querySelector(".skill-name-input").addEventListener("input",b=>{s.name=b.target.value,p.querySelector("h4").textContent=b.target.value||"（名称未設定）",c()}),p.querySelector(".skill-sin-select").addEventListener("change",b=>{s.affinity=b.target.value,c()}),f&&p.querySelector(".skill-deftype-select").addEventListener("change",b=>{s.defenseType=b.target.value;const A=p.querySelector(".counter-atktype-container");s.defenseType==="counter"||s.defenseType==="match_counter"?A.style.display="block":A.style.display="none";const P=p.querySelector(".form-row-grid").children[3].querySelector("label");s.defenseType==="counter"||s.defenseType==="match_counter"?P.textContent="攻撃レベル":P.textContent="防御レベル",c()}),p.querySelectorAll(".skill-atktype-select").forEach(b=>{b.addEventListener("change",A=>{s.atkType=A.target.value,c()})}),p.querySelector(".skill-basepower-input").addEventListener("input",b=>{s.basePower=parseInt(b.target.value)||0,c()}),p.querySelector(".skill-coinpower-input").addEventListener("input",b=>{s.coinPower=parseInt(b.target.value)||0,c()}),p.querySelector(".skill-lvlbonus-input").addEventListener("input",b=>{s.levelBonus=parseInt(b.target.value)||0,c()}),p.querySelector(".skill-level-input").addEventListener("input",b=>{s.atkLevel=parseInt(b.target.value)||0,c()}),p.querySelector(".skill-weight-select").addEventListener("change",b=>{s.weight=parseInt(b.target.value)||1,c()});const $=p.querySelector(".skill-coin-count-input"),M=p.querySelector(".skill-unbreakable-count-input"),I=()=>{const b=Math.max(1,Math.min(10,parseInt($.value)||1)),A=Math.max(0,Math.min(b,parseInt(M.value)||0));for(s.coins=b,s.unbreakableCoins=A,s.coinEffects=s.coinEffects||[];s.coinEffects.length<b;)s.coinEffects.push({text:""});s.coinEffects.length>b&&(s.coinEffects=s.coinEffects.slice(0,b)),$.value=b,M.max=b,M.value=A,m(p,s),c()};$.addEventListener("change",I),M.addEventListener("change",I),p.querySelector(".skill-tag-match").addEventListener("change",b=>{s.tagMatchImpossible=b.target.checked,c()}),p.querySelector(".skill-tag-distinguish").addEventListener("change",b=>{s.tagTargetIndistinguishable=b.target.checked,c()}),p.querySelector(".skill-tag-target").addEventListener("change",b=>{s.tagTargetImmutable=b.target.checked,c()}),p.querySelector(".skill-specialtags-text").addEventListener("input",b=>{s.specialTagsText=b.target.value,c()});const z=p.querySelector(".skill-effect-textarea");z.addEventListener("input",b=>{s.effectText=b.target.value,c()}),O(z,p.querySelector(".textarea-wrapper"),l),p.querySelector(".skill-flavor-textarea").addEventListener("input",b=>{s.flavorText=b.target.value,c()}),p.querySelectorAll(".shortcut-btn").forEach(b=>{b.addEventListener("click",A=>{A.preventDefault();let P=b.getAttribute("data-tag");if(b.classList.contains("btn-custom-shortcut")){const N=prompt(`カスタム条件タグを入力してください:
(例: [的中時], [使用前])`);if(N)P=N.startsWith("[")&&N.endsWith("]")?N:`[${N}]`;else return}const B=z.selectionStart,ee=z.selectionEnd,Z=z.value;z.value=Z.substring(0,B)+P+Z.substring(ee),z.selectionStart=z.selectionEnd=B+P.length,s.effectText=z.value,z.focus(),z.dispatchEvent(new Event("input"))})}),p.querySelector(".btn-reorder-up").addEventListener("click",()=>{a>0&&(e.skills[o][a]=e.skills[o][a-1],e.skills[o][a-1]=s,r(o),c())}),p.querySelector(".btn-reorder-down").addEventListener("click",()=>{a<u.length-1&&(e.skills[o][a]=e.skills[o][a+1],e.skills[o][a+1]=s,r(o),c())}),p.querySelector(".btn-delete-skill").addEventListener("click",()=>{confirm("このスキルを削除しますか？")&&(e.skills[o].splice(a,1),r(o),c())}),v.appendChild(p)})},m=(o,v)=>{const u=o.querySelector(".coin-effects-inputs");if(!u)return;const s=parseInt(v.coins)||1,a=parseInt(v.unbreakableCoins)||0,p=["I","II","III","IV","V","VI","VII","VIII","IX","X"];u.innerHTML="";for(let g=0;g<s;g++){const C=g>=s-a,f=v.coinEffects&&v.coinEffects[g]?v.coinEffects[g].text:"",E=document.createElement("div");E.className="coin-effect-editor",E.innerHTML=`
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
          <span class="coin-num-badge" style="${C?"border-color: #ff5252; color: #ff5252;":""}">
            ${p[g]||g+1}
          </span>
          <span style="font-size: 0.8rem; font-weight: 700;">
            コイン ${g+1} 効果 ${C?'<strong style="color:#ff5252; margin-left:8px;">🔴破壊不能</strong>':""}
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
          <textarea class="form-control coin-desc-textarea" rows="2" placeholder="的中時の効果などを入力...">${f}</textarea>
        </div>
      `;const $=E.querySelector(".coin-desc-textarea");$.addEventListener("input",M=>{v.coinEffects=v.coinEffects||[],v.coinEffects[g]=v.coinEffects[g]||{text:""},v.coinEffects[g].text=M.target.value,c()}),O($,E.querySelector(".textarea-wrapper"),l),E.querySelectorAll(".coin-shortcut-btn").forEach(M=>{M.addEventListener("click",I=>{I.preventDefault();let z=M.getAttribute("data-tag");if(M.classList.contains("btn-custom-coin-shortcut")){const B=prompt("カスタム条件タグを入力してください:");if(B)z=B.startsWith("[")&&B.endsWith("]")?B:`[${B}]`;else return}const b=$.selectionStart,A=$.selectionEnd,P=$.value;$.value=P.substring(0,b)+z+P.substring(A),$.selectionStart=$.selectionEnd=b+z.length,v.coinEffects[g].text=$.value,$.focus(),$.dispatchEvent(new Event("input"))})}),u.appendChild(E)}},L=()=>{var p,g,C,f;const o=t.querySelector("#passives-editor-container");if(!o)return;o.innerHTML=`
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
        <input type="text" id="panic-name-input" class="form-control" value="${((p=e.panic)==null?void 0:p.name)||"パニック"}">
      </div>
      <div class="form-group">
        <label>パニック効果 (@入力でサジェスト)</label>
        <div class="textarea-wrapper" id="panic-text-wrapper">
          <textarea id="panic-text-input" class="form-control" rows="2" placeholder="パニック効果を入力...">${((g=e.panic)==null?void 0:g.text)||"1ターンの間行動しない"}</textarea>
        </div>
      </div>

      <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-top: 32px; margin-bottom: 16px;">
        <h3 style="color: var(--gold-primary); font-size: 1.1rem;">精神力増減条件 (@入力でサジェスト)</h3>
      </div>
      <div class="form-row-grid">
        <div class="form-group">
          <label>基本精神力増加条件</label>
          <div class="textarea-wrapper" id="sanity-inc-wrapper">
            <textarea id="sanity-inc-input" class="form-control" rows="4" placeholder="精神力増加条件を入力...">${((C=e.sanity)==null?void 0:C.increase)||""}</textarea>
          </div>
        </div>
        <div class="form-group">
          <label>基本精神力減少条件</label>
          <div class="textarea-wrapper" id="sanity-dec-wrapper">
            <textarea id="sanity-dec-input" class="form-control" rows="4" placeholder="精神力減少条件を入力...">${((f=e.sanity)==null?void 0:f.decrease)||""}</textarea>
          </div>
        </div>
      </div>
    `,x("passives","passives-list-editor"),x("supportPassives","supports-list-editor"),o.querySelector("#btn-add-passive").addEventListener("click",()=>{e.passives=e.passives||[],e.passives.push({name:"",type:"own",count:1,affinity:"sloth",text:"",flavorText:""}),x("passives","passives-list-editor"),c()}),o.querySelector("#btn-add-support").addEventListener("click",()=>{e.supportPassives=e.supportPassives||[],e.supportPassives.push({name:"",type:"resonance",count:1,affinity:"sloth",text:"",flavorText:""}),x("supportPassives","supports-list-editor"),c()});const v=o.querySelector("#panic-name-input"),u=o.querySelector("#panic-text-input");v.addEventListener("input",E=>{e.panic=e.panic||{},e.panic.name=E.target.value,c()}),u.addEventListener("input",E=>{e.panic=e.panic||{},e.panic.text=E.target.value,c()}),O(u,o.querySelector("#panic-text-wrapper"),l);const s=o.querySelector("#sanity-inc-input"),a=o.querySelector("#sanity-dec-input");s.addEventListener("input",E=>{e.sanity=e.sanity||{},e.sanity.increase=E.target.value,c()}),O(s,o.querySelector("#sanity-inc-wrapper"),l),a.addEventListener("input",E=>{e.sanity=e.sanity||{},e.sanity.decrease=E.target.value,c()}),O(a,o.querySelector("#sanity-dec-wrapper"),l)},x=(o,v)=>{const u=t.querySelector(`#${v}`);if(!u)return;const s=e[o]||[];if(s.length===0){u.innerHTML='<div style="text-align: center; color: var(--text-muted); border: 1px dashed var(--border-color); padding: 16px; border-radius: 4px; font-size: 0.85rem;">パッシブが追加されていません</div>';return}u.innerHTML="",s.forEach((a,p)=>{const g=document.createElement("div");g.className="skill-editor-card",g.style.padding="12px",g.style.marginBottom="12px";const C=W.map(I=>`<option value="${I.value}" ${a.affinity===I.value?"selected":""}>${I.label}</option>`).join("");g.innerHTML=`
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong style="color: var(--gold-secondary); font-size: 0.9rem;">パッシブ #${p+1}</strong>
          <button class="btn btn-danger btn-sm btn-delete-passive">削除</button>
        </div>
        <div class="form-row-grid">
          <div class="form-group">
            <label>パッシブ名</label>
            <input type="text" class="form-control passive-name-input" value="${a.name||""}">
          </div>
          <div class="form-group" style="min-width: 140px;">
            <label>発動条件</label>
            <div style="display: flex; gap: 4px;">
              <select class="form-control passive-type-select" style="flex: 1;">
                <option value="resonance" ${a.type==="resonance"?"selected":""}>共鳴</option>
                <option value="own" ${a.type==="own"?"selected":""}>保有</option>
                <option value="none" ${a.type==="none"?"selected":""}>なし</option>
              </select>
              <input type="number" min="1" class="form-control passive-count-input" style="width: 50px; display: ${a.type==="none"?"none":"block"};" value="${a.count||1}">
            </div>
          </div>
          <div class="form-group passive-affinity-container" style="display: ${a.type==="none"?"none":"block"};">
            <label>罪悪属性</label>
            <select class="form-control passive-affinity-select">
              ${C}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>効果テキスト (@入力でサジェスト)</label>
          <div class="textarea-wrapper">
            <textarea class="form-control passive-desc-textarea" rows="2" placeholder="パッシブ効果テキスト...">${a.text||""}</textarea>
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label>フレーバーテキスト</label>
          <textarea class="form-control passive-flavor-textarea" rows="1" placeholder="フレーバーテキストを入力（任意）">${a.flavorText||""}</textarea>
        </div>
      `,g.querySelector(".passive-name-input").addEventListener("input",I=>{a.name=I.target.value,c()});const f=g.querySelector(".passive-type-select"),E=g.querySelector(".passive-count-input"),$=g.querySelector(".passive-affinity-container");f.addEventListener("change",I=>{a.type=I.target.value,a.type==="none"?(E.style.display="none",$.style.display="none"):(E.style.display="block",$.style.display="block"),c()}),E.addEventListener("input",I=>{a.count=parseInt(I.target.value)||1,c()}),g.querySelector(".passive-affinity-select").addEventListener("change",I=>{a.affinity=I.target.value,c()});const M=g.querySelector(".passive-desc-textarea");M.addEventListener("input",I=>{a.text=I.target.value,c()}),O(M,g.querySelector(".textarea-wrapper"),l),g.querySelector(".passive-flavor-textarea").addEventListener("input",I=>{a.flavorText=I.target.value,c()}),g.querySelector(".btn-delete-passive").addEventListener("click",()=>{confirm("このパッシブを削除しますか？")&&(e[o].splice(p,1),x(o,v),c())}),u.appendChild(g)})};t.querySelector("#btn-back").addEventListener("click",i),t.querySelector("#btn-save-character").addEventListener("click",()=>{var C,f,E;const o=`${e.name||"limbus_identity"}.json`,v=new Set,u=$=>{if(!$)return;const M=$.match(/\[\[([^\]]+)\]\]/g);M&&M.forEach(I=>{const z=I.slice(2,-2);v.add(z)})};u((C=e.panic)==null?void 0:C.text),u((f=e.sanity)==null?void 0:f.increase),u((E=e.sanity)==null?void 0:E.decrease),Object.values(e.skills).flat().forEach($=>{u($.effectText),$.coinEffects&&$.coinEffects.forEach(M=>u(M.text))}),e.passives&&e.passives.forEach($=>u($.text)),e.supportPassives&&e.supportPassives.forEach($=>u($.text));const a=(JSON.parse(localStorage.getItem("limbus_dictionary"))||[]).filter($=>v.has($.name));e.dictionary=a;const p="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),g=document.createElement("a");g.setAttribute("href",p),g.setAttribute("download",o),document.body.appendChild(g),g.click(),g.remove()});function c(){e.updatedAt=new Date().toISOString(),d(e)}y(),k()}const V={slash:`
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M15,85 C35,60 60,35 85,15 C58,32 32,58 15,85 Z" fill="currentColor"/>
      <path d="M10,90 C45,85 75,55 90,10 C80,45 50,75 10,90 Z" fill="currentColor" opacity="0.8"/>
    </svg>
  `,pierce:`
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M10,48 h50 v-8 l25,10 l-25,10 v-8 h-50 z" fill="currentColor"/>
      <ellipse cx="45" cy="50" rx="8" ry="22" fill="none" stroke="currentColor" stroke-width="6" transform="rotate(-15 45 50)"/>
    </svg>
  `,strike:`
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M50,10 L58,33 L80,20 L68,43 L90,50 L68,57 L80,80 L58,67 L50,90 L42,67 L20,80 L32,57 L10,50 L32,43 L20,20 L42,33 Z" fill="currentColor"/>
    </svg>
  `,defense:`
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M20,15 L80,15 C80,15 80,55 50,85 C20,55 20,15 20,15 Z" fill="currentColor"/>
      <path d="M25,20 L75,20 L75,50 C75,68 50,80 50,80 C50,80 25,68 25,50 L25,20 Z" fill="#141211"/>
      <path d="M50,20 L50,80 M25,48 L75,48" stroke="currentColor" stroke-width="4"/>
    </svg>
  `,evade:`
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M50,20 C33.43,20 20,33.43 20,50 C20,66.57 33.43,80 50,80 C66.57,80 80,66.57 80,50 C80,42.5 77.2,35.6 72.6,30.4 L62.5,40.5 C65.5,43 67.5,46.8 67.5,50 C67.5,59.7 59.7,67.5 50,67.5 C40.3,67.5 32.5,59.7 32.5,50 C32.5,40.3 40.3,32.5 50,32.5 V42.5 L67.5,27.5 L50,12.5 V20 Z" fill="currentColor"/>
    </svg>
  `,counter:`
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M35,20 L65,20 C65,20 65,50 50,68 C35,50 35,20 35,20 Z" fill="currentColor" opacity="0.6"/>
      <path d="M25,75 L75,25 L80,30 L30,80 Z" fill="currentColor"/>
      <path d="M20,80 L30,70 M15,75 L25,65" stroke="currentColor" stroke-width="5"/>
    </svg>
  `,match_guard:`
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M20,15 L80,15 C80,15 80,55 50,85 C20,55 20,15 20,15 Z" fill="currentColor"/>
      <circle cx="72" cy="72" r="16" fill="#141211" stroke="currentColor" stroke-width="2"/>
      <path d="M72,64 L72,80 M64,72 L80,72" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `,match_counter:`
    <svg class="octagon-icon-svg" viewBox="0 0 100 100">
      <path d="M35,20 L65,20 C65,20 65,50 50,68 C35,50 35,20 35,20 Z" fill="currentColor" opacity="0.4"/>
      <path d="M25,75 L75,25 L80,30 L30,80 Z" fill="currentColor"/>
      <path d="M20,80 L30,70 M15,75 L25,65" stroke="currentColor" stroke-width="5"/>
      <path d="M35,20 L65,20 C65,20 65,50 50,68 C35,50 35,20 35,20 Z" fill="none" stroke="#ff9100" stroke-width="4" stroke-dasharray="4,4"/>
    </svg>
  `},K={wrath:`
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #ff5252;">
      <path d="M12,2C12,2 17,7.5 17,11.5c0,2.8-2.2,5-5,5s-5-2.2-5-5C7,7.5 12,2 12,2z M12,5.5c-1,1.5-2.5,3.5-2.5,6c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5C14.5,9 13,7 12,5.5z"/>
    </svg>
  `,lust:`
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #ff9100;">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `,sloth:`
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #ffd600;">
      <path d="M12.3 2a10 10 0 0 0-1.9 19.8 1 1 0 0 0 1.2-1.2 8 8 0 0 1 7.9-7.9 1 1 0 0 0 1.2-1.2A10 10 0 0 0 12.3 2z"/>
    </svg>
  `,gluttony:`
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #69f0ae;">
      <path d="M17 8C17 4 12 2 12 2S7 4 7 8c0 4 5 14 5 14s5-10 5-14z M12 5c1 1.5 2 3.5 2 5c0 2.5-2 4-2 4s-2-1.5-2-4c0-1.5 1-3.5 2-5z"/>
    </svg>
  `,gloom:`
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #00e5ff;">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  `,pride:`
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #448aff;">
      <path d="M2 4l3 14h14l3-14-6 5-4-7-4 7-6-5zM17 16H7v-2h10v2z"/>
    </svg>
  `,envy:`
    <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; fill: #e040fb;">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  `},X={hp:'<svg class="stat-icon" viewBox="0 0 24 24" fill="#ff5252"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',defense:'<svg class="stat-icon" viewBox="0 0 24 24" fill="#b0bec5"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>'},pe='<svg class="level-sword-icon" viewBox="0 0 24 24"><path d="M17.3 2.7l4 4-13.6 13.6-1.7.3.3-1.7L17.3 2.7M16 1.3l-2.6 2.6L17.5 8l2.6-2.6c.8-.8.8-2 0-2.8l-1.3-1.3c-.8-.8-2-.8-2.8 0zM3.9 15.7l1.4 1.4-2.8 2.8c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l2.8-2.8z"/></svg>';function ve(t,e){var L,x,c,o;if(!e){t.innerHTML='<div style="padding: 40px; text-align: center; color: var(--text-muted);">キャラクターが選択されていません</div>';return}const d=e.dictionary||[],i=e.image?`<div class="preview-character-image" style="background-image: url('${e.image}')"></div>`:'<div class="identity-card-image-placeholder">No Image Available</div>',n=e.keywords.map(v=>`<span class="preview-keyword-pill">${v}</span>`).join(""),l=e.staggers&&e.staggers.length>0?e.staggers.map(v=>{const u=e.stats.hp>0?Math.round(v/e.stats.hp*100):0;return`
          <div class="stagger-line">
            <span>混乱閾値</span>
            <span>${v} <strong class="stagger-percent">(${u}%)</strong></span>
          </div>
        `}).join(""):'<div style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 8px;">なし</div>',y=(v,u)=>{var f;const s={fatal:{text:"脆弱",class:"fatal"},weak:{text:"弱点",class:"weak"},normal:{text:"普通",class:"normal"},resist:{text:"耐性",class:"resist"},immune:{text:"無効",class:"immune"},custom:{text:`カスタム (${u})`,class:"normal"}};let a=v;v==="custom"&&(u>=2?a="fatal":u>=1.5?a="weak":u<=0?a="immune":u<=.5?a="resist":a="normal");const p=s[v]||s.normal,g=v==="custom"?`x${u}`:`x${{fatal:2,weak:1.5,normal:1,resist:.5,immune:0}[v]}`,C=((f=s[a])==null?void 0:f.class)||"normal";return{text:`${p.text} (${g})`,class:C}},h=y(e.resistances.slash,e.resistances.slashVal),S=y(e.resistances.pierce,e.resistances.pierceVal),q=y(e.resistances.strike,e.resistances.strikeVal),w=`
    <div class="preview-left">
      <div class="preview-character-image-box">
        ${i}
      </div>
      
      <div class="preview-basic-info">
        <div class="preview-name-title">
          <span>${e.name||"（名称未設定）"}</span>
          <span class="sinner-icon-rarity">★★★</span>
        </div>
        <div class="preview-team-title">${e.team||"所属・チーム未設定"}</div>
        
        <div class="preview-grid-stats">
          <div class="stat-item">
            ${X.hp}
            <span class="stat-label">最大HP</span>
            <span class="stat-value">${e.stats.hp}</span>
          </div>
          <div class="stat-item">
            <svg class="stat-icon" viewBox="0 0 24 24" fill="#ffd600" style="transform: rotate(45deg);"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span class="stat-label">速度</span>
            <span class="stat-value">${e.stats.speedMin}-${e.stats.speedMax}</span>
          </div>
          <div class="stat-item">
            ${X.defense}
            <span class="stat-label">防御補正</span>
            <span class="stat-value">${e.stats.defCorrection>=0?"+":""}${e.stats.defCorrection}</span>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">耐性情報</div>
        <div class="preview-resistances">
          <div class="resist-card">
            ${V.slash}
            <span class="resist-label">斬撃</span>
            <span class="resist-value ${h.class}">${h.text}</span>
          </div>
          <div class="resist-card">
            ${V.pierce}
            <span class="resist-label">貫通</span>
            <span class="resist-value ${S.class}">${S.text}</span>
          </div>
          <div class="resist-card">
            ${V.strike}
            <span class="resist-label">打撃</span>
            <span class="resist-value ${q.class}">${q.text}</span>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">混乱区間</div>
        <div class="preview-stagger-bar">
          ${l}
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">特性キーワード</div>
        <div class="preview-keywords">
          ${n||'<div style="color: var(--text-muted); font-size: 0.85rem;">なし</div>'}
        </div>
      </div>

      <div class="preview-metadata">
        <div class="meta-box">
          <div style="font-size: 0.7rem; text-transform: uppercase;">Season</div>
          <div class="meta-val">${e.season||"未設定"}</div>
        </div>
        <div class="meta-box">
          <div style="font-size: 0.7rem; text-transform: uppercase;">Release Date</div>
          <div class="meta-val">${e.releaseDate||"未設定"}</div>
        </div>
      </div>
    </div>
  `,k=`
    <div class="preview-right">
      <div class="tabs-header">
        <button class="tab-link active" data-target="preview-tab-s1">スキル1</button>
        <button class="tab-link" data-target="preview-tab-s2">スキル2</button>
        <button class="tab-link" data-target="preview-tab-s3">スキル3</button>
        <button class="tab-link" data-target="preview-tab-def">守備</button>
      </div>

      <div class="tab-content active" id="preview-tab-s1">
        <div class="preview-skills-container">
          ${J(e.skills.skill1,d)}
        </div>
      </div>
      
      <div class="tab-content" id="preview-tab-s2">
        <div class="preview-skills-container">
          ${J(e.skills.skill2,d)}
        </div>
      </div>

      <div class="tab-content" id="preview-tab-s3">
        <div class="preview-skills-container">
          ${J(e.skills.skill3,d)}
        </div>
      </div>

      <div class="tab-content" id="preview-tab-def">
        <div class="preview-skills-container">
          ${J(e.skills.defense,d,!0)}
        </div>
      </div>

      <!-- Passives Section -->
      <div class="preview-section" style="margin-top: 32px;">
        <div class="preview-section-title">バトルパッシブ</div>
        <div>
          ${G(e.passives)}
        </div>
      </div>

      <!-- Support Passives Section -->
      <div class="preview-section">
        <div class="preview-section-title">サポートパッシブ</div>
        <div>
          ${G(e.supportPassives)}
        </div>
      </div>

      <!-- Panic Section -->
      <div class="preview-section">
        <div class="preview-section-title">パニック情報</div>
        <div class="panic-preview-box">
          <div class="panic-icon-container">
            <svg viewBox="0 0 24 24" style="width: 32px; height: 32px; fill: var(--danger-color);"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </div>
          <div class="panic-info">
            <h4 style="color: var(--danger-color); font-size: 1.05rem; margin-bottom: 4px;">${((L=e.panic)==null?void 0:L.name)||"パニック"}</h4>
            <div class="passive-desc">${_(((x=e.panic)==null?void 0:x.text)||"1ターンの間行動しない",d)}</div>
          </div>
        </div>
      </div>

      <!-- Sanity Section -->
      <div class="preview-section">
        <div class="preview-section-title">精神力増減条件</div>
        <div class="sanity-condition-container">
          <div class="sanity-cond-box">
            <div class="sanity-cond-title">精神力増加条件</div>
            <div class="sanity-cond-list">${_(((c=e.sanity)==null?void 0:c.increase)||"なし",d)}</div>
          </div>
          <div class="sanity-cond-box">
            <div class="sanity-cond-title">精神力減少条件</div>
            <div class="sanity-cond-list">${_(((o=e.sanity)==null?void 0:o.decrease)||"なし",d)}</div>
          </div>
        </div>
      </div>
    </div>
  `;t.innerHTML=`
    <div class="preview-layout">
      ${w}
      ${k}
    </div>
  `;const r=t.querySelectorAll(".tab-link"),m=t.querySelectorAll(".tab-content");r.forEach(v=>{v.addEventListener("click",()=>{const u=v.getAttribute("data-target");r.forEach(s=>s.classList.remove("active")),m.forEach(s=>s.classList.remove("active")),v.classList.add("active"),t.querySelector(`#${u}`).classList.add("active")})}),ae(t)}function J(t,e,d=!1){return!t||t.length===0?'<div style="text-align: center; color: var(--text-muted); padding: 24px;">登録されているスキルはありません</div>':t.map((i,n)=>{const l=`var(--sin-${i.affinity||"sloth"})`;let y=i.atkType||"slash";if(d){const a=i.defenseType||"defense";a==="defense"?y="defense":a==="evade"?y="evade":a==="match_guard"?y="match_guard":a==="counter"?y="counter":a==="match_counter"&&(y="match_counter")}const h=V[y]||V.slash,S=parseInt(i.coins)||1,q=parseInt(i.unbreakableCoins)||0;let w="";for(let a=1;a<=S;a++){const p=a>S-q;w+=`<div class="coin-token ${p?"unbreakable":""}"></div>`}const k=parseInt(i.atkLevel)||0,r=parseInt(i.weight)||1;let m="";for(let a=1;a<=10;a++)m+=`<div class="weight-sq ${a<=r?"":"dim"}"></div>`;let L="";const x=[];i.tagMatchImpossible&&x.push("【マッチ不可】"),i.tagTargetIndistinguishable&&x.push("【敵味方識別不可】"),i.tagTargetImmutable&&x.push("【対象変更不可】"),i.specialTagsText&&i.specialTagsText.split(/[,，\n]/).forEach(a=>{const p=a.trim();p&&x.push(`【${p}】`)}),x.length>0&&(L=`<div class="special-tags-list">${x.map(a=>`<span class="special-tag">${a}</span>`).join("")}</div>`);let c="";if(i.coinEffects&&i.coinEffects.length>0){const a=["I","II","III","IV","V","VI","VII","VIII","IX","X"];c=`
        <div class="coin-effects-preview-container">
          ${i.coinEffects.map((p,g)=>{if(!p||!p.text)return"";const C=g+1>S-q;let f=p.text;return C&&(f=`🔴破壊不能コイン
${f}`),`
              <div class="coin-effect-row">
                <div class="coin-num-badge" style="${C?"border-color: #ff5252; color: #ff5252;":""}">
                  ${a[g]||g+1}
                </div>
                <div class="coin-effect-text">
                  ${_(f,e)}
                </div>
              </div>
            `}).join("")}
        </div>
      `}const o=d&&(i.defenseType==="counter"||i.defenseType==="match_counter"),v=d&&!o?"防御レベル":"攻撃レベル",u=d&&!o?'<svg class="level-sword-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>':pe;let s="";return d&&(s=`<div class="resonance-badge" style="background-color: rgba(255,255,255,0.05); color: var(--text-secondary); border-color: var(--border-color); margin-bottom: 6px;">${{defense:"防御",evade:"回避",match_guard:"マッチ可能ガード",counter:"反撃",match_counter:"マッチ可能反撃"}[i.defenseType]||"守備"}</div>`),`
      <div class="skill-card-preview" style="border-top: 3px solid ${l};">
        <div class="skill-card-preview-header">
          <!-- Octagon & Base Power -->
          <div class="skill-card-left-badge-group">
            <span class="base-power-text">${i.basePower||"0"}</span>
            <div class="octagon-badge-container">
              <div class="octagon-outer" style="background-color: ${l};">
                <div class="octagon-inner">
                  ${h}
                </div>
                <!-- Small Sin hexagon badge -->
                <div class="sin-hexagon-badge" style="background-color: ${l};">
                  <div class="sin-hexagon-inner">
                    <span class="sin-mini-icon">${K[i.affinity||"sloth"]}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="level-bonus-flag" style="background-color: ${l};">
              +${i.levelBonus||"0"}
            </div>
          </div>
          
          <!-- Banner & Coins -->
          <div class="skill-card-top-right">
            <div class="coins-row">
              ${w}
            </div>
            <div class="skill-name-banner" style="--accent-color: ${l};">
              ${i.name||"（名称未設定）"}
            </div>
          </div>
        </div>

        <!-- Meta info: Attack level, weight, etc. -->
        <div class="skill-stats-row">
          ${s}
          <div class="skill-level-indicator">
            ${u}
            <span>${v}</span>
            <span class="level-val">${k}</span>
          </div>
          
          <div class="weight-indicator">
            <span>加重値</span>
            <div class="weight-squares">
              ${m}
            </div>
          </div>
        </div>

        <!-- Special Action Tags -->
        ${L}

        <!-- Skill Main Body Effect -->
        ${i.effectText?`
          <div class="skill-card-body-text">
            ${_(i.effectText,e)}
          </div>
        `:""}

        <!-- Coin Effects Rows -->
        ${c}

        <!-- Flavor Text -->
        ${i.flavorText?`
          <div class="skill-flavor-text">
            ${i.flavorText}
          </div>
        `:""}
      </div>
    `}).join("")}function G(t){return!t||t.length===0?'<div style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;">登録されているパッシブはありません</div>':t.map(e=>{const d=e.count&&e.affinity,i=d?`resonance-badge ${e.affinity}`:"",n=e.type==="resonance"?"共鳴":e.type==="own"?"保有":"",l=d?`<span class="${i}">${K[e.affinity]} × ${e.count} ${n}</span>`:"";return`
      <div class="passive-item-preview">
        <div class="passive-name-row">
          <span class="passive-name">${e.name||"（名称未設定）"}</span>
          ${l}
        </div>
        <div class="passive-desc">${_(e.text||"",[])}</div>
        ${e.flavorText?`<div class="passive-flavor">${e.flavorText}</div>`:""}
      </div>
    `}).join("")}let T=[];const F={id:"sample-middle-sister",name:"蜘蛛の巣 中指の親方",prisoner:"良秀",team:"中指",image:null,season:"シーズン7",releaseDate:"2026-05-28",stats:{hp:285,speedMin:4,speedMax:7,defCorrection:5},resistances:{slash:"normal",slashVal:1,pierce:"fatal",pierceVal:2,strike:"resist",strikeVal:.5},staggers:[213,142,71],keywords:["指","長姉","蜘蛛の巣","中指"],skills:{skill1:[{id:"s1-1",name:"怨念スタンピング",levelBonus:3,affinity:"envy",atkType:"slash",coins:4,unbreakableCoins:1,basePower:4,coinPower:3,atkLevel:64,weight:1,effectText:`対象の[[火傷]]と[[出血]]の合計4につき、最終威力 +1 (最大3)
[[嫉妬完全共鳴]]の数が6以上なら、コイン威力 +1
[使用前] 自分の剣が📐[[レーヴァテイン]]状態なら、「即決処刑」として発動
[使用時] (最も高い共鳴数)だけ、このスキルの攻撃レベルが増加 (最大6)
[使用時] 自分の[[中指 - 怨恨の刺青 [長姉]]]1につき、最終威力 +1 (最大3)
[使用時] 自分の[[中指 - 怨恨の刺青 [長姉]]]の数だけ、3コイン目から[[破壊不能コイン]]に変更される
[使用時] 自分の剣が📐1段階 封印解除または📐2段階 封印解除状態なら、このスキルのコイン的中時にスキルで付与する[[出血]]の基本値と同量の[[火傷]]を付与
[攻撃後] 自分の[[中指 - 怨恨]]を全て消耗
[攻撃後] このスキルを反撃スキルで発動したなら、次のターンに[[打撃ダメージ量増加]]1を得る (1ターンにつき1回)`,flavorText:"中指の仕返しは必ず成される。",coinEffects:[{text:"[的中時] [[出血]]3を付与"},{text:"[的中時] [[出血]]回数が1増加"},{text:"[的中時] [[出血]]2を付与"},{text:"[的中時] [[出血]]回数が1増加"}],tagMatchImpossible:!1,tagTargetIndistinguishable:!1,tagTargetImmutable:!1}],skill2:[],skill3:[],defense:[]},passives:[{name:"血と火の匂い",type:"none",count:0,affinity:"sloth",text:`この人格は[[火傷]]・[[出血]]を付与する人格として扱われる。
自分の剣が📐[[1段階 封印解除]]、📐[[2段階 封印解除]]状態なら、[[出血]]を付与するスキルがこの効果によって[[火傷]]と[[出血]]を付与するスキルとして扱われる。`}],supportPassives:[{name:"誰が家族に手を出したかった",type:"resonance",count:4,affinity:"sloth",text:`戦闘開始時、反撃を装備した味方1名に[[ダメージ量増加]]1、[[保護]]1を付与（戦闘ごとに最大2回発動可能、マッチ可能反撃を除く）
効果を受ける味方が中指所属なら、代わりに[[ダメージ量増加]]2、[[保護]]2を付与`}],panic:{name:"パニック",text:"1ターンの間行動しない",image:null},sanity:{increase:`・マッチ勝利時、マッチ回数に比例して増加（増加量：基本値10、2マッチ目から1マッチにつき20%ずつ増加）
・敵討伐時、倒した敵のレベルが自分のレベル以上の場合、10増加
・味方が倒した敵のレベルが自分のレベル以上の場合、5増加`,decrease:"・味方死亡時、死亡した味方のレベルが自分のレベル以上の場合、レベル差によって減少（減少量：基本値10、レベル差につき10ずつ増加）"},dictionary:[{id:"term-lev",name:"レーヴァテイン",type:"special",color:"#ffaa00",description:`良秀の固有装備状態。
攻撃時に追加効果を誘発する特殊な剣。`,icon:"preset-haste"},{id:"term-tattoo",name:"中指 - 怨恨の刺青 [長姉]",type:"buff",color:"#ba68c8",description:`中指の「長姉」の印。属性共鳴によって獲得する。
最終威力を増加させる効果を持つ。`,icon:"preset-protection"},{id:"term-grudge",name:"中指 - 怨恨",type:"resource",color:"#ab47bc",description:"攻撃を受けた際に増加する固有リソース。特定の仕返しスキルに全て消耗して威力を増加させる。",icon:"preset-protection"},{id:"term-unbreakable",name:"破壊不能コイン",type:"special",color:"#e53935",description:"マッチに敗北しても破壊されず、最後まで投げ続けられるコイン。",icon:"preset-protection"},{id:"term-res-envy",name:"嫉妬完全共鳴",type:"special",color:"#8e24aa",description:"嫉妬属性のスキルがチェーン上で連続して3つ以上繋がった状態。",icon:"default"},{id:"term-seal1",name:"1段階 封印解除",type:"buff",color:"#ffa726",description:"剣 of 封印の一部解除された状態。効果：与ダメージ量増加。",icon:"preset-dmg-up"},{id:"term-seal2",name:"2段階 封印解除",type:"buff",color:"#f57c00",description:"剣 of 封印の大部分解除された状態。効果：クリティカル確率増加および与ダメージ量増加。",icon:"preset-dmg-up"}],updatedAt:new Date().toISOString()};function ue(){Y();const t=localStorage.getItem("limbus_identities");try{t?(T=JSON.parse(t).filter(Boolean),T.length===0&&(T=[F],localStorage.setItem("limbus_identities",JSON.stringify(T)))):(T=[F],localStorage.setItem("limbus_identities",JSON.stringify(T)))}catch(e){console.error("Failed to parse identities from localStorage, resetting to default sample",e),T=[F],localStorage.setItem("limbus_identities",JSON.stringify(T))}he(),window.addEventListener("hashchange",j),j()}function j(){const t=window.location.hash||"#/",e=document.getElementById("app-content"),d=document.getElementById("header-nav");if(!e||!d)return;const i=document.getElementById("global-term-tooltip");if(i&&i.classList.remove("visible"),t==="#/"||t==="")d.innerHTML="",re(e,T,{onEdit:n=>window.location.hash=`#/edit/${n}`,onPreview:n=>window.location.hash=`#/preview/${n}`,onDuplicate:ge,onDelete:be,onCreateNew:me,onOpenDict:xe,onImportJSON:ye});else if(t.startsWith("#/edit/")){const n=t.replace("#/edit/",""),l=T.find(y=>y.id===n);if(!l){window.location.hash="#/";return}d.innerHTML=`
      <div class="mode-toggle-group">
        <button class="mode-btn active" onclick="location.hash='#/edit/${n}'">編集モード</button>
        <button class="mode-btn" onclick="location.hash='#/preview/${n}'">プレビュー</button>
      </div>
    `,de(e,l,fe,()=>window.location.hash="#/")}else if(t.startsWith("#/preview/")){const n=t.replace("#/preview/",""),l=T.find(h=>h.id===n);if(!l){window.location.hash="#/";return}d.innerHTML=`
      <div class="mode-toggle-group">
        <button class="mode-btn" onclick="location.hash='#/edit/${n}'">編集モード</button>
        <button class="mode-btn active" onclick="location.hash='#/preview/${n}'">プレビュー</button>
      </div>
      <button class="btn" onclick="location.hash='#/'" style="margin-left: 12px;">人格一覧へ</button>
    `,e.innerHTML='<div class="view-container" id="preview-wrapper"></div>';const y=e.querySelector("#preview-wrapper");ve(y,l)}}function fe(t){T=T.map(e=>e.id===t.id?t:e),localStorage.setItem("limbus_identities",JSON.stringify(T))}function me(){const t={id:"char-"+Date.now()+"-"+Math.random().toString(36).substr(2,5),name:"",prisoner:"イサン",team:"",image:null,season:"",releaseDate:new Date().toISOString().split("T")[0],stats:{hp:200,speedMin:1,speedMax:5,defCorrection:0},resistances:{slash:"normal",slashVal:1,pierce:"normal",pierceVal:1,strike:"normal",strikeVal:1},staggers:[120,60],keywords:[],skills:{skill1:[],skill2:[],skill3:[],defense:[]},passives:[],supportPassives:[],panic:{name:"パニック",text:"1ターンの間行動しない",image:null},sanity:{increase:`・マッチ勝利時、マッチ回数に比例して増加（増加量：基本値10、2マッチ目から1マッチにつき20%ずつ増加）
・敵討伐時、倒した敵のレベルが自分のレベル以上の場合、10増加
・味方が倒した敵のレベルが自分のレベル以上の場合、5増加`,decrease:"・味方死亡時、死亡した味方のレベルが自分のレベル以上の場合、レベル差によって減少（減少量：基本値10、レベル差につき10ずつ増加）"},dictionary:[],updatedAt:new Date().toISOString()};T.push(t),localStorage.setItem("limbus_identities",JSON.stringify(T)),window.location.hash=`#/edit/${t.id}`}function ge(t){const e=T.find(d=>d.id===t);if(e){const d=JSON.parse(JSON.stringify(e));d.id="char-"+Date.now()+"-"+Math.random().toString(36).substr(2,5),d.name=d.name?`${d.name} (コピー)`:"名称未設定 (コピー)",d.updatedAt=new Date().toISOString(),T.push(d),localStorage.setItem("limbus_identities",JSON.stringify(T)),j()}}function be(t){T=T.filter(e=>e.id!==t),localStorage.setItem("limbus_identities",JSON.stringify(T)),j()}async function ye(t){if(!t.id||!t.skills){alert("無効なキャラクターデータです。");return}t.id="char-"+Date.now()+"-"+Math.random().toString(36).substr(2,5),t.updatedAt=new Date().toISOString();const e=t.dictionary||[],d=H(),i=[];if(e.forEach(l=>{const y=d.find(h=>h.name===l.name);y&&(y.color!==l.color||y.type!==l.type||y.description!==l.description||y.icon!==l.icon)&&i.push({local:y,imported:l})}),i.length>0){for(const l of i){const y=await we(l);if(y==="overwrite"){const h=d.findIndex(S=>S.name===l.local.name);d[h]={...d[h],...l.imported}}else if(y==="rename"){const h=`${l.imported.name}(インポート)`;l.imported.name=h,l.imported.id="term-"+Date.now()+"-"+Math.random().toString(36).substr(2,9),d.push(l.imported);const S=`[[${l.local.name}]]`,q=`[[${h}]]`,w=k=>k?k.replaceAll(S,q):"";t.panic.text=w(t.panic.text),t.sanity.increase=w(t.sanity.increase),t.sanity.decrease=w(t.sanity.decrease),Object.values(t.skills).flat().forEach(k=>{k.effectText=w(k.effectText),k.coinEffects&&k.coinEffects.forEach(r=>r.text=w(r.text))}),t.passives&&t.passives.forEach(k=>k.text=w(k.text)),t.supportPassives&&t.supportPassives.forEach(k=>k.text=w(k.text))}}D(d)}const n=H();e.forEach(l=>{n.some(y=>y.name===l.name)||n.push(l)}),D(n),T.push(t),localStorage.setItem("limbus_identities",JSON.stringify(T)),alert(`キャラクター「${t.name||"名称未設定"}」をインポートしました。`),j()}function he(){document.body.insertAdjacentHTML("beforeend",`
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
  `)}function xe(){const t=document.getElementById("modal-global-dict"),e=document.getElementById("modal-global-dict-body");oe(e),t.classList.add("active")}function we(t){return new Promise(e=>{const d=document.getElementById("modal-conflict");d.querySelector("#conflict-term-name").textContent=`「${t.imported.name}」`,d.classList.add("active");const i=d.querySelectorAll(".conflict-option"),n=l=>{const h=l.currentTarget.getAttribute("data-action");i.forEach(S=>S.removeEventListener("click",n)),d.classList.remove("active"),e(h)};i.forEach(l=>{l.addEventListener("click",n)})})}document.getElementById("app").innerHTML=`
  <header class="app-header">
    <div class="logo-container">
      <span class="logo-text">人格ビルダー</span>
    </div>
    <nav id="header-nav">
      <!-- Routing links dynamically placed -->
    </nav>
  </header>
  <main id="app-content"></main>
`;ue();
