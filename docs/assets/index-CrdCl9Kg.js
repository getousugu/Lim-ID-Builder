(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const y of l.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const oe=[{id:"keyword-1-706b-50b7",name:"火傷",type:"minus",color:"rgb(227, 0, 0)",description:`ターン終了時、効果威力分の固定ダメージを受ける
ターン終了後、回数が1減少`,flavor:"",icon:"default"},{id:"keyword-2-51fa-8840",name:"出血",type:"minus",color:"rgb(227, 0, 0)",description:`攻撃スキルコインの判定時、効果威力分の固定ダメージを受ける
攻撃スキルコインの判定後、回数が1減少`,flavor:"",icon:"default"},{id:"keyword-3-7834-88c2",name:"破裂",type:"minus",color:"rgb(227, 0, 0)",description:`攻撃スキルを受けたとき、効果威力分の固定ダメージを受ける
被ダメージ後、回数が1減少`,flavor:"",icon:"default"},{id:"keyword-4-632f-52d5",name:"振動",type:"minus",color:"rgb(227, 0, 0)",description:`振動爆発スキルでダメージを受けるとき、効果威力分混乱区間が前進する
ターン終了後、回数が1減少`,flavor:"",icon:"default"},{id:"keyword-5-632f-5e45-5909-63db",name:"振幅変換",type:"neutral",color:"rgb(161, 106, 59)",description:`対象の振動と変換された振動を別タイプの振動に変換。
変換時、既存振動の威力・回数は維持される。`,flavor:"",icon:"default"},{id:"keyword-6-6c88-6f5c",name:"沈潜",type:"minus",color:"rgb(227, 0, 0)",description:`攻撃スキルで被ダメージ時、効果威力分の固定精神力ダメージを受ける(幻想体では憂鬱属性に換算)
被ダメージ後、回数が1減少`,flavor:"",icon:"default"},{id:"keyword-7-6c88-6f5c-6bba-5230",name:"沈潜殺到",type:"minus",color:"rgb(227, 0, 0)",description:`(沈潜回数×沈潜威力)分の精神力ダメージを与えると、沈潜を除去
対象の精神力が-45以下なら、越えた分の精神力ダメージを憂鬱属性ダメージとして与える。
精神力がない対象には全て憂鬱属性ダメージで適用)`,flavor:"",icon:"default"},{id:"keyword-8-547c-5438",name:"呼吸",type:"plus",color:"rgb(248, 194, 0)",description:`コイン判定時、[5 × 効果威力分]%の確率でクリティカルを与える
クリティカル発動時は与えるダメージが20%増加する
ターン終了時、あるいはクリティカル発動後に回数が1減少`,flavor:"",icon:"default"},{id:"keyword-9-5145-96fb",name:"充電",type:"plus",color:"rgb(248, 194, 0)",description:`消耗時に特定スキルの能力が上昇。回数を最大20まで獲得可能。
ターン終了時、回数が1減少。`,flavor:"",icon:"default"},{id:"keyword-10-9ebb-75fa",name:"麻痺",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、数値の枚数分のコイン威力が0に固定",flavor:"",icon:"default"},{id:"keyword-11-30af-30a4-30c3-30af",name:"クイック",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、速度が数値だけ増加",flavor:"",icon:"default"},{id:"keyword-12-675f-7e1b",name:"束縛",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、速度が数値だけ減少",flavor:"",icon:"default"},{id:"keyword-13-30c0-30e1-30fc-30b8-91cf-5897-52a0",name:"ダメージ量増加",type:"plus",color:"rgb(248, 194, 0)",description:`1ターンの間、スキルでの与ダメージが数値に比例して増加
(数値1につき10%増加。最大10)`,flavor:"",icon:"default"},{id:"keyword-14-30c0-30e1-30fc-30b8-91cf-6e1b-5c11",name:"ダメージ量減少",type:"minus",color:"rgb(227, 0, 0)",description:`1ターンの間、スキルでの与ダメージが数値に比例して減少
(数値1につき10%減少。最大10)`,flavor:"",icon:"default"},{id:"keyword-15-4fdd-8b77",name:"保護",type:"plus",color:"rgb(248, 194, 0)",description:`1ターンの間、スキルでの被ダメージが数値に比例して減少
(数値1につき10%減少。最大10)`,flavor:"",icon:"default"},{id:"keyword-16-8106-5f31",name:"脆弱",type:"minus",color:"rgb(227, 0, 0)",description:`1ターンの間、スキルでの被ダメージが数値に比例して増加
(数値1につき10%増加。最大10)`,flavor:"",icon:"default"},{id:"keyword-17-3007-3007-30c0-30e1-30fc-30b8-91cf-5897-52a0",name:"〇〇ダメージ量増加",type:"plus",color:"rgb(248, 194, 0)",description:`1ターンの間、〇〇属性スキルでの与ダメージが数値に比例して増加
(数値1につき10%増加。最大10)`,flavor:"",icon:"default"},{id:"keyword-18-3007-3007-30c0-30e1-30fc-30b8-91cf-6e1b-5c11",name:"〇〇ダメージ量減少",type:"minus",color:"rgb(227, 0, 0)",description:`1ターンの間、〇〇属性スキルでの与ダメージが数値に比例して減少
(数値1につき10%減少。最大10)`,flavor:"",icon:"default"},{id:"keyword-19-3007-3007-4fdd-8b77",name:"〇〇保護",type:"plus",color:"rgb(248, 194, 0)",description:`1ターンの間、〇〇属性スキルでの被ダメージが数値に比例して減少
(数値1につき10%増加。最大10)`,flavor:"",icon:"default"},{id:"keyword-20-3007-3007-8106-5f31",name:"〇〇脆弱",type:"minus",color:"rgb(227, 0, 0)",description:`1ターンの間、〇〇属性スキルでの被ダメージが数値に比例して増加
(数値1につき10%減少。最大10)`,flavor:"",icon:"default"},{id:"keyword-21-653b-6483-5a01-529b-5897-52a0",name:"攻撃威力増加",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、攻撃スキルの最終威力が数値だけ増加",flavor:"",icon:"default"},{id:"keyword-22-653b-6483-5a01-529b-6e1b-5c11",name:"攻撃威力減少",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、攻撃スキルの最終威力が数値だけ減少",flavor:"",icon:"default"},{id:"keyword-23-52a0-7b97-30b3-30a4-30f3-5f37-5316",name:"加算コイン強化",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、加算コインの威力が数値だけ増加",flavor:"",icon:"default"},{id:"keyword-24-52a0-7b97-30b3-30a4-30f3-5f31-5316",name:"加算コイン弱化",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、加算コインの威力が数値だけ減少",flavor:"",icon:"default"},{id:"keyword-25-6e1b-7b97-30b3-30a4-30f3-5f37-5316",name:"減算コイン強化",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、減算コインの威力が数値だけ減少",flavor:"",icon:"default"},{id:"keyword-26-6e1b-7b97-30b3-30a4-30f3-5f31-5316",name:"減算コイン弱化",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、減算コイン威力が数値だけ減少",flavor:"",icon:"default"},{id:"keyword-27-5b88-5099-5a01-529b-5897-52a0",name:"守備威力増加",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、守備スキルの最終威力が数値だけ増加",flavor:"",icon:"default"},{id:"keyword-28-5b88-5099-5a01-529b-6e1b-5c11",name:"守備威力減少",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、守備スキルの最終威力が数値だけ減少",flavor:"",icon:"default"},{id:"keyword-29-653b-6483-30ec-30d9-30eb-5897-52a0",name:"攻撃レベル増加",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、攻撃レベルが数値に比例して増加",flavor:"",icon:"default"},{id:"keyword-30-653b-6483-30ec-30d9-30eb-6e1b-5c11",name:"攻撃レベル減少",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、攻撃レベルが数値に比例して減少",flavor:"",icon:"default"},{id:"keyword-31-9632-5fa1-30ec-30d9-30eb-5897-52a0",name:"防御レベル増加",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、防御レベルが数値に比例して増加",flavor:"",icon:"default"},{id:"keyword-32-9632-5fa1-30ec-30d9-30eb-6e1b-5c11",name:"防御レベル減少",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、防御レベルが数値に比例して減少",flavor:"",icon:"default"},{id:"keyword-33-5a01-529b-5897-52a0",name:"威力増加",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、スキルの最終威力が数値に比例して増加",flavor:"",icon:"default"},{id:"keyword-34-5a01-529b-6e1b-5c11",name:"威力減少",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、スキルの最終威力が数値に比例して減少",flavor:"",icon:"default"},{id:"keyword-35-30de-30c3-30c1-5a01-529b-5897-52a0",name:"マッチ威力増加",type:"plus",color:"rgb(248, 194, 0)",description:"マッチ進行時、マッチ威力が数値だけ増加",flavor:"",icon:"default"},{id:"keyword-36-30de-30c3-30c1-5a01-529b-6e1b-5c11",name:"マッチ威力減少",type:"minus",color:"rgb(227, 0, 0)",description:"マッチ進行時、マッチ威力が数値だけ減少",flavor:"",icon:"default"},{id:"keyword-37-57fa-672c-5a01-529b-5897-52a0",name:"基本威力増加",type:"plus",color:"rgb(248, 194, 0)",description:"スキルの基本威力が数値だけ増加",flavor:"",icon:"default"},{id:"keyword-38-30de-30c3-30c1-53ef-80fd-30ac-30fc-30c9",name:"マッチ可能ガード",type:"neutral",color:"rgb(161, 106, 59)",description:`マッチ勝利時、対象へ最後のマッチ威力だけ混乱区間を前進させる。
マッチ敗北後に被ダメージ時、最終威力だけ攻撃者のスキル最終威力を減少させる。
マッチ敗北時、攻撃スキルとのレベル差・共鳴により最終威力が増加しない。`,flavor:"",icon:"default"},{id:"keyword-39-7834-58ca-4e0d-80fd-30b3-30a4-30f3",name:"破壊不能コイン",type:"neutral",color:"rgb(161, 106, 59)",description:`マッチ敗北時にコインが破壊されない。
攻撃スキルに該当コインがあれば、被ダメージ後に該当コインで攻撃する。
マッチ敗北時、破壊されていないコインの威力が1になる。`,flavor:"",icon:"default"},{id:"keyword-40-6458-51fa-30b3-30a4-30f3",name:"摘出コイン",type:"neutral",color:"rgb(161, 106, 59)",description:`マッチ進行時、破壊不能コインも破壊できる。
マッチ敗北時にコインが破壊されない。
攻撃スキルに該当コインがあれば、被ダメージ後に該当コインで攻撃する。
マッチ敗北時、破壊されていないコインの威力が1になる。`,flavor:"",icon:"default"},{id:"keyword-41-5e83-57df-4e71-5c04",name:"広域乱射",type:"neutral",color:"rgb(161, 106, 59)",description:`このスキルのコインをトスするとき、攻撃対象のうち1名をランダムに選んで攻撃
・1枚目のコインは必ずメインターゲットに的中する
・全ての的中効果、該当コインのダメージは上記効果にて選択された攻撃対象にのみ適用される`,flavor:"",icon:"default"},{id:"keyword-42-5f3e-4e38",name:"弾丸",type:"neutral",color:"rgb(161, 106, 59)",description:`特定のスキルで攻撃時弾丸を消耗
弾丸が無い場合、攻撃がキャンセルされる
マッチには影響しない`,flavor:"",icon:"default"},{id:"keyword-43-518d-88c5-586b",name:"再装填",type:"neutral",color:"rgb(161, 106, 59)",description:"保有する弾丸を全て捨てて、最大値だけ再取得する",flavor:"",icon:"default"},{id:"keyword-44-65bd-8853",name:"施術",type:"neutral",color:"rgb(161, 106, 59)",description:`この数値が5になると死亡
最大体力値が、数値に比例して20%ずつ減少
与ダメージ量が、数値に比例して20%ずつ増加
毎ターン、数値だけクイックを得る`,flavor:"",icon:"default"},{id:"keyword-45-91d8",name:"釘",type:"minus",color:"rgb(227, 0, 0)",description:`特殊出血
ターン開始時に出血1を付与、出血回数が数値だけ増加。
ターン終了時に数値が半減。(小数点切り捨て)`,flavor:"",icon:"default"},{id:"keyword-46-632f-5e45-7d61-7e3a",name:"振幅絡縺",type:"neutral",color:"rgb(161, 106, 59)",description:`絡縺させる振動効果と、対象の振動系効果を振動-重畳に合算。
絡縺時、振動の威力と回数が維持される。
振動-重畳に振幅変換発動時、変換させる振動効果が絡縺で適用される。
ターン終了時、振動に変換される`,flavor:"",icon:"default"},{id:"keyword-47-632f-52d5-2d-91cd-7573",name:"振動-重畳",type:"minus",color:"rgb(227, 0, 0)",description:`振幅絡縺を通じて得られる
振幅変換時、振動-重畳に該当特殊振動が追加される`,flavor:"",icon:"default"},{id:"keyword-48-632f-52d5-2d-5d29-58ca",name:"振動-崩壊",type:"minus",color:"rgb(227, 0, 0)",description:`対象の振動威力4につき、防御レベルが1減少
振動爆発スキルで被ダメージ時、効果威力だけ混乱区間が前進
ターン終了時に回数が1減少(振動威力および回数を増減させる効果を同様に受ける)`,flavor:"",icon:"default"},{id:"keyword-49-632f-52d5-2d-4e80-88c2",name:"振動-亀裂",type:"minus",color:"rgb(227, 0, 0)",description:`-混乱状態になったとき、自分の振動威力と回数の合計が20以上なら、混乱段階が1増加
-該当効果で最大混乱段階を超過することはない`,flavor:`振動爆発スキルで被ダメージ時、効果威力だけ混乱区間が前進
ターン終了時に回数が1減少(振動威力および回数を増減させる効果を同様に受ける)`,icon:"default"},{id:"keyword-50-632f-52d5-2d-53cd-97ff",name:"振動-反響",type:"minus",color:"rgb(227, 0, 0)",description:`振動爆発時、振動威力だけ怠惰ダメージを受ける
振動爆発スキルで被ダメージ時、効果威力だけ混乱区間が前進
ターン終了時に回数が1減少(振動威力および回数を増減させる効果を同様に受ける)`,flavor:"",icon:"default"},{id:"keyword-51-632f-52d5-2d-6c38-7d9a",name:"振動-永続",type:"minus",color:"rgb(227, 0, 0)",description:`スキル・コイン効果で振動爆発時、(振動威力)%の確率で自分の振動爆発が1回追加で発動(最大50%)
スキル・コイン効果で振動爆発時、(振動回数)%の確率で自分の振動爆発が1回追加で発動(最大50%)
振動爆発スキルで被ダメージ時、効果威力だけ混乱区間が前進
ターン終了時に回数が1減少(振動威力および回数を増減させる効果が同様に適用される)`,flavor:"",icon:"default"},{id:"keyword-52-632f-52d5-2d-9396",name:"振動-鎖",type:"minus",color:"rgb(227, 0, 0)",description:`振動威力10につき、マッチ威力が1減少(最大3)
振動爆発スキルで被ダメージ時、効果威力だけ混乱区間が前進
ターン終了時に回数が1減少
(振動威力および回数を増減させる効果を同様に受ける)`,flavor:"",icon:"default"},{id:"keyword-53-632f-52d5-2d-30cd-30b8-5dfb-304d",name:"振動-ネジ巻き",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最大値+2
自分がスキル・コイン効果で振動威力や振動回数を付与するとき、自分の振動回数を1消耗して付与量+1
振動爆発スキルで被ダメージ時、効果威力だけ混乱区間が前進
ターン終了時に回数が1減少
(振動威力および回数を増減させる効果を同様に受ける)`,flavor:"",icon:"default"},{id:"keyword-54-632f-52d5-2d-707c-71b1",name:"振動-灼熱",type:"minus",color:"rgb(227, 0, 0)",description:`振動爆発時、(振動威力と火傷威力の合計÷2)だけ憤怒ダメージを受けて火傷回数が1減少
振動爆発スキルで被ダメージ時、効果威力だけ混乱区間が前進
ターン終了時に回数が1減少(振動威力および回数を増減させる効果が同様に適用される)`,flavor:"",icon:"default"},{id:"keyword-55-632f-52d5-2d-5206-914d",name:"振動-分配",type:"plus",color:"rgb(248, 194, 0)",description:`ターン終了時(味方全体の振動回数の合計÷生存している味方の数)だけ、次のターンに攻撃レベル増加を得る(最大5)
振動爆発スキルで被ダメージ時、効果威力だけ混乱区間が前進
ターン終了時に回数が1減少
(振動威力および回数を増減させる効果を同様に受ける)`,flavor:"",icon:"default"},{id:"keyword-56-632f-52d5-2d-5927-91cf-51fa-8840",name:"振動-大量出血",type:"minus",color:"rgb(227, 0, 0)",description:`振動爆発時、(振動威力と出血威力の合計÷2)だけ色欲ダメージを受けて出血回数が1減少
振動爆発スキルで被ダメージ時、効果威力だけ混乱区間が前進
ターン終了時に回数が1減少
(振動威力および回数を増減させる効果を同様に受ける)`,flavor:"",icon:"default"},{id:"keyword-57-7cbe-795e-529b-56de-5fa9-52b9-7387",name:"精神力回復効率",type:"neutral",color:"rgb(161, 106, 59)",description:"精神力回復条件による精神力回復量",flavor:"",icon:"default"},{id:"keyword-58-7cbe-795e-529b-6e1b-5c11-52b9-7387",name:"精神力減少効率",type:"neutral",color:"rgb(161, 106, 59)",description:"精神力減少条件による精神力減少量",flavor:"",icon:"default"},{id:"keyword-59-7cbe-795e-529b-56de-5fa9-52b9-7387-6e1b-5c11",name:"精神力回復効率減少",type:"minus",color:"rgb(227, 0, 0)",description:"精神力回復効率がスタックだけ減少",flavor:"",icon:"default"},{id:"keyword-60-4f53-529b-56de-5fa9-5897-52a0",name:"体力回復増加",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間パッシブ、スキル、コインの効果で回復する体力+30%(最大5)",flavor:"",icon:"default"},{id:"keyword-61-4f53-529b-56de-5fa9-6e1b-5c11",name:"体力回復減少",type:"minus",color:"rgb(227, 0, 0)",description:"パッシブ、スキル、コインの効果で回復する体力が数値に比例して減少(最大5)",flavor:"",icon:"default"},{id:"keyword-62-65ac-6483-8010-6027-5f31-5316",name:"斬撃耐性弱化",type:"minus",color:"rgb(227, 0, 0)",description:`貫通耐性弱化
打撃耐性弱化
（罪悪属性7種の名称）弱化	〇〇耐性弱化	対象の〇〇耐性を(数値×0.1)増加`,flavor:"",icon:"default"},{id:"keyword-63-30af-30ea-30c6-30a3-30ab-30eb-30c0-30e1-30fc-30b",name:"クリティカルダメージ量増加",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、スキルでのクリティカルダメージ量が数値1につき10%増加",flavor:"",icon:"default"},{id:"keyword-64-7834-88c2-8106-5f31",name:"破裂脆弱",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、破裂効果で受けるダメージが数値につき1増加",flavor:"",icon:"default"},{id:"keyword-65-6c88-6f5c-8106-5f31",name:"沈潜脆弱",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、沈潜効果で受けるダメージが数値につき1増加",flavor:"",icon:"default"},{id:"keyword-66-6311-767a-5024",name:"挑発値",type:"neutral",color:"rgb(161, 106, 59)",description:"挑発値	集中戦闘にて挑発値が高いスロットであるほど、敵から攻撃される確率が増加する",flavor:"",icon:"default"},{id:"keyword-67-86c6-866b",name:"蛆虫",type:"minus",color:"rgb(227, 0, 0)",description:"ターン終了時に暴食ダメージを数値分を受け、出血回数が1増加して数値が1減少",flavor:"",icon:"default"},{id:"keyword-68-6ce8-8996",name:"注視",type:"minus",color:"rgb(227, 0, 0)",description:`1ターンの間、貫通、打撃属性スキルによる被ダメージが20%増加。
標的が付与された敵を倒したとき、倒した味方の精神力が10回復し、
該当する味方がN社の狂信者なら次のターンに狂信1を得る`,flavor:"",icon:"default"},{id:"keyword-69-72c2-4fe1",name:"狂信",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、釘の付与された対象を攻撃時、最終威力がこの数値だけ増加",flavor:"",icon:"default"},{id:"keyword-70-546a-3044",name:"呪い",type:"minus",color:"rgb(227, 0, 0)",description:"ターン終了時、次にターンにて攻撃威力減少1、守備威力減少1、攻撃レベル減少2、防御レベル減少2からランダムに1つの効果を獲得し、値が1減少",flavor:"",icon:"default"},{id:"keyword-71-6e07-304d",name:"渇き",type:"plus",color:"rgb(248, 194, 0)",description:"即席料理パッシブの回復量が数値に比例して増加、パッシブ発動時全て消耗",flavor:"",icon:"default"},{id:"keyword-72-5f31-70b9-5206-6790",name:"弱点分析",type:"minus",color:"rgb(227, 0, 0)",description:"1ターンの間、攻撃タイプ耐性の「抵抗」「普通」のうち1つをランダムに選択し弱化[+0.2]する",flavor:"",icon:"default"},{id:"keyword-73-45-2e-47-2e-4f-8cc7-6e90-7372-5f97-91cf-2b",name:"E.G.O資源獲得量+",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、スキル使用時に獲得するE.G.O資源数が数値分増加",flavor:"",icon:"default"},{id:"keyword-74-6843-8272-306e-30ea-30dc-30f3",name:"桃色のリボン",type:"minus",color:"rgb(227, 0, 0)",description:`1ターンの間、攻撃スキルのコインを使用する度に値が増加。
ターン終了時、数値分の束縛を得て効果消滅`,flavor:"",icon:"default"},{id:"keyword-75-6700-5f8c-306e-6539-9020",name:"最後の改造",type:"neutral",color:"rgb(161, 106, 59)",description:"毎ターン攻撃威力増加、守備威力増加、クイック3を得る。3ターン後に死亡する",flavor:"",icon:"default"},{id:"keyword-76-6b21-5143-306e-4e80-88c2",name:"次元の亀裂",type:"minus",color:"rgb(227, 0, 0)",description:"ターン終了時、破裂回数が数値分増加して効果消滅",flavor:"",icon:"default"},{id:"keyword-77-653e-51fa-96fb-6d41",name:"放出電流",type:"minus",color:"rgb(227, 0, 0)",description:`被ダメージ時、攻撃者の充電回数が1増加して数値が1減少
ダメージが憂鬱属性だった場合、追加で自分の破裂回数が1増加`,flavor:"",icon:"default"},{id:"keyword-78-4b-793e-30a2-30f3-30d7-30eb",name:"K社アンプル",type:"neutral",color:"rgb(161, 106, 59)",description:`ターン開始時、数値が4未満なら(数値 × 体力最大値の5%)分だけ体力を回復
数値が4以上なら死亡`,flavor:"",icon:"default"},{id:"keyword-79-304a-672d",name:"お札",type:"minus",color:"rgb(227, 0, 0)",description:`最大値：6
-攻撃的中時、対象の破裂回数を1消耗し(数値÷2)だけ破裂を付与(破裂回数を消耗した場合は最低1付与。小数点切り捨て)
-被ダメージ時に(数値÷2)だけ破裂を得て、数値が1減少(最低1獲得、小数点切り捨て)
-ターン終了時に数値が6以上ならお札を全て消耗し、数値だけ固定ダメージを受ける`,flavor:"",icon:"default"},{id:"keyword-80-6c7a-95d8-5ba3-5e03",name:"決闘宣布",type:"minus",color:"rgb(227, 0, 0)",description:`決闘宣布を付与したキャラクターが付与されたキャラクターとマッチ進行時にマッチ威力+1、
次のターンにクイック1を得る(1ターンにつき最大4回)
付与したキャラクターが他の対象にこの効果を付与すれば消滅。
他のキャラクターの決闘宣布が付与される場合は交代する`,flavor:"",icon:"default"},{id:"keyword-81-4e00-9a0e-6253-3061",name:"一騎打ち",type:"neutral",color:"rgb(161, 106, 59)",description:`ダメージを受けるスロットが、1つのユニットにだけターゲティングされる。
同時に、ダメージを受けるスロットのスキルとマッチをする攻撃スキルに対してのみ一騎打ちが成立する。
(ただし、スキル再使用の場合は適用されない。)`,flavor:"",icon:"default"},{id:"keyword-82-5145-96fb-529b-5834",name:"充電力場",type:"plus",color:"rgb(248, 194, 0)",description:`(充電力場の値 × 3)分のバリアを得る
(充電力場の値 × 3)分のバリアを失うと、充電力場が1減少
(効果が付与された対象がW社職員なら、×3ではなく×5として適用)
ターン終了時、充電回数を充電力場の数値分得て、充電力場と充電力場効果で得るバリアを失う`,flavor:"",icon:"default"},{id:"keyword-83-7834-88c2-4fdd-8b77",name:"破裂保護",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、破裂効果で受けるダメージが数値につき1減少",flavor:"",icon:"default"},{id:"keyword-84-6368-3066-308b",name:"捨てる",type:"neutral",color:"rgb(161, 106, 59)",description:"選択可能なスキルの内、守備・EGOスキルを除いた条件に合うスキルをパネルから除去する",flavor:"",icon:"default"},{id:"keyword-85-63a2-6c42-3057-305f-77e5-8b58",name:"探求した知識",type:"neutral",color:"rgb(161, 106, 59)",description:"この効果を保有したキャラクターが最後に捨てたスキルのランク（基本値:1）",flavor:"",icon:"default"},{id:"keyword-86-4e0d-5f53-53ce-76ca",name:"不当収益",type:"plus",color:"rgb(248, 194, 0)",description:"出血が付与された対象に表面的中時に獲得（最大4）",flavor:"「銃弾は高いんだって」パッシブの効果発動時、このバフを全て消耗して追加ダメージを与える",icon:"default"},{id:"keyword-87-4ed5-8fd4-3057-5bfe-8c61",name:"仕返し対象",type:"minus",color:"rgb(227, 0, 0)",description:"前のターンにて、味方にスキルで最も多くダメージを与えた対象に付与される。(最大1回付与可能)",flavor:"",icon:"default"},{id:"keyword-88-9ed2-708e",name:"黒炎",type:"minus",color:"rgb(227, 0, 0)",description:`特殊火傷
数値だけ対象の防御レベル減少
ターン終了時(数値×対象の火傷)だけ傲慢属性ダメージを与え、効果消滅`,flavor:"",icon:"default"},{id:"keyword-89-9b54-5f3e",name:"魔弾",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 7
特定スキルによって数値が変更される
[ロボトミーE.G.O::魔弾 ウーティス人格専用効果]
・数値が増加するにつれてスキル3の基本威力、コイン威力が増加`,flavor:"",icon:"default"},{id:"keyword-90-63f4-8b77-653b-6483",name:"援護攻撃",type:"neutral",color:"rgb(161, 106, 59)",description:`この効果を付与した対象の攻撃スキル終了時、付与対象が攻撃した敵を自分のスキル1で一方攻撃する。
援護攻撃時、該当キャラクターのスキルリストに影響を与えない。`,flavor:"",icon:"default"},{id:"keyword-91-52a0-71b1-3055-308c-305f-30ac-30b9-929b",name:"加熱されたガス銛",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、表面的中時に火傷1を付与",flavor:"",icon:"default"},{id:"keyword-92-904e-71b1-3055-308c-305f-30ac-30b9-929b",name:"過熱されたガス銛",type:"plus",color:"rgb(248, 194, 0)",description:"1ターンの間、的中時に火傷1を付与",flavor:"",icon:"default"},{id:"keyword-93-7d05-6885",name:"紅梅",type:"minus",color:"rgb(227, 0, 0)",description:`特殊出血
最大値 : 10
メインターゲットなら被ダメージ時のクリティカルダメージ発動確率+10%
クリティカル被ダメージ時に数値の半分*1だけ出血を得て、被クリティカルダメージ量が(数値×3%)増加
被ダメージ時に1減少`,flavor:"",icon:"default"},{id:"keyword-94-672c-56fd-5263-20-2d-20-52e2-6cd5-4f1d-6388",name:"本国剣 - 勢法伝授",type:"plus",color:"rgb(248, 194, 0)",description:"スキル1の最終威力が数値分増加",flavor:"",icon:"default"},{id:"keyword-95-672c-56fd-5263-20-2d-20-523a-6cd5-4f1d-6388",name:"本国剣 - 刺法伝授",type:"plus",color:"rgb(248, 194, 0)",description:"スキル2の最終威力が数値分増加",flavor:"",icon:"default"},{id:"keyword-96-672c-56fd-5263-8853",name:"本国剣術",type:"plus",color:"rgb(248, 194, 0)",description:`スキル使用時、呼吸が5以上なら、
スキル1,2のコイン威力+(3/コイン数,最小1)、クリティカルダメージ量+(30/コイン数)％
スキル使用時、呼吸が7以上ならスキル3のダメージ量+(30/コイン数)%、クリティカルダメージ量+(50/コイン数)%`,flavor:"",icon:"default"},{id:"keyword-97-8ffd-6155",name:"追慕",type:"minus",color:"rgb(227, 0, 0)",description:`邸宅の木霊	邸宅の木霊	スキル・コイン効果で沈潜威力や回数が付与されるとき、50%の確率で沈潜回数が1増加
精神力を持つ対象の場合はパニックタイプが「邸宅の木霊」に変化し、パニックになると次のターンに自分を除いた同じチームのランダムなキャラクター2名に邸宅の木霊を2付与。
精神力が無い対象の場合、表面が出る確率が-10%
ターン終了時に1減少
この効果は合算されず、更新される。
精神力を持つがパニックタイプが変更されない一部の敵には、精神力を持たない場合の効果が適用される。`,flavor:"",icon:"default"},{id:"keyword-98-738b-306e-524d-3078",name:"王の前へ",type:"plus",color:"rgb(248, 194, 0)",description:"攻撃加重値が1である自分の攻撃的中時、攻撃可能な敵のうち体力が最も低い敵2名へ、攻撃スキルの属性と同じ属性ダメージを与える。(ダメージ量の50%分)",flavor:"",icon:"default"},{id:"keyword-99-7e1b-3089-308c-3057-738b-306e-524d-3078",name:"縛られし王の前へ",type:"plus",color:"rgb(248, 194, 0)",description:"攻撃加重値が1である自分の攻撃的中時、攻撃可能な敵のうち体力が最も低い敵2名へ、攻撃スキルの属性と同じ属性ダメージを与える。(ダメージ量の100%分)",flavor:"",icon:"default"},{id:"keyword-100-30d0-30fb-76ee",name:"バ・目",type:"minus",color:"rgb(227, 0, 0)",description:`この効果を持つ対象へのエドガー家チーフバトラー良秀のスキルが強化。
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-101-4e0d-5b89-5b9a-306a-6fc0-60c5",name:"不安定な激情",type:"neutral",color:"rgb(161, 106, 59)",description:`攻撃的中時に火傷を1付与
メインターゲットに火傷があれば、最終威力+1
守備スキルを繋いで戦闘を開始すると、該当ターンの間は被ダメージ時に攻撃者へ火傷1を付与
ターン終了時、精神力が(変身維持ターン数×5)だけ減少。(最大精神力減少量:40)`,flavor:"",icon:"default"},{id:"keyword-102-6d99-306e-96eb",name:"涙の雫",type:"neutral",color:"rgb(161, 106, 59)",description:`この効果はバリア管理効果として扱われる
ターン終了時に1減少
涙の雫が適用される間、ターン終了時にバリアが切れない(ダメージや効果によって消える場合は除外)
涙の雫効果が適用されたバリアがダメージを受けて破壊される場合、攻撃した対象に沈潜威力と沈潜回数をランダムに付与(合計4)
バリア数値は重ねがけ可能であり、涙の雫効果が適用されている間はバリア数値がバリア適用対象の体力最大値60%分を超過しない`,flavor:"",icon:"default"},{id:"keyword-103-6642-9593-8cb8-4e0e",name:"時間貸与",type:"plus",color:"rgb(248, 194, 0)",description:`ターン終了時に回数が2以上なら、
次のターンにクイック、マッチ威力増加、脆弱を(時間貸与回数-1)だけ得る。
次のターンに得るクイックより束縛が多い場合、次のターン開始時に時間貸与を解除し、混乱状態になる
ターン終了時に回数が1なら、次のターンに束縛を(時間貸与威力-1)×2だけ得る
ターン終了時に威力が1増加、回数が1減少`,flavor:"",icon:"default"},{id:"keyword-104-6642-9593-7336-4e88",name:"時間猶予",type:"minus",color:"rgb(227, 0, 0)",description:`この効果がある間、全ダメージを受けずにストックする
戦闘終了時に回数が1なら、ストックされたダメージ量の(100+威力×15)%だけ怠惰ダメージを受けて威力だけ振動爆発
ターン終了時に威力1増加、回数1減少
時間猶予が適用された対象に時間猶予を追加で付与時、時間猶予の怠惰ダメージと振動爆発効果が即発動してバフ解除`,flavor:"",icon:"default"},{id:"keyword-105-77e5-8b58-935b-932c",name:"知識鍛錬",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 6
スキルを捨てるとき、自分の体力最大値の(知識鍛錬×1.5)%だけバリアを得る(1ターンにつき1回)
探求した知識が2以上の状態にてスキルを捨てる時、マッチ威力増加1を得る(1ターンにつき1回)
敵の攻撃スキルに当たってダメージを受ける度に1減少
混乱時に効果が消滅`,flavor:"",icon:"default"},{id:"keyword-106-8efd-8511-306e-8996-7dda",name:"軽蔑の視線",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 7
軽蔑の視線1につき、与ダメージ量+7%
ターン終了時に効果が消滅
ターン終了時に軽蔑の視線が7なら、効果が消滅する代わりに次のターンに視線の軽蔑に変換される。`,flavor:"",icon:"default"},{id:"keyword-107-8996-7dda-306e-8efd-8511",name:"視線の軽蔑",type:"minus",color:"rgb(227, 0, 0)",description:`保護7を得る
ダメージ量減少7を得る
保有してるスキルスロットのうち1つの挑発値が20増加
視線の軽蔑がある間、軽蔑の視線を得られない
ターン終了時に効果が消滅`,flavor:"",icon:"default"},{id:"keyword-108-8ca0-8377",name:"負荷",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 6
充電回数を消耗した攻撃スキルのダメージ量が数値につき2.5%増加(最大15%)
効果が付与された対象がW社職員なら、数値につき5%増加として適用(最大30%)
ターン終了時に消滅`,flavor:"",icon:"default"},{id:"keyword-109-5f15-304d-88c2-304b-308c-305f-8ffd-61b6",name:"引き裂かれた追憶",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 7
特定のスキルにて使用`,flavor:"",icon:"default"},{id:"keyword-110-5149-96fb",name:"光電",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 3
被ダメージ時、攻撃者の充電回数が数値だけ増加(スキルごとに1回)
攻撃者の充電回数が5以下なら、充電回数を3追加で得る
ターン終了時に効果が消滅`,flavor:"",icon:"default"},{id:"keyword-111-68fa",name:"棺",type:"plus",color:"rgb(248, 194, 0)",description:`最大10
ターン終了時、次のターンにて3につきダメージ量増加2を得る(最大6)
4につき速度の最小値が1増加(最大2)
5につきマッチ威力増加1を得る(最大2)`,flavor:"",icon:"default"},{id:"keyword-112-30c7-30e5-30e9-30cf-30f3",name:"デュラハン",type:"plus",color:"rgb(248, 194, 0)",description:`最大3
攻撃レベルが3増加
防御レベルが3減少
速度最小値・最大値が1増加
ターン終了時、次のターンに1得る(ただし、自分の精神力が-25以下なら除去)
ターン終了時にデュラハンがいれば、自分の精神力が(15-(棺÷2))だけ減少(最低10)`,flavor:"",icon:"default"},{id:"keyword-113-8feb-308a-6765-308b-7834-7dbb",name:"迫り来る破綻",type:"minus",color:"rgb(227, 0, 0)",description:`精神力のある対象なら、パニックタイプが「破綻」に変更
精神力のない対象の場合、表面の出る確率-10%
ターン終了時に1減少
この効果は合算されず、更新される
パニックタイプを変更できない一部の精神力を持つ敵には、精神力のない対象用の効果が適応`,flavor:"",icon:"default"},{id:"keyword-114-30ef-30a4-30eb-30c9-30cf-30f3-30c8",name:"ワイルドハント",type:"plus",color:"rgb(248, 194, 0)",description:`初めて付与されたターンの間は体力が1残り、ターン終了時に全体力の50%だけ体力を回復、精神力が0に初期化
攻撃により死亡時、最も少ないE.G.O資源を1得る
攻撃により死亡時、最後に自分を攻撃した対象に沈潜3を付与
復活したターン終了時に死亡`,flavor:"",icon:"default"},{id:"keyword-115-8d64-773c",name:"赤眼",type:"plus",color:"rgb(248, 194, 0)",description:`赤眼
赤眼	赤眼	基本スキルコイン効果の出血付与値+1
最大値 : 20
特殊充電(威力固定)
消耗時、特定スキルの能力が上昇
数値によってバフが強化
・1段階(1~7) : 赤眼
・2段階(8~15) : 赤眼 - 警戒
・3段階(16~20) : 赤眼 - 捕食
バフを強化すると基本スキルコイン効果の出血付与量が強化段階だけ増加(最大3)`,flavor:"",icon:"default"},{id:"keyword-116-61fa-6094",name:"懺悔",type:"plus",color:"rgb(248, 194, 0)",description:`懺悔
懺悔	懺悔	懺悔を得る基本スキルコイン的中時、精神力が2回復
最大値 : 20
特殊充電(威力固定)
ターン開始時、体力最大値の(懺悔)%だけバリアを得る
消耗時、特定スキルの能力が上昇
数値によってバフが強化
・1段階(1~7) : 懺悔
・2段階(8~15) : 懺悔 - 警戒
・3段階(16~20) : 懺悔 - 告解
バフを強化すると懺悔を得る基本スキルコイン的中時、(強化段階×2)だけ精神力回復`,flavor:"",icon:"default"},{id:"keyword-117-767d-304f-71c3-3084-3057-3061-307e-3063-305f-304",name:"白く燃やしちまったか",type:"minus",color:"rgb(227, 0, 0)",description:`赤眼と懺悔を保有できない
基本スキル効果で赤眼獲得時、自分と現体力の比率が最も低い味方の体力を、自分の体力最大値の(赤眼獲得量)%だけ回復(1ターンにつき2回)
基本スキル効果で懺悔獲得時、自分と現在の精神力が最も低い味方の精神力を(懺悔獲得量÷2)だけ回復(1ターンにつき2回)
ターン終了時に効果消滅`,flavor:"",icon:"default"},{id:"keyword-118-8776",name:"蝶",type:"minus",color:"rgb(227, 0, 0)",description:`特殊沈潜
基本値 : 0、最大値 : 15
この効果の威力を生きた蝶、回数を死んだ蝶とみなす。
被ダメージ時、攻撃者の精神力を(生きた蝶÷4)だけ回復(最低1。小数点切り捨て)
被ダメージ時に精神力が0未満なら、死んだ蝶1につき(沈潜威力÷5)だけ憂鬱ダメージを受ける。(最大憂鬱ダメージ値 : 30。小数点切り捨て。精神力が無い対象にはダメージを半減して適用)
ターン終了時にこの効果の死んだ蝶が0に初期化。この効果の生きた蝶だけ沈潜付与後、生きた蝶が死んだ蝶へ変換される。
この効果の付与値は外部効果で増やすことができない。沈潜付与値+の効果を受けた場合、追加付与値だけ蝶の代わりに沈潜が付与される。
生きた蝶と死んだ蝶が全て0になると効果が除去される。`,flavor:"",icon:"default"},{id:"keyword-119-751f-304d-305f-8776-30fb-6b7b-3093-3060-8776",name:"生きた蝶・死んだ蝶",type:"neutral",color:"rgb(161, 106, 59)",description:`特殊弾丸
威力+回数の最大値 : 20
特定スキル使用時に消耗。
消耗時、この効果の生きた蝶(威力)と死んだ蝶(回数)をランダムに消耗。
消耗時に数値が足りないなら、攻撃がキャンセルされる。`,flavor:"",icon:"default"},{id:"keyword-121-30c7-30ea-30d0-30ea-30fc-30ad-30e3-30ea-30a2-2d-",name:"デリバリーキャリア-ロージャ",type:"neutral",color:"rgb(161, 106, 59)",description:`基本値 : 0
ターン開始時に3得る
スタックは退却時に消滅せず保持される
10以上なら、速度最小・最大値が1増加
20以上なら、マッチ威力増加1、斬撃ダメージ量増加1を得る
30以上なら、
・スキル使用時、体力最大値の(スタック÷3)%だけ体力ダメージと(スタック÷3)だけ精神力ダメージを受ける
・ターン終了時、体力最大値の(スタック÷2)%だけ体力ダメージと(スタック÷2)だけ精神力ダメージを受ける(退却前に適用される)`,flavor:"",icon:"default"},{id:"keyword-122-30c7-30ea-30d0-30ea-30fc-30ad-30e3-30ea-30a2-2d-",name:"デリバリーキャリア-シンクレア",type:"neutral",color:"rgb(161, 106, 59)",description:`基本値 : 0
ターン開始時に3得る
スタックは退却時に消滅せず保持される
10以上なら、速度最小・最大値が1増加
20以上なら、マッチ威力増加1、打撃ダメージ量増加1を得る
30以上なら、
・スキル使用時、体力最大値の(スタック÷3)%だけ体力ダメージと(スタック÷3)だけ精神力ダメージを受ける
・ターン終了時、体力最大値の(スタック÷2)%だけ体力ダメージと(スタック÷2)だけ精神力ダメージを受ける(退却前に適用される)`,flavor:"",icon:"default"},{id:"keyword-123-6226-7565-7684-4f11-61a9-798f-7949-30e2-30fc-30c",name:"戦略的休憩福祉モード",type:"neutral",color:"rgb(161, 106, 59)",description:`ターン終了時に混乱状態を解除して戦闘から離脱(強制混乱を除く、死亡処理されない)
連続戦闘の場合、退却時に待機人員へ自分のスロット数を譲渡して後退され、待機人員リストの最後尾へ移動(次のターンに交代可能な待機人員がいなければ離脱。復帰時には退却順に復帰)
戦闘復帰時に自分のスロット数が1に初期化。
自分に付与された一部効果を除いた全ての効果が除去。
退却時の体力と精神力が維持される(精神力が0未満なら、0に初期化)`,flavor:"",icon:"default"},{id:"keyword-124-62db-8058-3055-308c-3056-308b-8005",name:"招聘されざる者",type:"minus",color:"rgb(227, 0, 0)",description:`最大2
死亡時に最後の攻撃者の精神力を3回復。この効果が、効果を保有しないランダムな味方に移る。
自分の沈潜1につき、被ダメージ量+0.5%(最大10%、集中戦闘の場合は部位ごとに別途判定)
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-125-9632-5fa1-614b-52e2",name:"防御態勢",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 2
この効果は合算されずに更新される
ターン終了時に1減少
この効果を得ると次のターンに下記の効果が適用
・速度が最低値に固定
・防御レベル増加5を得る
・(10÷自分のスロット数)だけ自分の各スロット挑発値が増加
・スキル指定時、速度に関係なく攻撃対象を自分に変更可能(集中戦闘専用)
・マッチ勝利時に振動爆発
・ダメージによって混乱状態にならない`,flavor:"",icon:"default"},{id:"keyword-126-96c6-4e2d-653b-6483",name:"集中攻撃",type:"minus",color:"rgb(227, 0, 0)",description:`<集中戦闘専用>
集中攻撃を付与したキャラクターが、前のターンに攻撃成功したスロットへスキル使用時、累計攻撃成功ターン数によって下記の効果を得る。
集中攻撃1スタック:マッチ威力+1
集中攻撃2スタック:基本威力+1
集中攻撃3スタック:基本威力+1,コイン威力+1
付与したキャラクターが1ターンの間、集中攻撃の付与されたスロットに攻撃を的中させることができなければ消滅
付与したキャラクターが他のスロットにこの効果を付与したら消滅
付与されたスロットに他のキャラクターの集中攻撃が付与されたなら入れ替わる
次のターン開始時、除去されたスロットに集中攻撃が付与されているなら、該当部位の全スロットに付与された集中攻撃を編成順に再配置`,flavor:"",icon:"default"},{id:"keyword-127-88c1-7e2b-5bfe-8c61",name:"裁縫対象",type:"minus",color:"rgb(227, 0, 0)",description:`最大値：1
出血1につき被ダメージ量+0.5%(最大10%)
ターン終了時、1減少`,flavor:"",icon:"default"},{id:"keyword-128-8840-67d3-3081-306e-92cf-306e-5203",name:"血染めの鋏の刃",type:"plus",color:"rgb(248, 194, 0)",description:`最大値：10
血染めの鋏の刃1段階
血染めの鋏の刃が10以上なら、血染めの鋏の刃Ⅱになる。
血染めの鋏の刃が20以上なら、血染めの鋏の刃Ⅲになる。
血染めの鋏の刃が消耗されて足りなくなると、前の段階になる
血染めの鋏の刃は1未満に減少しない。
血染めの鋏の刃Ⅱなら、数値に比例して*2攻撃レベル増加1、防御レベル減少*31を得る
血染めの鋏の刃Ⅲなら、数値に比例して*4攻撃レベル増加1を得る`,flavor:"",icon:"default"},{id:"keyword-129-8840-9910",name:"血餐",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値：999
その場所にて発生した出血ダメージ*5をストック
戦闘場所が変更されると初期化
この数値は全キャラクターで共有される
味方の中で同じターンに血餐を消耗する上位眷属がいれば、そのキャラクターが血餐を消耗するまで血餐を消耗することはできない`,flavor:"",icon:"default"},{id:"keyword-130-7d2f-7a4d-6d88-8017-8840-9910",name:"累積消耗血餐",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 999
今回の戦闘中に累計で消耗した血餐が表示される`,flavor:"",icon:"default"},{id:"keyword-131-6295-3052-7e04",name:"投げ縄",type:"minus",color:"rgb(227, 0, 0)",description:`最大値：3
ターン終了時、自分の現在の速度だけ破裂威力を得る(最大5),次のターンに束縛1を得る
ターン終了時に数値が1減少`,flavor:"",icon:"default"},{id:"keyword-132-8594-8587-306e-3068-3052",name:"薔薇のとげ",type:"minus",color:"rgb(227, 0, 0)",description:`威力の最大値:10
回数の最大値:4
出血ダメージを10受けるたび、威力が1増加。
被ダメージ時にスキル効果で出血、特殊出血を付与されるたびに出血2を得て、攻撃者に出血1を与える。(1ターンにつき最大5回)
この効果の威力が10なら、上記の効果発動時に追加で出血回数が1増加。
ターン終了時に回数が1減少
戦闘終了時に威力が10または回数1なら、バフが消滅して(威力×10)の色欲ダメージを受ける。
付与対象が死亡またはバフ消滅時は(威力×10)だけ血餐が増加、付与対象の全味方ユニットに(威力×2)の色欲ダメージを与える(最低1)`,flavor:"",icon:"default"},{id:"keyword-133-6e07-671b-3059-308b-8594-8587",name:"渇望する薔薇",type:"minus",color:"rgb(227, 0, 0)",description:`最大値:5
ターン終了時、自分の出血威力が10以上なら、自分の体力最大値の1%だけ色欲ダメージを受ける(最大30)
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-134-8840-306b-67d3-307e-3063-305f-624b",name:"血に染まった手",type:"plus",color:"rgb(248, 194, 0)",description:`血に染まった手
血に染まった手	血に染まった手	最大値：10
血に染まった手 1段階
血に染まった手が10以上なら、血に染まった手Ⅱになる。
血に染まった手が20以上なら、血に染まった手Ⅲになる。
血に染まった手が消耗されて足りなくなると、前の段階になる。
血に染まった手Ⅱなら、数値に比例して*6攻撃レベル増加1を得る
血に染まった手Ⅲなら、数値に比例して*7攻撃レベル増加1を得て、基本スキルが的中するたびに破裂1,出血1を追加で付与`,flavor:"",icon:"default"},{id:"keyword-135-78e8-308a-6e1b-3063-3066-3057-307e-3063-305f-5fc",name:"磨り減ってしまった心",type:"plus",color:"rgb(248, 194, 0)",description:`最大値：10
ターン終了時、数値が1増加
ターン開始時、数値3につき防御レベル増加1を得る
自分の体力が50%未満なら、数値3につき防御レベルが1増加
自分の現体力が40%未満なら、基本スキル的中時にダメージ量の(数値×5)%だけ体力を回復(最低1。小数点切り捨て。スキルごとに最大30回復)`,flavor:"",icon:"default"},{id:"keyword-136-54b2-304d-51fa-3059-68d8-20-49",name:"咲き出す棘 I",type:"plus",color:"rgb(248, 194, 0)",description:`咲き出す棘 II
咲き出す棘 III	咲き出す棘	最大値 : 10
咲き出す棘1段階
数値2につき防御レベルが1増加(最大5)
被ダメージ時に攻撃者へ出血1を付与してから数値が1減少
[ラ・マンチャランドの姫ロージャ専用効果]
数値が最大なら次の段階*8になる。
基本スキルコイン効果の出血・破裂威力付与量が(現段階-1)だけ増加
咲き出す棘が消耗されて足りなくなると前の段階に戻る`,flavor:"",icon:"default"},{id:"keyword-137-795d-796d-306e-71b1-6c17",name:"祝祭の熱気",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 10
ターン終了時に消滅
数値1につき、出血が付与された対象への与ダメージ量+1.5％
血餐を消耗するか得るスキルなら、代わりに与ダメージ量+3％`,flavor:"",icon:"default"},{id:"keyword-138-786c-8840",name:"硬血",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 10
硬血1段階
硬血が10以上なら、硬血Ⅱになる。
硬血が20以上なら、硬血Ⅲになる。
硬血が消耗されて足りなくなると、前の段階になる。
硬血は1未満に減少しない。
硬血Ⅱなら、数値に比例して*9攻撃レベル増加1を得て、速度の最小・最大値が1増加。
硬血Ⅲなら、数値に比例して*10攻撃レベル増加1、防御レベル増加1を得て、速度の最小・最大値が2増加。`,flavor:"",icon:"default"},{id:"keyword-139-63fa-3089-304e-3010-8840-9b3c-3011",name:"揺らぎ【血鬼】",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 50
このバフがある間、バリアで受ける出血ダメージが血餐になる。
付与されるとき、数値だけバリアを得る。
ターン終了時に除去される。`,flavor:"",icon:"default"},{id:"keyword-140-8cac-4efb-611f",name:"責任感",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 1
マッチ威力+1
与ダメージ量+20%
被ダメージ量+20%`,flavor:"",icon:"default"},{id:"keyword-141-5171-7528-7d2f-7a4d-6d88-8017-8840-9910",name:"共用累積消耗血餐",type:"neutral",color:"rgb(161, 106, 59)",description:"この戦闘の間累計で消耗した血餐",flavor:"",icon:"default"},{id:"keyword-142-30bf-30fc-30b2-30c3-30c8-6355-6349",name:"ターゲット捕捉",type:"neutral",color:"rgb(161, 106, 59)",description:`この効果を付与した対象の攻撃スキル終了時、付与対象が攻撃した敵をスキル2で一方攻撃する。
付与対象がこの効果で攻撃時、該当キャラクターの使用するスキルリストに影響を与えない。`,flavor:"",icon:"default"},{id:"keyword-143-5f8c-65b9-652f-63f4-914d-7f6e",name:"後方支援配置",type:"neutral",color:"rgb(161, 106, 59)",description:`ターン終了時に混乱状態を解除して戦闘から離脱(強制混乱を除く、死亡処理されない)
連続戦闘の場合、退却時に待機人員へ自分のスロット数を譲渡して後退され、待機人員リストの最後尾へ移動(次のターンに交代可能な待機人員がいなければ離脱。復帰時には退却順に復帰)
戦闘復帰時に自分のスロット数が1に初期化。
自分に付与された一部効果を除いた全ての効果が除去。
退却時の体力と精神力が維持される(精神力が0未満なら、0に初期化)`,flavor:"",icon:"default"},{id:"keyword-144-5f3e-4e38-20-2d-20-30ed-30b8-30c3-30af-30a2-30c8",name:"弾丸 - ロジックアトリエ",type:"neutral",color:"rgb(161, 106, 59)",description:`特殊弾丸
ロジックアトリエの工房製特殊弾
この弾丸は外部の効果で獲得したり値が増加しない`,flavor:"",icon:"default"},{id:"keyword-145-96c6-4e2d-3010-72d9-6483-3011",name:"集中【狙撃】",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 4
ターン終了時に数値が1増加`,flavor:"",icon:"default"},{id:"keyword-146-8fd1-63a5-652f-63f4",name:"近接支援",type:"neutral",color:"rgb(161, 106, 59)",description:`この効果を付与した対象がスキル終了時、該当する味方の攻撃した敵を「近接支援」スキルで一方攻撃する。
近接支援時、該当キャラクターの使用するスキルリストに影響を与えない。`,flavor:"",icon:"default"},{id:"keyword-147-31-3064-76ee-306e-9b54-5f3e",name:"1つ目の魔弾",type:"plus",color:"rgb(248, 194, 0)",description:`与ダメージ量+20%
対象の混乱区間をダメージ量だけ前進(最大30)`,flavor:"",icon:"default"},{id:"keyword-148-32-3064-76ee-306e-9b54-5f3e",name:"2つ目の魔弾",type:"plus",color:"rgb(248, 194, 0)",description:`与ダメージ量+10%
メインターゲットを除いた対象へダメージを与える(対象数 : 最大4名)、メインターゲットの被ダメージは0になる
的中時に麻痺3を付与`,flavor:"",icon:"default"},{id:"keyword-149-33-3064-76ee-306e-9b54-5f3e",name:"3つ目の魔弾",type:"plus",color:"rgb(248, 194, 0)",description:`与ダメージ量+20%
攻撃開始前に加重値が2増加
的中時に対象へ攻撃威力減少2、火傷10を付与`,flavor:"",icon:"default"},{id:"keyword-150-34-3064-76ee-306e-9b54-5f3e",name:"4つ目の魔弾",type:"plus",color:"rgb(248, 194, 0)",description:`与ダメージ量+30%
攻撃開始前に加重値が3増加
的中時に対象の混乱区間をダメージ量だけ前進(最大20)、次のターンに脆弱3を付与`,flavor:"",icon:"default"},{id:"keyword-151-35-3064-76ee-306e-9b54-5f3e",name:"5つ目の魔弾",type:"plus",color:"rgb(248, 194, 0)",description:`与ダメージ量+30%
攻撃開始前に加重値が4増加
的中時に対象へ火傷10を付与。次のターンに攻撃レベル減少4、防御レベル減少4を付与`,flavor:"",icon:"default"},{id:"keyword-152-36-3064-76ee-306e-9b54-5f3e",name:"6つ目の魔弾",type:"plus",color:"rgb(248, 194, 0)",description:`攻撃開始前に加重値が6増加
対象の混乱区間をダメージ量だけ前進(最大30)
メインターゲットの火傷7につき、コインを再使用する(最大2回再使用)
加算コインスキルの基本威力を16減少
減算コインの基本威力を22減少
加算コインの威力を8減少
減算コインの威力を12減少`,flavor:"",icon:"default"},{id:"keyword-153-37-3064-76ee-306e-9b54-5f3e",name:"7つ目の魔弾",type:"plus",color:"rgb(248, 194, 0)",description:`与ダメージ量+200%
対象の失った体力1%ごとにダメージ量+2.5%(最大200%)
攻撃開始前、対象や自分の貫通属性耐性が2.0未満なら、この攻撃に限って脆弱(×2.0)に変更
攻撃終了時に死亡する`,flavor:"",icon:"default"},{id:"keyword-154-597d-990c-5996-7cbe",name:"好餌妖精",type:"minus",color:"rgb(227, 0, 0)",description:`最大値5
ターン開始時、操作パネルの最左方のスロットが挑発値10を得る
自分が受けるダメージ量+50%
被ダメージ時、対象へ破裂1を付与(対象のスキルごとに最大3回)
・自分の現体力が最大値の50%未満なら、破裂1を追加で付与
・対象の破裂威力が15以上なら、この効果で破裂を付与しない
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-155-6df1-3044-5438-6c17",name:"深い吸気",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 20
クリティカル発動時、呼吸威力が15、呼吸回数が5以上なら、呼吸威力を(保有している呼吸威力÷5)だけ消耗してクリティカルダメージ量が(消耗した値×4)%だけ増加して数値1消耗`,flavor:"",icon:"default"},{id:"keyword-156-30cd-30d6-30e9-30a4-30b6-30fc-3b2",name:"ネブライザーβ",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 5
この効果はこの戦闘の間、保たれる
傲慢完全共鳴を発動したなら戦闘開始時、自分とランダムな味方(スタック)名が呼吸3を得て呼吸回数が3増加
(呼吸または呼吸回数を自ら使用するか獲得する味方のうち、呼吸威力が低い対象へ優先して適用)`,flavor:"",icon:"default"},{id:"keyword-157-81e8-6226",name:"臨戦",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 1
自分のスキル・コイン効果で出血威力・回数を付与するとき、付与する値+1
今回の戦闘の間、斬撃威力増加1、斬撃ダメージ量増加3を得る`,flavor:"",icon:"default"},{id:"keyword-158-9ed2-96f2-5200",name:"黒雲刀",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 1
斬撃威力が1増加
斬撃スキルで攻撃的中時、出血を1付与`,flavor:"",icon:"default"},{id:"keyword-159-9ed2-3044-96f2",name:"黒い雲",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 1
このターンにて自分が使用する基本攻撃スキルのコインが[破壊不能コイン]に変更され、該当スキル終了時までダメージによって混乱せず、コインで敵に付与する出血効果の値+1
マッチ敗北時に最終威力が3増加
ターン終了時にバフ消滅`,flavor:"",icon:"default"},{id:"keyword-160-96f2-306e-969c-58c1",name:"雲の障壁",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 1
守備スキルの最終威力+1`,flavor:"「裏路地の掟」で攻撃終了時またはターン終了時にバフ消滅",icon:"default"},{id:"keyword-161-8352-3044-547c-6c17",name:"荒い呼気",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 1
自分の呼吸威力が20以上なら、自分のスキル・コイン効果で呼吸威力を得るときに回数が1増加。
ターン終了時に消滅`,flavor:"",icon:"default"},{id:"keyword-162-30cd-30d6-30e9-30a4-30b6-30fc-3b1",name:"ネブライザーα",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 5
この効果は今回の戦闘のあいだ維持される
戦闘開始時に自分を含む全味方が呼吸威力1を得て、呼吸回数が1増加`,flavor:"",icon:"default"},{id:"keyword-163-31-32-533a-7523-71c3-6599",name:"12区産燃料",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 100
特定スキル使用時に燃料が消耗される
数値が50以下になると、過熱燃料になる`,flavor:"",icon:"default"},{id:"keyword-164-904e-71b1-71c3-6599",name:"過熱燃料",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 100
過熱燃料状態で12区産燃料を消耗時、代わりに過熱燃料が消耗される
この燃料を消耗時、12区産燃料が消耗されたものと判定される
数値が50超過時、12区産燃料になる`,flavor:"",icon:"default"},{id:"keyword-165-70b9-7a74",name:"点穴",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 3
点穴を付与したキャラクターが対象(または部位)の点穴数値によって下記の効果を得る
・1スタック : マッチ威力+1
・2スタック : 基本威力+1
・3スタック : マッチ威力+1、基本威力+1
付与したキャラクターが他の対象(または部位)にこの効果を付与すると消滅
他のキャラクターの点穴が付与される場合は効果される`,flavor:"",icon:"default"},{id:"keyword-166-811a-529b-3010-536f-3011",name:"脚力【卯】",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
ターン終了時、次のターンにクイックを5得る
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-167-546a-6bba-3010-8fc5-901f-3011",name:"呪殺【迅速】",type:"minus",color:"rgb(227, 0, 0)",description:`基本値 : 3
速度が10以上の対象に攻撃スキル*11でダメージを受けて破裂が発動するときに1減少、自分の破裂回数が1増加
数値が0になるとき、(破裂威力)だけ暴食属性ダメージを受けて消滅
※この効果は更新されない`,flavor:"",icon:"default"},{id:"keyword-168-4ed5-8fd4-3057-5e33-7c3f-3010-30b7-30f3-30af-30e",name:"仕返し帳簿【シンクレア】",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 30
ダメージ量が(数値)%だけ増加(最大30%)
数値によって次のターンに効果を得る
・10~ : 打撃ダメージ量増加1を得る
・20~ : 速度最大値が1増加、威力増加1を得る
・30~ : 打撃ダメージ量増加2を得る`,flavor:"",icon:"default"},{id:"keyword-169-5fa9-8b90-5bfe-8c61",name:"復讐対象",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 10
特定スキルまたはパッシブによって消耗
数値1につき、中指所属の敵からの被ダメージ量+2% (最大20%)
ターン終了時にこの数値が最も高ければ、次のターンに兄弟姉妹の仕返し対象1を得る
(仕返し対象の保有状況とは別途適用され、数値が同じ場合は残体力の比率が高い方を対象とする)`,flavor:"",icon:"default"},{id:"keyword-170-5144-5f1f-59c9-59b9-306e-4ed5-8fd4-3057-5bfe-8c6",name:"兄弟姉妹の仕返し対象",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 1
ターン終了時に消滅
全人格の仕返し対象として扱われる`,flavor:"",icon:"default"},{id:"keyword-171-71b1-305b-3089-308c-305f-9ce5-7c60",name:"熱せられた鳥籠",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 5
対象に火傷があるなら、数値1につき憤怒耐性+0.1(この効果によって憤怒耐性が2.0を超過することはない)
ターン終了時、次のターンに束縛を数値だけ得る
ターン終了時に数値が半減(小数点切り捨て)
※この効果は更新されない`,flavor:"",icon:"default"},{id:"keyword-172-5df3-8155",name:"巳腕",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 ： 3
ターン終了時、次のターンに呼吸3を得る、呼吸回数が2増加
基本攻撃スキル使用時、対象に破裂があるなら呼吸5を得る
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-173-546a-6bba-3010-6bd2-3011",name:"呪殺【毒】",type:"minus",color:"rgb(227, 0, 0)",description:`基本値 ： 5
呪殺
対象にクリティカルダメージを受けて破裂が発動するとき、1減少
バフ効果によって減少するとき、攻撃レベル減少1または防御レベル減少1を得る(1ターンにつき3回発動)
バフ効果によって*12減少するとき、数値が0なら(破裂威力)だけ暴食ダメージを受ける
※この効果は更新されない`,flavor:"",icon:"default"},{id:"keyword-174-5929-7a76-661f-5200",name:"天究星刀",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 20
数値が10以上なら、ターン終了時に次のターンにてクイック1を得る
特定のスキルに使用される`,flavor:"",icon:"default"},{id:"keyword-175-546a-6bba-3010-7834-3011",name:"呪殺【破】",type:"minus",color:"rgb(227, 0, 0)",description:`基本値 ： 3
自分に呪殺がある状態で破裂が発動するとき、数値が1減少して次のターンに束縛1を付与
・この効果が発動するとき、自分に次のターンにて付与される束縛が3以上なら、束縛を付与する代わりに数値が2減少`,flavor:"",icon:"default"},{id:"keyword-176-63f4-8b77-9632-5fa1",name:"援護防御",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 3
味方が敵に一方攻撃されるとき、数値を1消耗して敵の攻撃対象を自分に変更し、援護防御専用スキルを使用
援護防御を保有する味方が複数名いるなら、最も高い数値を持つ味方が優先して発動
守備スキルを装着した味方には発動しない
ターン終了時に消滅`,flavor:"",icon:"default"},{id:"keyword-177-5d29-58ca-306e-5370",name:"崩壊の印",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 1
暴食属性スキルによる被ダメージ量+10%
呪殺によるダメージ量+10%
ターン終了時に除去`,flavor:"",icon:"default"},{id:"keyword-178-7d61-307f-4ed8-3044-3066-3057-307e-3063-305f-546",name:"絡み付いてしまった呪いの札",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 10
ターン終了時に除去
数値が10以上なら、スキルで30以上ダメージを受けた場合に破裂回数が1増加、破裂威力だけ暴食ダメージを受ける(1ターンにつき1回)
この効果が除去されるとき、次のターンに(数値÷4)だけ攻撃威力減少を付与(最大2)
※この効果は更新されない`,flavor:"",icon:"default"},{id:"keyword-179-767e-8db3-306e-6bd2",name:"百足の毒",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 20
ターン終了時、(数値÷4)だけ次のターンに防御レベル減少を得る(小数点切り捨て)
ターン終了時、数値だけ暴食ダメージを受けて、数値が半減(小数点切り捨て)
死亡時、この味方ユニットのうちムカデの毒を保有していないか、最も少ない対象(集中戦闘の場合は部位で判定)へ威力だけ移る`,flavor:"",icon:"default"},{id:"keyword-180-57cb-82b1-91dd",name:"埋花針",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値：20
-ターン終了時、または被ダメージ時に数値が1増加
-数値5につき攻撃レベルが1増加
-このバフを保有したキャラクターが死亡し、すべての敵へ数値だけ暴食ダメージを与えて破裂5を付与
-死亡、または退却時に除去される`,flavor:"",icon:"default"},{id:"keyword-181-4e0d-8a31",name:"不許",type:"neutral",color:"rgb(161, 106, 59)",description:`このターンに体力が0になるダメージを受ければ、このターンの間体力が1未満にならず、ダメージによる混乱状態を解除
上記の効果が発動した場合、ターン終了時に死亡
ターン終了時、死亡時または退却時にバフ消滅`,flavor:"",icon:"default"},{id:"keyword-182-57cb-82b1-6afc",name:"埋花櫼",type:"neutral",color:"rgb(161, 106, 59)",description:`基本値：0
最大値：3
-自分の操作パネルの最も左にある基本攻撃スキルが破壊不能コインになる
-ターン開始時、数値1につき攻撃レベル増加2,防御レベル減少2を得る
-ターン開始時に数値が3以上なら、汚血1を得る(戦闘につき1回)
-ターン終了時に1増加
※上記の効果でのみ数値を増加可能
-死亡時、退却時に除去される`,flavor:`このターンに体力が0になるダメージを受ければ、このターンの間体力が1未満にならず、ダメージによる混乱状態を解除
以降、該当ターンの間ダメージで混乱・死亡せず、該当ターンの間最後の番にスキル「汚血泣涙-終」を使用する。該当スキル終了時に埋花櫼を除去
ターン終了時に体力が1になるダメージを受けた場合、次のターンに速度順で「汚血泣涙-終」を使用する。`,icon:"default"},{id:"keyword-183-6c5a-8840",name:"汚血",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値：5
ターン終了時、数値1につき体力最大値の20%だけ体力ダメージを受ける(このダメージで混乱しない)
-ターン終了時に1増加
-死亡、退却時に除去される`,flavor:"",icon:"default"},{id:"keyword-184-59cb",name:"始",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値：6
自分が戦闘に参加したターン数
退却時に除去される
ターン終了時に1増加`,flavor:"",icon:"default"},{id:"keyword-185-5f85",name:"待",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値：3
待機解除または復帰するときまで自分が待機、退却状態だったターン数`,flavor:"",icon:"default"},{id:"keyword-186-63f4",name:"援",type:"plus",color:"rgb(248, 194, 0)",description:`最大値：1
対象のマイナス効果が5種類以上なら、マッチ威力+1,ダメージ量+10%`,flavor:"",icon:"default"},{id:"keyword-187-6226-95d8-9000-5374",name:"戦闘退却",type:"neutral",color:"rgb(161, 106, 59)",description:`ターン終了時、混乱状態を解除して戦闘から離脱する(強制混乱を除く、死亡処理されない)
連続戦闘の場合、退却時に待機人員へ自分のスロットを渡して交代し、大気人員リストの最後へ移動(次のターンに交代可能な待機人員がいなければ離脱する。復帰時は退却順に復帰`,flavor:"",icon:"default"},{id:"keyword-188-864e-6a19-5f3e",name:"虎標弾",type:"neutral",color:"rgb(161, 106, 59)",description:`特殊弾丸
虎標弾、猛虎標弾の累計消耗数の合計が8以上なら、パッシブで得る天退星がシン(心)-天退星に変更
最大値 : 12`,flavor:"",icon:"default"},{id:"keyword-189-731b-864e-6a19-5f3e",name:"猛虎標弾",type:"neutral",color:"rgb(161, 106, 59)",description:`特殊弾丸
-虎標弾、猛虎標弾の累計消耗数の合計が8以上なら、パッシブで得る天退星がシン(心)-天退星に変更
最大値 : 8`,flavor:"",icon:"default"},{id:"keyword-190-5929-9000-661f",name:"天退星",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値が1増加
自分の速度が対象より3以上高ければ、ダメージ量+(対象との速度差×2.5)% (最大20%)
敵にスキルで付与する振動威力と振動回数の付与値+1
自分が消耗した虎標弾・猛虎標弾の合計が8以上なら、ターン終了時に次のターンにてこのバフがシン(心)-天退星に変更
最大値 : 1`,flavor:"",icon:"default"},{id:"keyword-191-30b7-30f3-28-5fc3-29-20-2d-20-5929-9000-661f",name:"シン(心) - 天退星",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値が3増加
自分の速度が対象より3以上高ければ、ダメージ量+(対象との速度差×5)% (最大40%)
敵にスキルで付与する振動威力と振動回数の付与値+2
最大値 : 1`,flavor:"",icon:"default"},{id:"keyword-192-30aa-30fc-30d0-30fc-30d2-30fc-30c8",name:"オーバーヒート",type:"plus",color:"rgb(248, 194, 0)",description:`猛虎標弾を得れば、この効果が消失する
速度の最小・最大値が2増加
基本攻撃スキルのマッチ威力が(虎標弾・猛虎標弾の累計消耗数÷2)だけ減少(最大10)する代わりに下記の効果を得る(全て獲得)
・8～ : ターン開始時、失った体力10%につき保護1を得る(最大5)
・14～ : マッチ敗北時、基本攻撃スキルの破壊不能コインのダメージ量+(75+失った体力の比率)% (最大150%)
・20～ : 自分よりも残体力の比率が高い対象への与ダメージ量が(体力比の差)%だけ増加 (最大50%、E.G.Oスキルを除く)`,flavor:"",icon:"default"},{id:"keyword-193-707c-71b1-63a8-9032-5f3e",name:"灼熱推進弾",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 15
特殊弾丸
特定スキルを使用時に消耗
弾丸として扱う`,flavor:"",icon:"default"},{id:"keyword-194-51f6-5f3e",name:"凶弾",type:"plus",color:"rgb(248, 194, 0)",description:`最大値：1
引き裂かれた追憶1につきクリティカルダメージ量+3%(最大18%)
的中時、出血1を付与(1ターンにつき最大3)
対象討伐時に呼吸3を得る、自分の呼吸回数が2増加(1ターンにつき最大2回)
ターン終了時に除去される`,flavor:"",icon:"default"},{id:"keyword-195-9b54-6cd5-5c11-5973-3001-53c2-4e0a-ff01",name:"魔法少女、参上！",type:"plus",color:"rgb(248, 194, 0)",description:`このターンに使用する基本攻撃スキルが、加算コインスキルに変更される
自分の愛/憎悪1につき、基本攻撃スキルのダメージ量+3%(最大15%)`,flavor:"",icon:"default"},{id:"keyword-196-9006-8ee2-20-2d-20-30ea-30d0-30fc-30b9-30c9",name:"逆転 - リバースド",type:"minus",color:"rgb(227, 0, 0)",description:"このターンに使用する基本攻撃スキルが、減算コインスキルに変更される",flavor:"",icon:"default"},{id:"keyword-197-611b-2f-618e-60aa",name:"愛/憎悪",type:"plus",color:"rgb(248, 194, 0)",description:`回数最大値：20
特殊充電
消耗時、特定スキルの能力が上昇する。回数を最大20まで貯められる。ターン終了時に回数が1減少
(充電威力および回数を増減させる効果を同様に受ける)`,flavor:"",icon:"default"},{id:"keyword-198-30d2-30b9-30c6-30ea-30fc",name:"ヒステリー",type:"minus",color:"rgb(227, 0, 0)",description:`基本値：0
最大値：3
ターン終了時に
・精神力が0以上なら、1減少
・精神力が0未満なら、1増加`,flavor:"",icon:"default"},{id:"keyword-199-30de-30b8-30ab-30eb-30fb-30a2-30eb-30ab-30ca",name:"マジカル・アルカナ",type:"plus",color:"rgb(248, 194, 0)",description:`最大値：3
自分の基本攻撃スキルのダメージ量+(数値×5)%
ターン終了時に数値が3かつ精神力が-25%以上なら、精神力が-25となる`,flavor:"",icon:"default"},{id:"keyword-200-60aa-515a-306e-5370",name:"悪党の印",type:"minus",color:"rgb(227, 0, 0)",description:`ドンキホーテからの攻撃による被ダメージ量+10%
ターンごとに、最初に付与された対象のみが保有する`,flavor:"",icon:"default"},{id:"keyword-201-9b54-6cd5-5c11-5973-306e-8a60-5531",name:"魔法少女の詠唱",type:"plus",color:"rgb(248, 194, 0)",description:`最大値：2
この効果を得たなら、攻撃威力増加1, ダメージ量増加1を得る
自分の充電回数を増加させるか充電回数を消耗する攻撃スキルの最終威力+1, ダメージ量+10%
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-202-6df1-3044-6d99",name:"深い涙",type:"plus",color:"rgb(248, 194, 0)",description:`特殊充電(威力固定)
消耗時、特定スキルの能力が上昇する
最大値 ; 20`,flavor:"",icon:"default"},{id:"keyword-203-5b88-308b-5263",name:"守る剣",type:"plus",color:"rgb(248, 194, 0)",description:`ターン開始時、数値1につき防御レベル増加1を得る(最大5)
ターン開始時、操作パネル最左端のスキルスロット挑発地が(数値×3)だけ増加(最大15)
最大値 : 5
ターン終了時に消滅`,flavor:"",icon:"default"},{id:"keyword-204-8cab-304f-5263",name:"貫く剣",type:"plus",color:"rgb(248, 194, 0)",description:`ターン開始時、数値1につき攻撃レベル増加1を得る(最大5)
ターン開始時、全スキルスロットの挑発値が(数値×0.15)だけ増加(最大0.75)
最大値 : 5
ターン終了時に消滅`,flavor:"",icon:"default"},{id:"keyword-205-6d99-3067-7814-304e-6f84-307e-3059",name:"涙で研ぎ澄ます",type:"plus",color:"rgb(248, 194, 0)",description:`ターン開始時、深い涙5を得る
・数値が3なら、深い涙5を追加で得る
ターン終了時に、(数値×15)だけ精神力を減少
基本攻撃スキルのダメージ量が(数値×10)%だけ増加(最大30%)
加護状態なら、ターン開始時に数値だけマッチ威力増加を得る
絶望状態なら、ターン開始時に数値だけ貫通威力増加を得る
最大値 : 3`,flavor:"",icon:"default"},{id:"keyword-206-52a0-8b77",name:"加護",type:"plus",color:"rgb(248, 194, 0)",description:`ターン開始時、精神力8につき守る剣1を得る(最大5)
マッチ終了時、対象へ沈潜2を付与(1ターンにつき1回)
被ダメージ時、攻撃対象に沈潜2を付与(1ターンにつき1回)
精神力20につき、このバフ効果によって付与する沈潜威力の付与値+1(最大2)
使用する基本スキルが加算コインスキルに変更される`,flavor:"",icon:"default"},{id:"keyword-207-7d76-671b",name:"絶望",type:"plus",color:"rgb(248, 194, 0)",description:`ターン開始時、精神力-8につき貫く剣1を得る(最大5)
マッチ終了時、対象の沈潜回数を1増加(1ターンにつき1回)
基本攻撃スキルの最初のコイン的中時、対象の沈潜回数を1増加(1ターンにつき1回)
精神力が-20につき、このバフ効果によって付与する沈潜回数の付与値+1(最大2)
使用する基本スキルが減算コインスキルに変更される`,flavor:"",icon:"default"},{id:"keyword-208-5f37-5236-5fb4-53ce-57f7-884c",name:"強制徴収執行",type:"plus",color:"rgb(248, 194, 0)",description:`自分にクイックがあるとき、自分の基本スキルで得る自分の振動回数+1
自分の速度が対象より高ければ、ダメージ量(対象との速度差×3)% (最大15%)`,flavor:"",icon:"default"},{id:"keyword-209-84c4-7a4d-3055-308c-305f-904e-53bb",name:"蓄積された過去",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 12
ターン開始時、数値3につきマッチ威力増加1、攻撃レベル増加1を得る`,flavor:"",icon:"default"},{id:"keyword-210-7573-307f-639b-3051",name:"畳み掛け",type:"plus",color:"rgb(248, 194, 0)",description:`鴻園の君主 ホンル人格と連携を実施した回数
最大値 : 2
ターン開始時、数値1につき攻撃レベル増加1、防御レベル増加1を得る`,flavor:"",icon:"default"},{id:"keyword-211-5c0a-547d",name:"尊命",type:"neutral",color:"rgb(161, 106, 59)",description:`この効果を付与した対象のスキル終了時、付与対象が攻撃した敵を基本スキル3で一方攻撃する。(強化スキルとして発動しない)
付与対象がこの効果で攻撃時、該当キャラクターの使用するスキルリストに影響を与えない。
スキル3を使用できる味方がいなければ、発動しない`,flavor:"",icon:"default"},{id:"keyword-212-9ed2-7363-4e38-67d3",name:"黒獣丸染",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 11
連携を実施した黒獣によって鴻園の君主 ホンルが強化される
強化効果は重複する
・黒獣卯筆頭 ファウスト : スキルによる被ダメージ量-5%
・黒獣卯 良秀 : 自分の速度が対象よりも高ければ、ダメージ量+5%
・黒獣卯 ウーティス : 一方攻撃時、破裂回数が1増加 (1ターンにつき1回)
・黒獣巳 ロージャ : クリティカル的中時、破裂を1付与 (1ターンにつき3回)
・黒獣巳 グレゴール : 破裂ダメージを与えれば、呼吸回数1を得る (1ターンにつき1回)
※以下は本来、該当黒獣人格のパッシブに記載
・黒獣午筆頭 イサン : 基本スキルの最終コイン的中時、1回振動爆発(1ターンにつき1回)
・黒獣酉 シンクレア : スキルで破裂威力または回数付与時、火傷1を付与(1ターンにつき3回)
・黒獣酉筆頭 ヒースクリフ:自分の基本スキルで攻撃的中時、該当する敵へ与えた暴食ダメージの5%だけ憤怒ダメージを与える
・黒獣未 ドンキホーテ:スキルで破裂威力または回数を付与時、沈潜1を付与(1ターンにつき3回)`,flavor:"",icon:"default"},{id:"keyword-213-6b7b-4e2d-6c42-6d3b",name:"死中求活",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 5
ターン開始時、下記の効果を適用
・数値1につき、攻撃レベル増加1を得る (最大5)
・数値2につき、ダメージ量増加1を得る (最大2)
・数値3以上なら、攻撃威力増加1を得る`,flavor:"",icon:"default"},{id:"keyword-214-610f-306b-5f93-3044-3001-65ac-308a-4f0f-305b-307",name:"意に従い、斬り伏せます。",type:"neutral",color:"rgb(161, 106, 59)",description:`この効果を付与した対象の攻撃スキル終了時、付与対象が攻撃した敵をスキル1で一方攻撃する。
付与対象がこの効果で攻撃時、該当キャラクターの使用するスキルリストに影響を与えない。`,flavor:"",icon:"default"},{id:"keyword-215-5168-3066-306e-9ed2-7363-306e-4e3b",name:"全ての黒獣の主",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 11
数値1につき、毎ターン開始時に下記効果を得る
・1につき速度最大値が1増加 (最大5)、自分のスキルダメージ量+1%
・2につき速度最小値が1増加 (最大2)、防御レベル増加1を得る (最大5)
・3につき攻撃レベル増加1を得る (最大3)
・5以上ならダメージ量増加1を得て、全黒獣人格へ攻撃レベル増加1を付与`,flavor:"",icon:"default"},{id:"keyword-216-8b77-885b",name:"護衛",type:"neutral",color:"rgb(161, 106, 59)",description:`特殊援護防御
最大値 : 1
鴻園の君主 ホンルが敵に一方攻撃されるとき、数値を1消耗して敵の攻撃対象を自分に変更し、鴻園の君主 ホンル人格の「護衛」スキルをコピーして使用
援護防御を保有する味方が複数名いるなら、最も高い数値を持つ味方が優先して使用
この効果は援護防御とみなされ、援護防御数値を計算するときに合算される
ターン終了時に消滅`,flavor:"",icon:"default"},{id:"keyword-217-8840-708e",name:"血炎",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
自分の基本スキルで敵へ付与する火傷・破裂威力+1
このバフを保有した状態で敵を混乱または討伐したなら、精神力を3回復(1ターンにつき3回)
上記の効果が発動したとき、自分の精神力が最大値なら次のターンに攻撃レベル増加1、クイック1を得る
ターン終了時に数値が1減少`,flavor:"",icon:"default"},{id:"keyword-218-6575-9663-8d70-7834",name:"敵陣走破",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 5
ターン開始時、該当ターンの間バリア(数値×10)を得る
最大値の場合、自分の最終威力が2増加する
被ダメージ時、1つのスキルで100以上のダメージを与えたのなら該当スキル終了時に保護1を得る(1ターンにつき2回、バリアダメージを含む、キーワードによるダメージでは判定しない)`,flavor:"",icon:"default"},{id:"keyword-219-8133-9707-76ea",name:"脳震盪",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 2
この効果がある間、破裂ダメージと振動爆発による混乱区間前進量が1.2倍になる(小数点切り捨て)
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-220-811a-529b-3010-5348-3011",name:"脚力【午】",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
ターン終了時、次のターンにクイック2、挑発値を(数値×2)だけ得る
攻撃開始前、振動威力を数値だけメインターゲットに付与(1ターンにつき最大6)
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-221-53f7-4ee4",name:"号令",type:"plus",color:"rgb(248, 194, 0)",description:`マッチ威力が1増加、防御レベルが2増加
ターン終了時に除去`,flavor:"",icon:"default"},{id:"keyword-222-8996-7dda",name:"視線",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 7
視線1につき、良秀からの被・与ダメージ量+10%
死亡時、このユニットの味方のうち、視線または軽蔑がないか最も少ない対象(集中戦闘の場合、部位で判定)に移る
(「軽蔑の下に降り注ぐ畏敬の視線」の攻撃中に死亡する場合、この効果が発動しない)
ターン終了時に数値が7なら、次のターンに軽蔑に変わる`,flavor:"",icon:"default"},{id:"keyword-223-8efd-8511",name:"軽蔑",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 1
良秀からの被・与ダメージ量-50%
軽蔑を持つ対象は、視線を得ることができない
死亡時、このユニットの味方のうち、視線または軽蔑がないか最も少ない対象(集中戦闘の場合、部位で判定)に移る
(「軽蔑の下に降り注ぐ畏敬の視線」の攻撃中に死亡する場合、この効果が発動しない)
ターン終了時に消滅して、次のターンに視線7を得る`,flavor:"",icon:"default"},{id:"keyword-224-786c-5316-30d0-30ea-30a2",name:"硬化バリア",type:"plus",color:"rgb(248, 194, 0)",description:`ターン開始時、(数値÷3)につき防御レベル増加を得る(最大3、小数点切り捨て)
敵からの被ダメージ直前に硬化バリアを半分消耗し、消耗した数値だけ保護を得る(1ターンにつき1回、小数点繰り上げ)
ターン終了時に3減少
最大10`,flavor:"",icon:"default"},{id:"keyword-225-5f26-9a5a",name:"弦驚",type:"plus",color:"rgb(248, 194, 0)",description:`ターン開始時、攻撃レベル増加1、防御レベル増加1を得る
ターン終了時に1減少
最大5`,flavor:"",icon:"default"},{id:"keyword-226-5927-9f8d",name:"大龍",type:"plus",color:"rgb(248, 194, 0)",description:`ターン開始時、攻撃レベル増加2、防御レベル増加2を得る
ターン終了時に1減少
最大5`,flavor:"",icon:"default"},{id:"keyword-227-9798-306b-7d0d-3081-3089-308c-305f-4eba",name:"鞘に納められた人",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 40
(数値÷8)が1につき、挑発値1を得る(最大5、小数点切り捨て、操作パネルの最左端のスキルスロットに適用)
(数値÷20)が1につき、保護1を得る(最大2、小数点切り捨て)
ターン終了時に10増加
※1ターンにつき最大20獲得可能`,flavor:"",icon:"default"},{id:"keyword-228-77e2-20-2d-20-6b7b",name:"矢 - 死",type:"neutral",color:"rgb(161, 106, 59)",description:`最小値 : 0
最大値 : 4
特定スキルを使用時に消耗`,flavor:"",icon:"default"},{id:"keyword-229-76ee-6a19-7167-6e96",name:"目標照準",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 4
狙撃姿勢がないなら消滅`,flavor:"",icon:"default"},{id:"keyword-230-72d9-6483-59ff-52e2",name:"狙撃姿勢",type:"plus",color:"rgb(248, 194, 0)",description:`この効果を保有時、下記の効果を適用
・最左端に装着した基本攻撃スキルを「閃弓」に変更して、戦闘開始時に使用する
・ダメージ、混乱区間前進効果によって混乱状態にならない
・援護攻撃を使用しない
E.G.Oスキルを装着して戦闘を開始した場合、解除される`,flavor:"",icon:"default"},{id:"keyword-231-523a-3055-3063-305f-77e2",name:"刺さった矢",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 4
ターン開始時、出血威力を数値だけ得る
防御レベルが数値だけ減少
ターン終了時、数値が2以上なら次のターンに脆弱1を得る(1ターンにつき1回)
死亡、退却、効果解除および消滅時にこの効果が消滅し、東部シ協会3課ファウストに矢-死を数値だけ付与`,flavor:"",icon:"default"},{id:"keyword-232-7d76-547d",name:"絶命",type:"plus",color:"rgb(248, 194, 0)",description:`攻撃レベルが2増加
最終威力が1増加
ターン終了時に消滅`,flavor:"",icon:"default"},{id:"keyword-233-786c-8840-7532-5191",name:"硬血甲冑",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 5
自分の体力が減少した状態なら攻撃スキル終了時、与えた体力ダメージ量の10%だけ体力を回復(1ターンにつき1回、最大40回復)
攻撃終了時に体力ダメージを受けたなら、1減少(1ターンにつき1回)
・色欲共鳴を成したなら、回復量が半減する代わりに硬血甲冑の数値が減少しない`,flavor:"",icon:"default"},{id:"keyword-234-30e9-30fb-30de-30f3-30c1-30e3-30d1-30ec-30fc-30c",name:"ラ・マンチャパレード",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 4
色欲スキルによる被ダメージ+10%
・攻撃対象が<ラ・マンチャランド>所属人格なら、スキル属性に関係なく被ダメージ量+20%
・数値が最大値なら、<ラ・マンチャランド>所属人格への与ダメージ量-20%
的中、またはダメージを受けたスキルが終了後に1減少`,flavor:"",icon:"default"},{id:"keyword-235-6f14-6280-96c6-4e2d",name:"演技集中",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
<ラ・マンチャランド>所属人格専用強化スキルを含む
スキル1,2の最終威力+1、数値1につきダメージ量+5%(最大15%)
スキル3の最終威力+2、数値1につきダメージ量+10%(最大30%)
スキル3の攻撃終了時またはターン開始時、硬血甲冑が無ければ1減少`,flavor:"",icon:"default"},{id:"keyword-236-904e-5145-96fb",name:"過充電",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 1
行動不能状態になる
被ダメージ量が10+(自分の充電威力×5)だけ減少(最大25%)
ターン開始時、自分の充電威力だけ充電力場を得る(最大5)
ターン終了時、次のターンに充電回数10、攻撃威力増加2を得てこの効果が消滅
自分の充電威力だけ、自分の最左端のスロットが挑発値を得る(最大5)
被ダメージ時、次のターンに充電回数1、負荷1を得る(1ターンにつき最大5)
自分が混乱したか、ターン開始時にパニックまたはE.G.O浸食状態ならこの効果が消滅`,flavor:"",icon:"default"},{id:"keyword-237-5149-672d",name:"光札",type:"plus",color:"rgb(248, 194, 0)",description:`威力 : 基本値0、最大値5
回数 : 基本値3、最大値3

ターン開始時、威力1につき攻撃レベル増加1を得る
ターン開始時、回数が1減少`,flavor:"",icon:"default"},{id:"keyword-238-7d44-672d-20-2d-20-677e-306b-9db4",name:"組札 - 松に鶴",type:"neutral",color:"rgb(161, 106, 59)",description:`スキル1の基本威力+2
自分の最左端スキルスロットに憤怒属性の基本攻撃スキルまたは、E.G.Oスキルを装着して使用時に「こいこい」の「組札」関連効果を発動`,flavor:"",icon:"default"},{id:"keyword-239-7d44-672d-20-2d-20-8292-306b-6708",name:"組札 - 芒に月",type:"neutral",color:"rgb(161, 106, 59)",description:`スキル2の基本威力+1
自分の最左端スキルスロットに怠惰属性の基本攻撃スキルまたは、E.G.Oスキルを装着して使用時に「こいこい」の「組札」関連効果を発動`,flavor:"",icon:"default"},{id:"keyword-240-7d44-672d-20-2d-20-6f64-307f-306b-685c",name:"組札 - 潤みに桜",type:"neutral",color:"rgb(161, 106, 59)",description:`スキル3の基本威力+1
自分の最左端スキルスロットに憂鬱属性の基本攻撃スキルまたは、E.G.Oスキルを装着して使用時に「こいこい」の「組札」関連効果を発動`,flavor:"",icon:"default"},{id:"keyword-241-50b7",name:"傷",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 2
ターン終了時、次のターンに束縛1を得る
ターン終了時、数値が2なら次のターンに深い傷に変換される`,flavor:"",icon:"default"},{id:"keyword-242-6df1-3044-50b7",name:"深い傷",type:"minus",color:"rgb(227, 0, 0)",description:`基本値 : 3
振動爆発時、出血回数が1増加(1ターンにつき2回)
傷を得られない(集中戦闘の場合、部位で判定)
ターン終了時、次のターンに(数値-1)だけ束縛を得る
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-243-81f4-547d-7684-306a-50b7",name:"致命的な傷",type:"minus",color:"rgb(227, 0, 0)",description:`基本値 : 3
振動爆発時、出血回数が3増加(1ターンにつき2回)
傷を得られない(集中戦闘の場合、部位で判定)
ターン終了時、次のターンに数値だけ束縛を得る
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-244-8840-95d8-672c-80fd",name:"血闘本能",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 20
数値1につき、与ダメージ量+0.75%
数値10につき、ターン終了時に次のターンにクイック1を得る`,flavor:"",icon:"default"},{id:"keyword-245-7834-7815-75d5",name:"破砕痕",type:"minus",color:"rgb(227, 0, 0)",description:`暴食属性、憂鬱属性スキルで被ダメージ時に受けるダメージ量+10%
精神力がある対象なら、パニックタイプが「破砕痕」に変更される
精神力のない対象なら、マッチ威力-1
ターン終了時に1減少
この効果は加算されず、更新される
パニックタイプを変更できない一部の精神力がある敵には、精神力のない対象の効果が適用される

※破砕痕パニック効果
-士気低下 : 自分のマッチ威力-1、防御レベル-2
-パニック : 自分のマッチ威力-2、防御レベル-3`,flavor:"",icon:"default"},{id:"keyword-246-767a-89d2",name:"発角",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
自分の基本スキルで敵に付与する破裂、沈潜威力+1
ターン終了時、1減少`,flavor:"",icon:"default"},{id:"keyword-247-8b77-885b-614b-52e2",name:"護衛態勢",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 2
被ダメージ量が(数値×10)%減少
ターン開始時、自分の呼吸だけバリアを得る(最大20)
ターン終了時、呼吸威力3、呼吸回数1を得て、次のターンに自分の最左端スロットの挑発値が5増加
ターン終了時、1減少`,flavor:"",icon:"default"},{id:"keyword-248-30a6-30a2-30b8-30a7-30c8-306e-76ee-5b-5148-92d2-",name:"ウアジェトの目[先鋒]",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 2
速度最小・最大値+3
戦闘開始時、保護1を得る
戦闘中、下記の効果を適用(スキルごとに1回、1ターンにつき3回)
・自分がメインターゲットになっている一方攻撃スキルの1枚目コインにて、表面が出る確率が半減
・マッチ開始時、マッチ1発目で対象の全コインにて表面が出る確率が半減
・上記の効果にて対象のコインが減算コインの場合、裏面が出る確率として適用される
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-249-30b7-30e5-30c8-306e-4e80-88c2",name:"シュトの亀裂",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 10
特殊沈潜
数値1につき、怠惰・憂鬱属性スキルによって被ダメージ時に被ダメージ量+1%
数値が最大値に到達すると、憂鬱脆弱1を得る(1ターンにつき1回)
自分の沈潜威力だけ憂鬱ダメージを受けて消滅(沈潜回数が1減少)
この効果を持ったまま死亡すると、精神力が最も高い味方1名へ数値の半分だけ付与(小数点切り捨て)
ターン開始時、出場人格にLCA所属人格がいないなら消滅`,flavor:"",icon:"default"},{id:"keyword-250-4c-43-41-4e80-88c2-5f3e",name:"LCA亀裂弾",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 16
特殊弾丸
特定スキルを使用時に消耗
弾丸がないときに攻撃がキャンセルされる`,flavor:"",icon:"default"},{id:"keyword-251-9752-3044-7802",name:"青い砂",type:"minus",color:"rgb(227, 0, 0)",description:`マッチ敗北時、自分の沈潜回数が1増加(1ターンにつき3回)
精神力がある対象なら、パニックタイプが「青い砂」に変更
精神力がない対象なら、速度の最小・最大値-1
ターン終了時に1減少
この効果は合算されず、更新される
パニックタイプを変更できない一部の精神力がある敵には、精神力のない対象の効果が適用される

※青い砂パニック効果
-士気低下 : 自分のマッチ威力-1、速度の最小・最大値-1
-パニック : 自分のマッチ威力-2、速度の最小・最大値-1`,flavor:"",icon:"default"},{id:"keyword-252-6307-4ee4-306e-5370",name:"指令の印",type:"neutral",color:"rgb(161, 106, 59)",description:"操作スロットに配置された基本攻撃スキルのうち1つに、指令の印が刻まれる",flavor:"",icon:"default"},{id:"keyword-253-6307-4ee4-306e-52a0-8b77",name:"指令の加護",type:"plus",color:"rgb(248, 194, 0)",description:`数値3につき、攻撃レベル+1
最大9`,flavor:"",icon:"default"},{id:"keyword-254-30ab-30eb-30de",name:"カルマ",type:"minus",color:"rgb(227, 0, 0)",description:`ターン開始時、
・数値10につき、防御レベル減少1を得る
・数値20につき、脆弱1を得る
最大100`,flavor:"「指令を受けて、遂行する。それは一つの業になって、巡り巡って積み重なっていくものである。」",icon:"default"},{id:"keyword-255-6307-4ee4",name:"指令",type:"neutral",color:"rgb(161, 106, 59)",description:`特定の条件によって指令[紙片]が与えられる
指令は様々な形態で伝達される。
指令をどのような形態で伝達されるかは、まるで神託のように一方的に選択されて決定される。`,flavor:"",icon:"default"},{id:"keyword-256-6307-4ee4-3010-7d19-7247-3011-20-49",name:"指令【紙片】 I",type:"neutral",color:"rgb(161, 106, 59)",description:`指令の印が刻まれたスキルを使用・的中させる。

ターン開始時、指令の加護が0~2のときに得る
この指令で達成できる指令の加護最大値 : 3`,flavor:"",icon:"default"},{id:"keyword-257-6307-4ee4-3010-7d19-7247-3011-20-49-49",name:"指令【紙片】 II",type:"neutral",color:"rgb(161, 106, 59)",description:`指令の印が刻まれたスキルが的中する。

ターン開始時、指令の加護が3~5のときに得る
この指令で達成できる指令の加護最大値 : 6`,flavor:"",icon:"default"},{id:"keyword-258-6307-4ee4-3010-7d19-7247-3011-49-49-49",name:"指令【紙片】III",type:"neutral",color:"rgb(161, 106, 59)",description:`E.G.O覚醒スキルまたは指令の印が刻まれた「スキル3」が的中する。

ターン開始時、指令の加護が6~8のときに得る
この指令で達成できる指令の加護最大値 : 9`,flavor:"",icon:"default"},{id:"keyword-259-6307-4ee4-3010-7d19-7247-3011-20-49-56",name:"指令【紙片】 IV",type:"neutral",color:"rgb(161, 106, 59)",description:`全ての敵を倒す。期限は次の指令が来るまで。

ターン開始時、指令の加護が9のときに得る`,flavor:"",icon:"default"},{id:"keyword-260-6307-4ee4-5bfe-8c61",name:"指令対象",type:"neutral",color:"rgb(161, 106, 59)",description:`人差し指所属からの被ダメージ量+10%
人差し指所属人格の数と関係なく、毎ターン1つの対象にのみ適用される`,flavor:"",icon:"default"},{id:"keyword-262-6307-4ee4-5b-7aef-672b-6a5f-5d-20-49",name:"指令[端末機] I",type:"neutral",color:"rgb(161, 106, 59)",description:`指令の印が刻まれたスキルを使用または的中させる。

ターン開始時、解禁が無いときに得る
この指令で達成できる指令の加護最大値 : 3`,flavor:"",icon:"default"},{id:"keyword-263-6307-4ee4-5b-7aef-672b-6a5f-5d-20-49-49",name:"指令[端末機] II",type:"neutral",color:"rgb(161, 106, 59)",description:`指令の印が刻まれたスキルが的中する。

ターン開始時、解禁 - Iのときに得る
この指令で達成できる指令の加護最大値 : 6`,flavor:"",icon:"default"},{id:"keyword-264-6307-4ee4-5b-7aef-672b-6a5f-5d-20-49-49-49",name:"指令[端末機] III",type:"neutral",color:"rgb(161, 106, 59)",description:`E.G.O覚醒スキル、または開花E.G.O::代行状態で指令の印が刻まれた「スキル3」が的中する。

ターン開始時、解禁 - IIのときに得る
この指令で達成できる指令の加護最大値 : 9`,flavor:"",icon:"default"},{id:"keyword-266-6307-4ee4-5b-7aef-672b-6a5f-5d-20-49-56",name:"指令[端末機] IV",type:"neutral",color:"rgb(161, 106, 59)",description:`全ての敵を倒す。期限は次の指令が来るまで。

ターン開始時、解禁 - IIIのときに得る`,flavor:"",icon:"default"},{id:"keyword-267-89e3-7981",name:"解禁",type:"plus",color:"rgb(248, 194, 0)",description:`指令の加護が一定数以上なら獲得
指令の加護数値によって段階が増加
最大3段階まで到達可能`,flavor:"",icon:"default"},{id:"keyword-268-89e3-7981-20-2d-20-49",name:"解禁 - I",type:"plus",color:"rgb(248, 194, 0)",description:`防御レベル+1
戦闘終了時、精神力が5回復`,flavor:"",icon:"default"},{id:"keyword-269-89e3-7981-20-2d-20-49-49",name:"解禁 - II",type:"plus",color:"rgb(248, 194, 0)",description:`防御レベル+2
戦闘終了時、精神力が10回復`,flavor:"",icon:"default"},{id:"keyword-270-89e3-7981-20-2d-20-49-49-49",name:"解禁 - III",type:"plus",color:"rgb(248, 194, 0)",description:`防御レベル+3
戦闘終了時、精神力が15回復`,flavor:"",icon:"default"},{id:"keyword-271-30b7-30f3-28-5fc3-29-20-2d-20-4ee3-884c",name:"シン(心) - 代行",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値が2増加
攻撃レベル+1、防御レベル+1
基本スキルで獲得する呼吸威力と回数+1
基本スキルのダメージ量+(失った体力の比率÷2)% (最大40%)
最大値 : 1`,flavor:"",icon:"default"},{id:"keyword-272-5f53-7136-306e-4fe1-5fc3",name:"当然の信心",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値が1増加
攻撃レベル+2、防御レベル+2
基本スキルで獲得する呼吸威力+1
基本攻撃スキルの精神力減少効果で精神力が-15未満に下がらない
最大値 : 1`,flavor:"",icon:"default"},{id:"keyword-273-91dd",name:"針",type:"minus",color:"rgb(227, 0, 0)",description:`特殊出血
嫉妬ダメージを受けると、出血回数が1増加してこの効果の数値が1減少
ターン終了時、出血1を得て数値が1減少`,flavor:"",icon:"default"},{id:"keyword-274-4f4f-6c11-767b-9332-30de-30a4-30af-30ed-30c1-30c",name:"住民登録マイクロチップ",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 2
憤怒属性、嫉妬属性スキルで被ダメージ時に受けるダメージ量+10%
マッチ敗北時、火傷1を得る(1ターンにつき最大3回)
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-275-5272-308c-305f-4e16-754c",name:"割れた世界",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 1
ターン終了時に消滅
火傷による被ダメージ量1.2倍(小数点切り捨て、特殊火傷を除く)
イサンの憤怒属性と憂鬱属性基本攻撃スキルによる被ダメージ量+10%`,flavor:"",icon:"default"},{id:"keyword-276-7f85-751f",name:"羅生",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 999
良秀が与えたスキルダメージ1につき、数値が1増加
数値33につき、基本スキルのダメージ量が1%増加(最大10%)`,flavor:"「もつれにもつれてて、絡み合って織り上げられた繭。糸。人生。世界。」",icon:"default"},{id:"keyword-277-4e2d-6307-5f0f-5f37-5316-523a-9752",name:"中指式強化刺青",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 10
数値5につき、基本スキルの最終威力+1 (最大2)
数値1につき、嫉妬属性のスキルまたは打撃スキルダメージ量+5% (最大50%)`,flavor:"",icon:"default"},{id:"keyword-278-71b1-7dda",name:"熱線",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 2
基本スキルを的中させた対象が火傷を保有しているなら、自分の精神力が3回復(1ターンにつき2回)
特定のスキルコインで出血付与時、火傷を付与
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-279-4e2d-6307-20-2d-20-6028-6068",name:"中指 - 怨恨",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 15
仕返し対象への与ダメージ量+20%`,flavor:"",icon:"default"},{id:"keyword-280-7729-60d1",name:"眩惑",type:"minus",color:"rgb(227, 0, 0)",description:`沈潜と火傷の合計1につき、基本攻撃スキルによる被ダメージ量+0.5%(最大10%)
精神力がある対象なら、パニックタイプが眩惑に変更される
精神力のない対象なら、防御レベル-2
ターン終了時に1減少
この効果は合算されず、更新される
パニックタイプを変更できない一部の精神力がある敵には、精神力のない対象の効果が適用される

※眩惑パニック効果
士気低下 : ターン終了時、次のターンに束縛1、攻撃レベル減少2を得る
パニック : ターン終了時、次のターンに束縛1、攻撃レベル減少4を得る`,flavor:"",icon:"default"},{id:"keyword-281-30e9-30f3-30d7",name:"ランプ",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 8
ターン終了時、次のターンに数値2につき束縛1を得る(最大4)
ターン終了時、数値が最大かつ敵がいるなら、数値を全て消耗して次のターンに下記の効果が発動
・最左端スロットが挑発値を10得る
・現体力が最も高い敵(本体)に眩惑3を付与`,flavor:"",icon:"default"},{id:"keyword-282-68ee-306e-756a-4eba",name:"森の番人",type:"plus",color:"rgb(248, 194, 0)",description:`攻撃開始前に下記の効果が発動
加算コインを使用するスキルなら、精神力が4回復(この効果で精神力を回復したとき、自分の精神力が最大値なら次のターンに攻撃レベル増加2を得る)
減算コインを使用するスキルなら、精神力が8減少(この効果で精神力が-40未満にならない)
この効果が消滅`,flavor:"",icon:"default"},{id:"keyword-283-6708-4e0b-9752-5200",name:"月下青刀",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 20
ターン開始時、数値1につきバリア2を得る
数値1につき、クリティカルダメージ量+1%`,flavor:"",icon:"default"},{id:"keyword-284-4ee3-884c-20-5b-30d8-30eb-30e1-30b9-5d",name:"代行 [ヘルメス]",type:"neutral",color:"rgb(161, 106, 59)",description:`ターン開始時に数値が9なら、強力なスキルを使用可能
1ターンに(解禁段階+2)だけ獲得可能
最大値 : 9
・解禁 - II未満なら、最大8まで獲得可能`,flavor:"",icon:"default"},{id:"keyword-285-30b7-30f3-28-5fc3-29-20-2d-20-904b-547d",name:"シン(心) - 運命",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値が1増加
基本スキルで獲得する呼吸威力と回数+1
自分の精神力が対象よりも高ければ、精神力の差3につきダメージ量+1%
(最大15%、精神力がないなら0とみなして計算)`,flavor:"",icon:"default"},{id:"keyword-286-50b7-3092-96a0-3057-305f-4eee-9762",name:"傷を隠した仮面",type:"plus",color:"rgb(248, 194, 0)",description:`攻撃レベル+2、防御レベル-2
一方攻撃による被ダメージ量-10%`,flavor:"",icon:"default"},{id:"keyword-287-3058-308a-3058-308a-3068-713c-3051-308b-50b7",name:"じりじりと焼ける傷",type:"plus",color:"rgb(248, 194, 0)",description:`攻撃レベル+3、防御レベル-3
一方攻撃による被ダメージ量-25%
ターン開始時に火傷1、出血1を得る
基本攻撃スキルの破壊不能コインダメージ量+15%`,flavor:"",icon:"default"},{id:"keyword-288-6e80-305f-3055-308c-305f-627f-8a8d-6b32-6c42",name:"満たされた承認欲求",type:"plus",color:"rgb(248, 194, 0)",description:`指令の印が刻まれたスキルのダメージ量+7.5%
指令対象への与ダメージ量+7.5%`,flavor:"",icon:"default"},{id:"keyword-289-624b-65a7-3067-808b-9aa8-3092-53e9-304d-5272-308",name:"手斧で肋骨を叩き割るときは…",type:"plus",color:"rgb(248, 194, 0)",description:`このコインのダメージは打撃属性ダメージとして適用される
破壊されずに的中時、呼吸2を得る`,flavor:"",icon:"default"},{id:"keyword-290-30b9-30c6-30a3-30ec-30c3-30c8-3067-80ba-3092-8ca",name:"スティレットで肺を貫き刺すときは…",type:"plus",color:"rgb(248, 194, 0)",description:`このコインのダメージは貫通属性ダメージとして適用される
破壊されずに的中時、沈潜2を付与`,flavor:"",icon:"default"},{id:"keyword-291-30d0-30b9-30bf-30fc-30c9-30bd-30fc-30c9-3067-80a",name:"バスタードソードで肩と頭を叩き潰すときは…",type:"plus",color:"rgb(248, 194, 0)",description:`このコインのダメージは斬撃属性ダメージとして適用される
当該コインのダメージ量+5%
破壊されずに的中時、次のターンに攻撃レベル増加1を得る(1ターンにつき2回)`,flavor:"",icon:"default"},{id:"keyword-292-30ec-30a4-30d4-30a2-3067-4f53-306b-31-30-500b-4e",name:"レイピアで体に10個以上の穴を開けるべきときは…",type:"plus",color:"rgb(248, 194, 0)",description:`このコインのダメージは貫通属性ダメージとして適用される
当該コインのダメージ量+5%
破壊されずに的中時、次のターンに防御レベル減少1を付与(1ターンにつき2回)`,flavor:"",icon:"default"},{id:"keyword-293-30cf-30f3-30de-30fc-3067-5f8c-982d-90e8-3092-6f7",name:"ハンマーで後頭部を潰すべきときは…",type:"plus",color:"rgb(248, 194, 0)",description:`このコインのダメージは打撃属性ダメージとして適用される
当該コインのダメージ量+5%
破壊されずに的中時、混乱区間を3前進`,flavor:"",icon:"default"},{id:"keyword-294-5927-5263-3067-80f4-4f53-3092-771f-3063-4e8c-306",name:"大剣で胴体を真っ二つに裂くべきときは…",type:"plus",color:"rgb(248, 194, 0)",description:`このコインのダメージは斬撃属性ダメージとして適用される
当該コインのダメージ量+15%
破壊されずに的中時、次のターンまで斬撃脆弱1を付与(1ターンにつき2回)`,flavor:"",icon:"default"},{id:"keyword-295-30e9-30f3-30b9-3067-32-30-30a4-30f3-30c1-306e-7a",name:"ランスで20インチの穴を穿つべきときは…",type:"plus",color:"rgb(248, 194, 0)",description:`このコインのダメージは貫通属性ダメージとして適用される
当該コインのダメージ量+15%
破壊されずに的中時、次のターンまで貫通脆弱1を付与(1ターンにつき2回)`,flavor:"",icon:"default"},{id:"keyword-296-97ad-3067-8089-7247-3092-4e07-679a-5f15-304d-526",name:"鞭で肉片を万枚引き剥がすべきときは…",type:"plus",color:"rgb(248, 194, 0)",description:`このコインのダメージは打撃属性ダメージとして適用される
当該コインのダメージ量+15%
破壊されずに的中時、次のターンまで打撃脆弱1を付与(1ターンにつき2回)`,flavor:"",icon:"default"},{id:"keyword-297-938c-3067-2026-8ab0-304b-306e-3088-3046-306b-300",name:"鎌で…誰かのように、空間に沿って斬り裂くべきときは…",type:"plus",color:"rgb(248, 194, 0)",description:`このコインのダメージは斬撃属性ダメージとして適用される
当該コインのダメージ量+30%
破壊されずに的中時、必ずクリティカルヒットする`,flavor:"",icon:"default"},{id:"keyword-298-6307-4ee4-803d-6eba",name:"指令耽溺",type:"plus",color:"rgb(248, 194, 0)",description:"速度の最小・最大値が5増加",flavor:`「Furioso-Replica」に下記の効果を適用
・的中時に付与する沈潜威力+1、獲得する呼吸威力+1
・的中時、沈潜回数が3増加(対象別に1回)
・ダメージ量+30%
ターン終了時に消滅`,icon:"default"},{id:"keyword-299-30db-30fc-30cd-30c3-30c8-5b-30e9-30a4-30d5-30eb-",name:"ホーネット[ライフル]",type:"neutral",color:"rgb(161, 106, 59)",description:`現在のモード : ホーネット[ライフル]
ホーネット[ショットガン]	ホーネット[ショットガン]	現在のモード : ホーネット[ショットガン]`,flavor:`ライフルという形態に囚われず、ホーネットが持つ本質そのものを覗き込む。
epoché
胞子弾[基本]	胞子弾[基本]	特殊弾丸
最大値 : 10
特定スキル使用時に消耗
消耗時、数値が足りないなら攻撃がキャンセルされる
消耗して的中時、対象へ胞子2を付与`,icon:"default"},{id:"keyword-300-80de-5b50-5f3e-5b-6563-5f3e-5d",name:"胞子弾[散弾]",type:"neutral",color:"rgb(161, 106, 59)",description:`特殊弾丸
最大値 散弾6
特定スキル使用時に消耗
消耗時、数値が足りないなら攻撃がキャンセルされる
消耗して的中時、対象へ胞子3を付与`,flavor:"",icon:"default"},{id:"keyword-301-518d-88c5-586b-5b-80de-5b50-88dc-5145-5d",name:"再装填[胞子補充]",type:"neutral",color:"rgb(161, 106, 59)",description:`胞子弾(特殊弾丸)に適用される効果
精神力を((16-保有した胞子弾の合計)÷2)だけ消耗し、保有した胞子弾[基本]、胞子弾[散弾]をそれぞれ0にして、最大値だけ得る(小数点切り捨て)`,flavor:"",icon:"default"},{id:"keyword-302-80de-5b50",name:"胞子",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 15
ターン終了時、数値5につき火傷回数が1増加
次のターンに束縛1を得る`,flavor:"",icon:"default"},{id:"keyword-303-5fe0-8aa0-30d5-30a7-30ed-30e2-30f3",name:"忠誠フェロモン",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
数値によってターン終了時、次のターンに下記の効果を得る
1～ : 保護1
2～ : クイック1
3 : マッチ威力増加1`,flavor:"",icon:"default"},{id:"keyword-304-5f3e-4e38-20-2d-20-5b64-72ec",name:"弾丸 - 孤独",type:"neutral",color:"rgb(161, 106, 59)",description:`特殊弾丸
最大値 : 6
特定スキル使用時に消耗

この弾丸は外部の効果で獲得したり値が増加しない`,flavor:"",icon:"default"},{id:"keyword-305-5b64-72ec",name:"孤独",type:"minus",color:"rgb(227, 0, 0)",description:`憂鬱属性スキルによる被ダメージ量+10%
精神力がある対象なら、パニックタイプが「孤独」に変更される
精神力のない対象なら、ターン終了時に沈潜回数が2増加

ターン終了時に1減少
この効果は合算されず、更新される
パニックタイプを変更できない一部の精神力がある敵には、精神力のない対象の効果が適用される
※孤独パニック効果
士気低下 : ターン終了時、沈潜回数2増加
パニック : ターン終了時、沈潜回数が3増加`,flavor:"",icon:"default"},{id:"keyword-306-6b8b-9999",name:"残香",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 30
沈潜ダメージを受ければ、数値が1増加
振動爆発時、自分を除くランダムな味方3名へ残香1~2を付与(幻想体の場合は部位で判定)
数値が最大なら、振動2を得て振動爆発。
自分の沈潜だけ憂鬱ダメージを受けて残香が消滅。
このターンの間、残香を得られない。
死亡時、味方に自分の残香を数値の半分だけランダムに分けて付与(小数点切り捨て)`,flavor:"",icon:"default"},{id:"keyword-307-82b1-3073-3089",name:"花びら",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 30
数値10につき、攻撃レベル+1
1ターンにつき、最大15まで得られる`,flavor:"",icon:"default"},{id:"keyword-308-30ea-30ba-30e0",name:"リズム",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 5
数値1につき、与ダメージ量+2%(最大10%)
数値1につき、攻撃レベル+1(最大5)
数値1につき、防御レベル-1(最大-5)
ターン終了時に効果消滅`,flavor:"",icon:"default"},{id:"keyword-309-9ad8-96fb-5727-5916-76ae",name:"高電圧外皮",type:"plus",color:"rgb(248, 194, 0)",description:`(数値×5)分のバリアを得る
(数値×5)分のバリアを失うと、高電圧外皮が1減少
ターン終了時、充電回数を高電圧外皮の数値分得て、高電圧外皮と高電圧外皮で得るバリアが消滅
最大値 : 20`,flavor:"",icon:"default"},{id:"keyword-310-96fb-8377-91dd",name:"電荷針",type:"minus",color:"rgb(227, 0, 0)",description:`充電回数(特殊充電を含む)を獲得・消耗するスキルの被ダメージ量が数値1につき4%増加(最大20%)
・そのスキルが嫉妬属性なら、効果が強化されて数値1につき8%増加(最大40%)
最大値 : 5
効果発動条件に合うスキルで被ダメージ後、当該スキルの攻撃終了時またはターン終了時、1減少
(ただし、電荷針を付与する基本攻撃スキルでダメージを受けた場合は数値が減少しない)`,flavor:"",icon:"default"},{id:"keyword-311-81ea-5bb6-767a-96fb",name:"自家発電",type:"plus",color:"rgb(248, 194, 0)",description:`最終威力+2
数値が減少するたびに、その数値だけ自分の充電回数が増加
以下の条件を満たすと減少
・自分が攻撃を受けたスキルの攻撃が終了時、1減少
・攻撃終了時、3減少
・ターン終了時、5減少
最大値 : 20
この効果が消滅するまで体力が1未満に下がらない`,flavor:"",icon:"default"},{id:"keyword-312-6b8b-308a-706b",name:"残り火",type:"minus",color:"rgb(227, 0, 0)",description:`最大威力 : 3
最大回数 : 6
自分が火傷を保有しているなら、敵から火傷威力・火傷回数または特殊火傷を付与するスキルで被ダメージ時に回数が1減少(E.G.Oスキルを含む)

自分に火傷がない状態で被ダメージ時、回数が6に初期化`,flavor:`回数が0なら、下記の効果を適用
・自分の火傷を1回発動。火傷回数が1減少
・残り火の威力が1減少
・残った残り火の威力が1以上なら、回数6に初期化`,icon:"default"},{id:"keyword-313-751f-4f53-6750-6599",name:"生体材料",type:"plus",color:"rgb(248, 194, 0)",description:`回数最大値 : 20
特殊充電
充電威力および回数を増減させる効果を同様に受ける
ターン終了時、回数が1減少`,flavor:"",icon:"default"},{id:"keyword-314-8eab-4f53-304c-97ff-304b-3059-65cb-5f8b",name:"身体が響かす旋律",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値+1
基本攻撃スキルのマッチ威力+1、ダメージ量+10%`,flavor:"",icon:"default"},{id:"keyword-315-30a2-30a4-30a2-30f3-30e1-30a4-30c7-30f3",name:"アイアンメイデン",type:"neutral",color:"rgb(161, 106, 59)",description:`最左端スロットの挑発値+4
ターン開始時に保護1、防御レベル増加5を得てバリアを現体力の5%だけ得る
攻撃者の最終コインで被ダメージ時、攻撃者にそのコインで受けたダメージ量の20%だけ貫通ダメージを与えて、出血回数が2増加(スキルごとに1回、1ターンにつき最大3回、ターンごとの最大ダメージ60)`,flavor:"",icon:"default"},{id:"keyword-316-62d8-675f-89e3-9664-20-2d-20-5275-4f5c-6ca1-5165",name:"拘束解除 - 創作没入",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値+2
基本スキルが入れ替わる
自分より速度が低い敵への基本攻撃スキルによる与ダメージ量+10%`,flavor:"",icon:"default"},{id:"keyword-317-4f5c-54c1-540d-20-3a-20-30d5-30a1-30b7-30a2",name:"作品名 : ファシア",type:"plus",color:"rgb(248, 194, 0)",description:`生体材料の威力によって、基本攻撃スキルとマッチ可能反撃スキルが下記の効果を得る
-1~ : 基本威力+1
-2~ : 敵に出血または特殊出血があるなら、ダメージ量+10%
-3~ : 出血威力、回数付与値+1
-4~ : 基本威力+1`,flavor:"",icon:"default"},{id:"keyword-318-8eab-4f53-89b3-5287",name:"身体観劇",type:"minus",color:"rgb(227, 0, 0)",description:`基本値 : 3
敵の攻撃スキルで自分に出血が付与されたなら、次のターンに下記のランダムな効果1つを得て、この効果の数値が1減少(スキルごとに1回)
・出血威力3
・束縛1
・守備威力減少1`,flavor:"",icon:"default"},{id:"keyword-319-4f5c-54c1-540d-20-3a-20-30c6-30a3-30d3-30a2",name:"作品名 : ティビア",type:"plus",color:"rgb(248, 194, 0)",description:`生体材料の威力によって、基本攻撃スキルとマッチ可能反撃スキルが下記の効果を得る
-1~ : 基本威力+1
-2~ : 敵に出血または特殊出血があるなら、ダメージ量+10%
-3~ : 出血威力、回数付与値+1
-4~ : 基本威力+1
-5~ : 基本威力+1`,flavor:"",icon:"default"},{id:"keyword-320-773a-671b",name:"眺望",type:"neutral",color:"rgb(161, 106, 59)",description:`戦場に蜘蛛の巣 薬指の子方 ファウストがいるなら、ターン開始時に保護2を得る
ターン終了時、数値が2減少`,flavor:"",icon:"default"},{id:"keyword-321-5f37-70c8-306a-8272-5f69",name:"強烈な色彩",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 4
薬指人格から受けるダメージ量+(数値×2.5)%
・攻撃者が薬指所属かつ野獣派所属なら、代わりに被ダメージ量+(数値×5)%
戦闘開始時、数値だけ出血・沈潜・出血回数・沈潜回数のうちランダムに1ずつ得る
戦闘終了時、この効果が消滅して引き裂かれた色彩[ルージュ]・引き裂かれた色彩[ブル]数値が半減(小数点切り捨て)`,flavor:"",icon:"default"},{id:"keyword-322-5f15-304d-88c2-304b-308c-305f-8272-5f69-5b-30eb-",name:"引き裂かれた色彩[ルージュ]",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 9
被ダメージ時、数値3につき出血威力1を得る(1ターンにつき1回)*13
ターン終了時、次のターンにて数値4につき防御レベル減少1を得る(最大2)
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-323-5f15-304d-88c2-304b-308c-305f-8272-5f69-5b-30d6-",name:"引き裂かれた色彩[ブル]",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 9
被ダメージ時、数値3につき沈潜威力1を得る(1ターンにつき1回)*14
ターン終了時、数値が5以上なら精神力が5減少
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-324-679c-6562-306a-30bf-30c3-30c1",name:"果敢なタッチ",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 2
数値1につき、出血効果と沈潜効果による体力・精神力被ダメージ量+10%(最大20%、小数点切り捨て)
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-325-30ec-30d5-30ec-30af-30b9-30a3-30e8-30f3",name:"レフレクスィヨン",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 2
この効果があるターンの間「クリティーク」を使用できない
ターン開始時に精神力が5回復
ターン終了時に1減少
このバフ消滅時、(戦場にいるスチューデント人格数)だけ次のターンに敬意を得る`,flavor:"",icon:"default"},{id:"keyword-326-656c-610f",name:"敬意",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
ターン開始時、数値1につき攻撃レベル増加か防御レベル増加のうちランダムに1得る(最大3回)
ターン終了時に消滅`,flavor:"",icon:"default"},{id:"keyword-327-91ce-7363-6d3e-20-2d-20-30de-30b9-30af-30fb-30c9",name:"野獣派 - マスク・ドゥ・ルー",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値+1
基本スキルで付与する出血・沈潜威力付与量+1
攻撃的中時、対象の引き裂かれた色彩[ブル]が3以上なら、沈潜回数が1増加(1ターンにつき1回)
攻撃的中時、対象の引き裂かれた色彩[ルージュ]が3以上なら、出血回数が1増加(1ターンにつき1回)`,flavor:"",icon:"default"},{id:"keyword-328-91ce-7363-6d3e-20-2d-20-30de-30b9-30af-30fb-30c9",name:"野獣派 - マスク・ドゥ・シヤン",type:"plus",color:"rgb(248, 194, 0)",description:`対象の引き裂かれた色彩3につき、与ダメージ量+5%(最大15%)
基本スキルで付与する出血・沈潜威力付与量+1
基本スキル的中時、対象に出血がなければ対象の出血回数が2増加(1ターンにつき1回)`,flavor:"",icon:"default"},{id:"keyword-329-6b20-70b9-88dc-5b8c",name:"欠点補完",type:"plus",color:"rgb(248, 194, 0)",description:`与ダメージ量+10%
薬指野獣派ドーセント ロージャの「クリティーク」スキルコイン再使用時、精神力を3回復(1ターンにつき1回)
ターン開始時、薬指野獣派ドーセント ロージャに「レフレクスィヨン」がないなら消滅`,flavor:"",icon:"default"},{id:"keyword-330-4ed5-8fd4-3057-5e33-7c3f-5b-30d2-30fc-30b9-30af-",name:"仕返し帳簿[ヒースクリフ]",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 30
数値5につき、攻撃レベル+1、防御レベル+1`,flavor:"",icon:"default"},{id:"keyword-331-6028-6068-306e-523a-9752",name:"怨恨の刺青",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 20
数値1につき自分の基本スキルダメージ量+1%`,flavor:"",icon:"default"},{id:"keyword-332-7dcb-8272-306e-86fe",name:"緋色の蛾",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
ターン終了時、体力最大値の数値%だけ体力を回復(最小体力回復量 : 1)
ターン終了時、精神力を数値だけ回復
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-333-5263-75d5-5b-6b8b-50cf-5d",name:"剣痕[残像]",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 100
数値10につき、斬撃属性による被ダメージ量+1%`,flavor:"",icon:"default"},{id:"keyword-334-3082-3064-308c",name:"もつれ",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 4
スキルおよびパッシブ効果で最小値5、最大値9まで増加可能`,flavor:`誰かと出逢い、時間をどれだけ過ごしたかによって因縁は絡み合う。
相手の時間と自分の時間が重なったそのいくつもの瞬間が、良かったにせよ忌まわしいものだったにせよ、因縁は残酷なほどにもつれてしまう。
既に一緒に過ごしてしまった時間は、どうすることもできない。`,icon:"default"},{id:"keyword-335-6b8b-5f71",name:"残影",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 1
蜘蛛の巣の刀 良秀の基本攻撃スキルによる被ダメージ量+5%`,flavor:`残影とは、微かに残された影ではない。
それは過ぎし日に、残酷なほど深く落とされた古い影である。`,icon:"default"},{id:"keyword-336-7d76-7e01",name:"絶縁",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 4
死亡した味方の蜘蛛の巣の親方人格1名につき、数値が1増加
死亡した味方の蜘蛛の巣人格によって固有効果を得る
数値1につき、被ダメージ量-7.5%`,flavor:"それゆえ断ち切る。道理に背くことになったとしても。",icon:"default"},{id:"keyword-337-5730-6167-661f-5200",name:"地慧星刀",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 70
自分が付与した剣痕の数値の総計
1ターンにつき、最大25まで得られる`,flavor:`大地に痕跡を残す。この刀はそのための刀だ。
この地に何かを残すための星の光が、この刀に溶かし込まれた。`,icon:"default"},{id:"keyword-338-30b7-30f3-28-5fc3-29-20-2d-20-5730-6167-661f",name:"シン(心) - 地慧星",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値が2増加
基本攻撃スキル使用時、呼吸2、呼吸回数1を得る
自分の基本攻撃スキルのクリティカルダメージ量+10%
一方攻撃または破壊不能コインによる被ダメージ量-20%`,flavor:"",icon:"default"},{id:"keyword-339-8912-3081-3089-308c-305f-ff01",name:"褒められた！",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 10
スキルで2回被ダメージ時に1減少
数値が5以上なら、基本スキルの最終威力+1
数値1につき打撃スキルのダメージ量+1%(最大10%)`,flavor:"",icon:"default"},{id:"keyword-340-3088-304f-898b-3068-3051-5a18-3061-3083-3093-ff0",name:"よく見とけ娘ちゃん！",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 10
スキルで2回被ダメージ時に1減少
数値が5以上なら、基本スキルの最終威力+1
数値1につき打撃スキルのダメージ量+1%(最大10%)`,flavor:"",icon:"default"},{id:"keyword-341-4ed5-8fd4-3057-5e33-7c3f-5b-8718-86db-306e-5de3-",name:"仕返し帳簿[蜘蛛の巣]",type:"minus",color:"rgb(227, 0, 0)",description:`蜘蛛の巣 中指の親方 ウーティスや、蜘蛛の巣 中指の子方 イシュメールが、この効果を保有した対象へスキル的中時に精神力が5回復(スキルごとに1回、1ターンにつき2回)
蜘蛛の巣 中指の親方 ウーティスや、蜘蛛の巣 中指の子方 イシュメールにスキル的中時、対象が中指 - 怨恨1を追加で得る(スキルごとに1回、1ターンにつき2回。各人格ごとに適用)
ターン終了時、消滅する`,flavor:"",icon:"default"},{id:"keyword-343-4e2d-6307-20-2d-20-6028-6068-306e-523a-9752-20-5",name:"中指 - 怨恨の刺青 [長姉]",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 10
数値5につき、基本スキルの最終威力+1(最大2)
数値1につき、嫉妬属性のスキルまたは打撃属性スキルのダメージ量+5%(最大50%)`,flavor:"",icon:"default"},{id:"keyword-344-8d85-6839-6027",name:"超根性",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
自分の物理耐性のうち、普通(1.0)を超過するものを普通(1.0)に変更(混乱した場合を除く)
スキルによる被ダメージ量が30+(中指 - 怨恨の刺青 [長姉]の数値×4)%だけ減少(最大50%、小数点切り捨て)
マッチ勝利時、(マッチ回数×5)だけ精神力が追加で上昇(最大15)
ターン終了時、自分のスキル効果でこのターンに精神力が減少したなら、次のターンに基本スキルによる与ダメージ量+10%(1ターンにつき1回)
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-345-5c01-5370-3055-308c-305f-5263",name:"封印された剣",type:"neutral",color:"rgb(161, 106, 59)",description:`ターン終了時、次のターンにクイック2を得る
敵の出血4につき、打撃属性基本スキルによる与ダメージ量+2%(最大10%)
基本スキルの最終コイン的中時、敵の出血が20以上なら、当該コインの最終ダメージ量の10%だけ打撃ダメージ(小数点切り捨て)`,flavor:"",icon:"default"},{id:"keyword-346-31-6bb5-968e-20-5c01-5370-89e3-9664",name:"1段階 封印解除",type:"neutral",color:"rgb(161, 106, 59)",description:`ターン終了時、次のターンにクイック1を得る
敵の出血と火傷の合計4につき、打撃属性基本スキルによる与ダメージ量+2%(最大10%)
基本スキルの最終コイン的中時、敵の火傷と出血の合計が20以上なら、当該コインの最終ダメージ量の10%だけ貫通ダメージ(小数点切り捨て)`,flavor:"",icon:"default"},{id:"keyword-347-32-6bb5-968e-20-5c01-5370-89e3-9664",name:"2段階 封印解除",type:"neutral",color:"rgb(161, 106, 59)",description:`ターン終了時、次のターンにクイック1を得る
敵の出血と火傷の合計4につき、打撃属性基本スキルによる与ダメージ量+2%(最大10%)
基本スキルの最終コイン的中時、敵の火傷と出血の合計が20以上なら、当該コインの最終ダメージ量の10%だけ斬撃ダメージ(小数点切り捨て)`,flavor:"",icon:"default"},{id:"keyword-348-30ec-30fc-30f4-30a1-30c6-30a4-30f3",name:"レーヴァテイン",type:"neutral",color:"rgb(161, 106, 59)",description:`ターン開始時、戦場にいる全キャラクターへ火傷3を付与
自分の基本スキルが、当該スキルランクに該当するレーヴァテイン専用スキルに変更される
敵の出血と火傷の合計4につき、打撃属性基本スキルによる与ダメージ量+2%(最大10%)
基本スキルの最終コイン的中時、敵の火傷と出血の合計が20以上なら、当該コインの最終ダメージ量の10%だけ貫通ダメージ(小数点切り捨て)`,flavor:"",icon:"default"},{id:"keyword-349-71b1-3092-5e2f-3073-3066-3086-304f-5a2f-3057-307",name:"熱を帯びてゆく娯しみ",type:"neutral",color:"rgb(161, 106, 59)",description:`下記の条件によって数値が1減少(1ターンにつき1回)
-「怨念スタンピング」使用時(反撃での発動を含む)
-嫉妬完全共鳴数が6以上のターン終了時

数値が0なら、「ラッピングを剥がしてみるか」を使用する`,flavor:"",icon:"default"},{id:"keyword-350-5bb6-65cf-306e-5fa9-8b90",name:"家族の復讐",type:"plus",color:"rgb(248, 194, 0)",description:`嫉妬属性の基本スキルダメージ量+20%
基本スキルの最終威力+1`,flavor:"",icon:"default"},{id:"keyword-351-71c3-3048-4e0a-304c-308b",name:"燃え上がる",type:"neutral",color:"rgb(161, 106, 59)",description:`速度の最小・最大値+1
このターンに最初に使用する基本攻撃スキルの最終威力+2
当該スキルが的中するたびに、体力最大値の2%だけ体力ダメージを受ける(最大10%、このダメージで混乱状態にならず、体力が1未満に減少しない)
ターン終了時に消滅`,flavor:"",icon:"default"},{id:"keyword-352-5f15-304d-88c2-304b-308c-305f-50b7",name:"引き裂かれた傷",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 3
ターン開始時、出血2を得る
ターン終了時、次のターンに束縛1を得る
ターン終了時に1減少`,flavor:"",icon:"default"},{id:"keyword-353-62bc-9001-5dee-5099",name:"押送差備",type:"plus",color:"rgb(248, 194, 0)",description:`基本値 : 1
捕縛 [ホンル]が付与された敵とマッチ進行時、マッチ威力+1
捕縛 [ホンル]が付与された敵に的中時に出血1を付与、呼吸1を得る(1ターンにつきスキル2つまで発動可能)
捕縛が付与された対象がいなければ消滅`,flavor:"",icon:"default"},{id:"keyword-354-30e0-30af-5de5-623f-20-2d-20-30a4-30a7-5b-92ed-5",name:"ムク工房 - イェ[鋭] 二式抜刀 / 推力:ドッケビの火",type:"plus",color:"rgb(248, 194, 0)",description:`推力:ドッケビの火	最大値 : 20
1ターンにつき最大10まで得られる
数値1につき、斬撃属性の基本攻撃スキルダメージ量+1%(最大10%)
数値2につき、守備スキルのマッチ威力-1(最大5)
ターン終了時、次のターンに数値5につきクイック1を得る(最大3)`,flavor:"",icon:"default"},{id:"keyword-355-30c9-30c3-30b1-30d3-306e-8155",name:"ドッケビの腕",type:"plus",color:"rgb(248, 194, 0)",description:`被ダメージ量が15%減少
スキル使用時、次のターンにクイック1を得る(1ターンにつき2回)
戦闘終了時に消滅し、呼吸回数2を得る`,flavor:"",icon:"default"},{id:"keyword-356-6bba-624b-672c-4f4d",name:"殺手本位",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
攻撃レベルが数値だけ増加
斬撃スキルで攻撃的中時、呼吸1を得る(1ターンにつき2回)
剣契所属味方人格死亡時、1減少`,flavor:"",icon:"default"},{id:"keyword-357-8ffd-6155-9152",name:"追慕酒",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 4
ターン開始時、数値1につき呼吸1を得る
・剣契頭目 ムルソーなら、代わりに呼吸2を得る
基本スキルのクリティカルダメージ量+(自分の呼吸威力×1.5)% (最大15%)
呼吸威力・回数を得る基本スキルのマッチ威力+1
ターン終了時に数値が1減少`,flavor:"",icon:"default"},{id:"keyword-358-6028-6068",name:"怨恨",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値+2
攻撃的中時、スキルで与えたダメージ量の10%だけ自分の体力を回復(スキルごとの最大回復量 : 自分の体力最大値の50%)`,flavor:"",icon:"default"},{id:"keyword-359-6068-306e-5bbf-3063-305f-9798",name:"恨の宿った鞘",type:"plus",color:"rgb(248, 194, 0)",description:`自分を含む味方が体力ダメージを受けると、ダメージ量だけ結ばれゆくしこりを得る
追慕パッシブが条件を無視して最大効果で発動する
傲慢共鳴時、自分を除く全ての剣契所属の味方へ本国剣 - 真詮伝授を付与する`,flavor:`「肉斬」使用時、このスキル終了時まで
・自分の体力が10未満に下がらない(1ターンにつき1回)
・マッチ威力が(自分の呼吸威力÷2)だけ減少(小数点切り捨て)
「骨断」使用時、呼吸4を得る

※本国剣 - 真詮伝授効果
基本攻撃スキルの最終威力が(戦場にいる剣契所属の味方数÷3)だけ増加(最大2、小数点切り捨て)
自分が剣契殺手なら、基本スキルの最終威力+1、ダメージ量+(120÷コイン数)%
ターン終了時、次のターンにクイック1を得てこの効果が消滅`,icon:"default"},{id:"keyword-360-7d50-3070-308c-3086-304f-3057-3053-308a",name:"結ばれゆくしこり",type:"plus",color:"rgb(248, 194, 0)",description:"最大値 : 999",flavor:`「骨断」の最終威力が(数値÷100)だけ増加(最大6、小数点切り捨て)
「肉斬」「骨断」の最後のコイン的中時、(数値÷10)%だけダメージ量が増加し、この効果が消滅`,icon:"default"},{id:"keyword-361-672c-56fd-5263-20-2d-20-771f-8a6e-4f1d-6388",name:"本国剣 - 真詮伝授",type:"minus",color:"rgb(227, 0, 0)",description:`基本攻撃スキルの最終威力が(戦場にいる剣契所属の味方数÷3)だけ増加(最大2、小数点切り捨て)
自分が剣契殺手なら、基本スキルの最終威力+1、ダメージ量+(120÷コイン数)%
ターン終了時、次のターンにクイック1を得てこの効果が消滅
決闘高潮	決闘高潮	蜘蛛の巣 親指の子方 ヒースクリフのスキル・パッシブ効果に影響を及ぼす
1ターンにつき最大3まで得られる
最大値 : 5`,flavor:"",icon:"default"},{id:"keyword-362-5b8c-6210-3055-308c-3086-304f-6559-672c",name:"完成されゆく教本",type:"plus",color:"rgb(248, 194, 0)",description:`基本スキルのダメージ量+(10+(数値×5))%
1ターンにつき最大2まで得られる
最大値 : 3`,flavor:"",icon:"default"},{id:"keyword-363-8171-5207-65ad",name:"腱切断",type:"minus",color:"rgb(227, 0, 0)",description:`基本威力-1
ターン終了時に消滅
最大値 : 1`,flavor:"",icon:"default"},{id:"keyword-364-4e88-77e5-773c",name:"予知眼",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 30
1ターンにつき、最大10まで減少しうる`,flavor:"",icon:"default"},{id:"keyword-365-4e88-77e5-773c-20-904e-71b1",name:"予知眼 過熱",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 30
攻撃レベル+3、防御レベル-3
ターン開始時に10増加
数値が30なら、「予知眼」に変換`,flavor:"",icon:"default"},{id:"keyword-366-52a0-901f-5f3e",name:"加速弾",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 10
特殊弾丸
特定スキルを使用時に消耗`,flavor:"",icon:"default"},{id:"keyword-367-72e9-308a-306e-6a19-7684",name:"狩りの標的",type:"neutral",color:"rgb(161, 106, 59)",description:"蜘蛛の巣 親指の親方 ロージャからの基本スキルによる被ダメージ量+15%",flavor:"",icon:"default"},{id:"keyword-368-52a0-901f-3059-308b-672a-6765",name:"加速する未来",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 5
数値1につき、基本スキルによる与ダメージ量+3%(最大15%)
数値2につき、基本スキルのマッチ威力+1
数値が5なら、基本スキルのコイン威力+1
スキル終了時に消滅`,flavor:"",icon:"default"},{id:"keyword-369-30b7-30f3-28-5fc3-29-20-2d-20-4e0d-540d-8a89",name:"シン(心) - 不名誉",type:"plus",color:"rgb(248, 194, 0)",description:`速度の最小・最大値が1増加
基本スキルで付与する振動・火傷の威力および回数付与量+1
自分の呼吸威力3につき、与ダメージ量+3%(最大15%)`,flavor:"",icon:"default"},{id:"keyword-370-6681-306e-706b",name:"暁の火",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 30
1ターンにつき最大20まで得られる
ターン開始時、数値5につき火傷1を得た後、数値10につき自分の火傷回数が1増加
基本攻撃スキル的中時、(1+対象の火傷威力÷3)だけ数値が増加(最大3)
数値が10以上なら、敵に基本スキルで付与する火傷威力付与量+1
数値が20以上なら、敵に基本スキルで付与する火傷回数付与量+1`,flavor:"夜明けを照らす火は、何かを焼く火ではなく誰かを照らす火である。",icon:"default"},{id:"keyword-371-591c-660e-3051-8fce-3048",name:"夜明け迎え",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
火傷威力・回数または特殊火傷を付与する基本スキルでの与ダメージ量+10%
・当該スキルが憤怒属性スキルの場合、代わりにダメージ量+15%
火傷威力・回数または特殊火傷を付与する基本スキルのマッチ威力+1
・夜明け事務所所属人格なら、代わりに基本威力+1
ターン終了時に1減少`,flavor:`「闇雲に燃やすだけが全てというわけじゃない。こういう熱を扱う武器を振るうときは状況に応じて熱をいつ、どれだけ上げるかが重要なんだ。」
「儂が毎回、タイミングが重要だと言っている理由がそれだ。熱を扱う武器ならではの絶妙で繊細な感覚がある。だけど、持てる熱のすべてで焼き尽くすときには、全力を尽くすようーえ？その感覚に最も長けたフィクサーは誰かって？」
「ふむ…この分野で最高なのは、朱色の十字だろうな？」`,icon:"default"},{id:"keyword-372-591c-660e-3051-4e8b-52d9-6240",name:"夜明け事務所",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
数値1につき、攻撃レベルが1増加
数値が3なら、ターン開始時に精神力を5回復
ターン開始時、自分を除いて「夜明け事務所」を保有した味方人格が死亡したなら消滅

この鏡世界の夜明け事務所は他の鏡世界に比べ、まだ熱気が完全には冷めていない。そのため、事務所を支える二人の戦闘力は、1級フィクサーとして活動するにも不足のない水準として観測される。`,flavor:"しかし、事務所やフィクサーのランクまで他の鏡世界と変わっているわけではない。事務所とフィクサーランクは、戦闘力だけで決まるものではない。依頼ごとに求められる基準に合わせて仕事をきちんと処理できなかったり、ランク上昇に有意な影響を及ぼす高危険度の依頼を意図的に避けたりするなら、フィクサーのランクは上げたくても上げようがない。",icon:"default"},{id:"keyword-373-591c-660e-3051-304b-3089-5915-713c-3051-3078",name:"夜明けから夕焼けへ",type:"plus",color:"rgb(248, 194, 0)",description:`混乱区間が3個以上なら、最初の混乱区間を削除
ターン終了時に混乱状態なら混乱状態を解除し、人格同期化段階が3段階以上なら基本スキル1つをスキル3へ変更(強制混乱を除く。戦闘につき1回。ランクが最も低いスキルを優先)

ターン開始時に精神力を5回復
パッシブ「不安定な自我の殻」と基本攻撃スキルの効果、不安定な激情効果によって、精神力が25未満に減少しない

不安定E.G.O::蜜蝋の翼状態のとき、下記の効果を追加
・ターン開始時、最大体力の15%分バリアを得る
・バリアがある間に被撃時、攻撃者へ火傷1を付与(1ターンにつき2回)
・その場を灼熱地帯にする

※灼熱地帯効果
該当する場所にて発生した火傷ダメージをストックする
戦闘場所が変更されると初期化
この数値は全キャラで共有される`,flavor:`「ふっ。やはり香りが好いな。双和(サンファ)茶を淹れる腕だけは特色級だ。特色、黄色いサンファ…。」
「儂が横に付いて教えてやるから、しっかり付いてきてくれればいい。結局、全てはタイミングなんだが…双和茶から感じるこの絶妙なタイミングは、只者じゃないな。」`,icon:"default"},{id:"keyword-374-71c3-3048-305f-304e-308b-5915-713c-3051",name:"燃えたぎる夕焼け",type:"plus",color:"rgb(248, 194, 0)",description:`混乱区間が3個以上なら、最初の混乱区間を削除
ターン終了時に混乱状態なら混乱状態を解除し、人格同期化段階が3段階以上なら基本スキル1つをスキル3へ変更(強制混乱を除く。戦闘につき1回。ランクが最も低いスキルを優先)

ターン開始時に精神力を8回復
パッシブ「不安定な自我の殻」と基本攻撃スキルの効果、不安定な激情効果によって、精神力が45未満に減少しない

ターン開始時に不安定E.G.O::蜜蝋の翼状態になり、体力を最大値の50%だけ回復し、精神力を最大値まで回復(戦闘につき1回)
ターン開始時に精神力が0以下でも、不安定E.G.O::蜜蝋の翼状態が維持される

不安定E.G.O::蜜蝋の翼状態のとき、下記の効果を追加
・ターン開始時、最大体力の20%分バリアを得る
・バリアがある間に被撃時、攻撃者へ火傷2を付与(1ターンにつき2回)
・その場を灼熱地帯にする

※灼熱地帯効果
該当する場所にて発生した火傷ダメージをストックする
戦闘場所が変更されると初期化
この数値は全キャラで共有される`,flavor:`「まだ、教えてくださることが沢山残っているって…仰ったじゃないですか…。」
朝を切り開いた夜明けは、いつまでもその場所に留まらず、晩を告げる夕焼けを残して消えていく。`,icon:"default"},{id:"keyword-375-9003-8d70-88c5-7f6e",name:"逃走装置",type:"neutral",color:"rgb(161, 106, 59)",description:`体力が10になるダメージを受けると、そのターンのあいだ体力が10未満に減少しない
上記の効果が発動したターン終了時、混乱状態を解除して戦闘から離脱する(強制混乱を除く、死亡処理されない)
連続戦闘の場合、退却時に待機人員へ自分のスロット数を渡して交代し、待機人員リストの最後へ移動
(次のターンに交代可能な待機人員いなければ離脱する。復帰時は退却順に復帰)
戦闘復帰時に自分に付与された一部効果を覗いた全効果を除去、退却時の体力と精神力が維持される
(精神力が0未満なら、0に初期化)`,flavor:"「…生き残れ。」",icon:"default"},{id:"keyword-376-708e-8776-306e-68fa",name:"炎蝶の棺",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 30
1ターンにつき最大20まで得られる
基本スキル的中時、数値が2増加
ターン終了時に数値が20を超過しているなら、超過した数値の半分だけ次のターンに火傷を得る(小数点切り捨て)
・数値が30なら、代わりに火傷5を得て火傷回数が2増加`,flavor:`棺の中で熱せられた蝶たちが、襲いかかるように飛び出して対象を融かし、斬り裂く。
「シンクレアにはまだ早い武器ですが、特性は把握しておく方が良いでしょう。」
「棺の中の複数の刃は、通常は単独での対処が不可能である一刻を争う状況、あるいは多数を相手取る戦闘において、高い利便性をもたらします。」`,icon:"default"},{id:"keyword-377-6226-95d8-611f-899a",name:"戦闘感覚",type:"plus",color:"rgb(248, 194, 0)",description:`最大値 : 3
速度の最小・最大値+2
敵への基本スキルで付与する火傷威力と火傷回数の付与値+1
スキル「射出」のダメージ量+(数値×5)%
スキル「射出-正午」、「正午の解体」のダメージ量+(数値×10)%`,flavor:`「本論に戻ると、特異点以外にも装備によって発生するペナルティを克服できる確実な方法が一つあります。それが努力です。」
「陳腐な話に聞こえるかもしれませんが、休憩時間であっても依頼を遂行している最中であっても、基礎的な体力鍛錬と戦闘に対するセンスを磨くことをお勧めします。」
「もちろん戦闘に対する感覚は、ほとんどの場合、戦闘が佳境に入ってからようやくその真価を完全に発揮します。いわゆる予熱が必要ということです。そのように高められた戦闘感覚は、装備と技術が持つ構造的な欠点を補ってくれます。シンクレア、あなたの実力の下限を引き上げる方法です。理解できましたか？」`,icon:"default"},{id:"keyword-378-904e-71b1-3055-308c-305f-68fa",name:"過熱された棺",type:"minus",color:"rgb(227, 0, 0)",description:`最大値 : 1
ターン終了時、次のターンに火傷3を得て消滅`,flavor:`「ですが、便利さには常に代償がつきまといます。通常形態のスティグマ工房製武器にはない、構造的なペナルティが生じてしまいます。この必然的なペナルティを克服可能にしてくれるものこそ、都市技術の頂点にある特異点です。」
「特異点がどれほど凄いものかご存じでしょう…こほん。話が逸れましたね。」`,icon:"default"},{id:"keyword-379-6b63-5348",name:"正午",type:"plus",color:"rgb(248, 194, 0)",description:`速度最小値+2
基本攻撃スキル使用時、基本威力+2、ダメージ量+(45÷コイン数)%

「茜さす剣」に下記の効果を追加
・最終コイン的中時、対象の火傷が15以上なら対象の火傷を発動。対象の火傷回数が1減少

「燃えたぎる一撃」に下記の効果を追加
・ダメージ量+100%
・使用時、全コインが破壊不能コインへ変更される
・敵へ攻撃的中時、対象の火傷を発動。対象の火傷回数が1減少
・不安定な激情が3以上なら、使用時に灼熱地帯を最大100消耗
・消耗した数値1につき、ダメージ量+1%(最大100%)

※灼熱地帯効果
該当する場所にて発生した火傷ダメージをストックする
戦闘場所が変更されると初期化
この数値は全キャラで共有される`,flavor:"「依頼が早く終わりましたね。そして、良い天気です。みんなで昼食を食べに行きましょう。」",icon:"default"},{id:"keyword-380-5b64-72ec-306a-6b63-5348",name:"孤独な正午",type:"plus",color:"rgb(248, 194, 0)",description:`速度最小値+2
基本攻撃スキル使用時、基本威力+3、ダメージ量+(90÷コイン数)%

「茜さす剣」に下記の効果を追加
・最終コイン的中時、対象の火傷が15以上なら対象の火傷を発動。対象の火傷回数が1減少

「燃えたぎる一撃」に下記の効果を追加
・ダメージ量+150%
・使用時、全コインが破壊不能コインへ変更される
・敵へ攻撃的中時、対象の火傷を発動。対象の火傷回数が1減少
・使用時に灼熱地帯を最大100消耗し、消耗した数値1につきダメージ量+1.5%(最大150%)

このターンに体力が0になるダメージを受けたとき、ダメージによる混乱状態を解除し、そのターンのあいだ体力が1未満に減少しない。(戦闘につき1回)

※灼熱地帯効果
該当する場所にて発生した火傷ダメージをストックする
戦闘場所が変更されると初期化
この数値は全キャラで共有される`,flavor:"「孤独とは何かをご存じですか？去ってしまった人とは陽が最も高く昇る時分に、もう一緒に食事をすることができないとうこと…。私にとっては、それが孤独でした。できることなら…シンクレア、あなたにだけは孤独というものを理解する日が来ないことを願います。」",icon:"default"},{id:"keyword-381-707c-71b1-5730-5e2f",name:"灼熱地帯",type:"neutral",color:"rgb(161, 106, 59)",description:`最大値 : 999
該当する場所にて発生した火傷ダメージをストックする
戦闘場所が変更されると初期化
この数値は全キャラで共有される
(現在の数値 : X)`,flavor:"",icon:"default"}],Z="keywords-plus-minus-neutral-v1",se={plus:"プラス",minus:"マイナス",neutral:"ニュートラル"},N={plus:"rgb(248, 194, 0)",minus:"rgb(227, 0, 0)",neutral:"rgb(161, 106, 59)"},F={plus:"#f8c200",minus:"#e30000",neutral:"#a16a3b"};function Q(t){if(!t)return"#a16a3b";if(/^#[0-9A-Fa-f]{6}$/.test(t))return t.toLowerCase();const e=t.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);return e?"#"+[e[1],e[2],e[3]].map(s=>parseInt(s).toString(16).padStart(2,"0")).join(""):t}function W(t,e=""){if(t==="plus"||t==="minus"||t==="neutral")return t;const s=oe.find(o=>o.name===e);return s?s.type:t==="buff"?"plus":t==="debuff"||t==="status"?"minus":"neutral"}function U(t){const e=W(t.type,t.name);return{...t,type:e,color:N[e],icon:t.icon||"default",flavor:t.flavor||""}}function X(t){return se[W(t)]||"キーワード"}function ie(){localStorage.getItem("limbus_dictionary_version")!==Z&&(localStorage.setItem("limbus_dictionary",JSON.stringify(oe)),localStorage.setItem("limbus_dictionary_version",Z))}function A(){return ie(),JSON.parse(localStorage.getItem("limbus_dictionary")).map(U)}function R(t){localStorage.setItem("limbus_dictionary",JSON.stringify(t.map(U))),localStorage.setItem("limbus_dictionary_version",Z)}function de(t){const e=A(),s={id:"term-"+Date.now()+"-"+Math.random().toString(36).substr(2,9),...t};return e.push(s),R(e),s}function ce(t,e){let s=A();s=s.map(o=>o.id===t?{...o,...e}:o),R(s)}function pe(t){let e=A();e=e.filter(s=>s.id!==t),R(e)}const ee={"preset-wind":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M2 12h14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2h-2c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.8-1.2 3.3-2.8 3.8l.6 1.9C21.4 14.2 23 12.3 23 10c0-3.9-3.1-7-7-7s-7 3.1-7 7H2v2zm16 4h-2c0 1.1-.9 2-2 2s-2-.9-2-2H8c0 2.2 1.8 4 4 4s4-1.8 4-4 1.8-4 4-4v2c-1.1 0-2 .9-2 2z"/></svg>',"preset-blood":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',"preset-fire":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 23c-4.41 0-8-3.59-8-8 0-4.04 4-9.33 8-13.62 4 4.29 8 9.58 8 13.62 0 4.41-3.59 8-8 8zm0-18.73c-2.83 3.25-6 7.42-6 10.73 0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.31-3.17-7.48-6-10.73z"/></svg>',"preset-sinking":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',"preset-tremor":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48l2.12 2.12M18.36 5.64l-2.12 2.12M7.76 16.24l-2.12 2.12M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>',"preset-rupture":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5l7 2.5z"/></svg>',"preset-charge":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>',"preset-haste":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/></svg>',"preset-protection":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',"preset-dmg-up":'<svg class="term-link-icon" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',default:'<svg class="term-link-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>'};function re(t){return ee[t]||ee.default}function B(t,e=[]){if(!t)return"";let s=t.replace(/\n/g,"<br>");const o=e.map(U),r=A(),l=[...o,...r],y=new Map;return l.forEach(h=>{y.set(h.name,h)}),s.replace(/\[\[([^\]]+)\]\]/g,(h,S)=>{const E=y.get(S);if(E){const k=re(E.icon);return`<span class="term-link" style="color: ${E.color};" data-term-id="${E.id}" data-term-name="${E.name}" data-term-desc="${E.description.replace(/"/g,"&quot;")}" data-term-flavor="${(E.flavor||"").replace(/"/g,"&quot;")}" data-term-type="${E.type}">${k}${E.name}</span>`}return S})}function P(t,e,s=[]){let o=e.querySelector(".autocomplete-suggestions");o||(o=document.createElement("div"),o.className="autocomplete-suggestions",e.appendChild(o));let r=-1,l=[],y=-1;t.addEventListener("input",p=>{const m=t.value,w=t.selectionStart,L=m.slice(0,w),a=L.lastIndexOf("@");if(a!==-1){const i=L.slice(a+1);if(!/\s/.test(i)){y=a;const d=i.toLowerCase(),f=A(),n=[...s,...f],u=[],v=new Set;if(n.forEach(c=>{v.has(c.name)||(v.add(c.name),u.push(c))}),l=u.filter(c=>c.name.toLowerCase().includes(d)),l.length>0){E(l),h();return}}}S()}),t.addEventListener("keydown",p=>{o.style.display==="block"&&(p.key==="ArrowDown"?(p.preventDefault(),r=(r+1)%l.length,k()):p.key==="ArrowUp"?(p.preventDefault(),r=(r-1+l.length)%l.length,k()):p.key==="Enter"?(p.preventDefault(),r>=0&&r<l.length?$(l[r]):l.length>0&&$(l[0])):p.key==="Escape"&&(p.preventDefault(),S()))}),t.addEventListener("blur",()=>{setTimeout(S,200)});function h(){o.style.display="block",t.getBoundingClientRect(),t.parentElement.getBoundingClientRect(),o.style.left="12px",o.style.top=`${t.offsetHeight}px`,r=-1}function S(){o.style.display="none",r=-1}function E(p){o.innerHTML="",p.forEach((m,w)=>{const L=document.createElement("div");L.className="autocomplete-suggestion-item",w===r&&L.classList.add("active");const a=X(m.type);L.innerHTML=`
        <span style="color: ${m.color}; font-weight: 700;">${m.name}</span>
        <span class="suggestion-type">${a}</span>
      `,L.addEventListener("mousedown",i=>{i.preventDefault(),$(m)}),o.appendChild(L)})}function k(){o.querySelectorAll(".autocomplete-suggestion-item").forEach((m,w)=>{w===r?(m.classList.add("active"),m.scrollIntoView({block:"nearest"})):m.classList.remove("active")})}function $(p){const m=t.value,w=t.selectionStart,L=m.slice(0,y),a=m.slice(w);t.value=L+`[[${p.name}]]`+a;const i=y+p.name.length+4;t.setSelectionRange(i,i),S(),t.dispatchEvent(new Event("input"))}}let J=null;function ue(t){let e=document.getElementById("global-term-tooltip");e||(e=document.createElement("div"),e.id="global-term-tooltip",e.className="term-tooltip",document.body.appendChild(e)),t.addEventListener("mouseover",o=>{const r=o.target.closest(".term-link");if(r){const l=r.getAttribute("data-term-name"),y=r.getAttribute("data-term-desc"),h=r.getAttribute("data-term-flavor"),S=r.getAttribute("data-term-type"),E=r.style.color,k=X(S);let $="";h&&($=`<div class="term-tooltip-flavor" style="font-style: italic; color: var(--text-muted); margin-top: 8px; border-top: 1px dashed var(--border-color); padding-top: 6px;">${h}</div>`),e.innerHTML=`
        <div class="term-tooltip-title" style="color: ${E};">${l}</div>
        <div class="term-tooltip-type">${k}</div>
        <div class="term-tooltip-desc">${y}</div>
        ${$}
      `,e.classList.add("visible"),J=r,s(o,e)}}),t.addEventListener("mousemove",o=>{J&&s(o,e)}),t.addEventListener("mouseout",o=>{const r=o.target.closest(".term-link");r&&J===r&&(e.classList.remove("visible"),J=null)});function s(o,r){let y=o.clientX+15,h=o.clientY+15;const S=r.getBoundingClientRect();y+S.width>window.innerWidth&&(y=o.clientX-S.width-15),h+S.height>window.innerHeight&&(h=o.clientY-S.height-15),r.style.left=`${y+window.scrollX}px`,r.style.top=`${h+window.scrollY}px`}}function fe(t){A(),t.innerHTML=`
    <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
      <h3 style="color: var(--gold-primary);">登録キーワード一覧</h3>
      <button class="btn btn-primary btn-sm" id="btn-add-new-term">+ 新規キーワード追加</button>
    </div>
    
    <div id="term-form-container" style="display: none; background: var(--panel-bg-alt); padding: 16px; border: 1px solid var(--border-color); margin-bottom: 16px; border-radius: 4px;">
      <h4 id="term-form-title" style="margin-bottom: 12px; color: var(--gold-primary);">新規キーワード登録</h4>
      <input type="hidden" id="edit-term-id">
      
      <div class="form-group">
        <label>キーワード名</label>
        <input type="text" id="term-name-input" class="form-control" placeholder="例: 出血">
      </div>
      
      <div class="form-row-grid">
        <div class="form-group">
          <label>種別</label>
          <select id="term-type-input" class="form-control">
            <option value="plus">プラス</option>
            <option value="minus">マイナス</option>
            <option value="neutral">ニュートラル</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>表示カラー</label>
          <div style="display: flex; gap: 8px; align-items: center;">
            <input type="color" id="term-color-input" class="form-control" style="width: 50px; padding: 2px; height: 38px;" value="#a16a3b">
            <input type="text" id="term-color-text" class="form-control" placeholder="#ffd54f" value="rgb(161, 106, 59)" style="flex: 1;">
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
      
      <div class="form-group">
        <label>フレーバーテキスト（任意）</label>
        <textarea id="term-flavor-input" class="form-control" placeholder="世界観・設定のフレーバーテキストを入力（任意）" rows="2"></textarea>
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
  `;const e=t.querySelector("#term-form-container"),s=t.querySelector("#term-form-title"),o=t.querySelector("#edit-term-id"),r=t.querySelector("#term-name-input"),l=t.querySelector("#term-type-input"),y=t.querySelector("#term-color-input"),h=t.querySelector("#term-color-text"),S=t.querySelector("#term-icon-input"),E=t.querySelector("#term-desc-input"),k=t.querySelector("#term-flavor-input"),$=t.querySelector("#dict-table-body");y.addEventListener("input",m=>{h.value=m.target.value}),h.addEventListener("input",m=>{const w=Q(m.target.value);/^#[0-9A-Fa-f]{6}$/.test(w)&&(y.value=w)}),l.addEventListener("change",m=>{const w=W(m.target.value);y.value=F[w]||F.neutral,h.value=N[w]||N.neutral});function p(){const m=A();$.innerHTML="",m.forEach(w=>{const L=document.createElement("tr"),a=X(w.type);L.innerHTML=`
        <td>
          <span style="color: ${w.color}; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
            ${re(w.icon)}${w.name}
          </span>
        </td>
        <td>${a}</td>
        <td>
          <span class="color-preview-circle" style="background-color: ${w.color};"></span>
          <code>${w.color}</code>
        </td>
        <td style="text-align: right;">
          <button class="btn btn-sm btn-edit-term" data-id="${w.id}" style="margin-right: 4px;">編集</button>
          <button class="btn btn-danger btn-sm btn-delete-term" data-id="${w.id}">削除</button>
        </td>
      `,$.appendChild(L)}),$.querySelectorAll(".btn-edit-term").forEach(w=>{w.addEventListener("click",()=>{const L=w.getAttribute("data-id"),a=m.find(i=>i.id===L);a&&(o.value=a.id,r.value=a.name,l.value=a.type,y.value=Q(a.color),h.value=a.color,S.value=a.icon||"default",E.value=a.description,k.value=a.flavor||"",s.textContent="キーワードの編集",e.style.display="block")})}),$.querySelectorAll(".btn-delete-term").forEach(w=>{w.addEventListener("click",()=>{const L=w.getAttribute("data-id"),a=m.find(i=>i.id===L);a&&confirm(`キーワード「${a.name}」を削除しますか？`)&&(pe(L),p())})})}t.querySelector("#btn-add-new-term").addEventListener("click",()=>{o.value="",r.value="",l.value="neutral",y.value=F.neutral,h.value=N.neutral,S.value="default",E.value="",k.value="",s.textContent="新規キーワード登録",e.style.display="block"}),t.querySelector("#btn-cancel-term").addEventListener("click",()=>{e.style.display="none"}),t.querySelector("#btn-save-term").addEventListener("click",()=>{const m=r.value.trim();if(!m){alert("キーワード名を入力してください。");return}const w=W(l.value,m),L=h.value.trim(),a=L.startsWith("rgb")?L:N[w],i={name:m,type:w,color:a,icon:S.value,description:E.value.trim(),flavor:k.value.trim()},d=o.value;if(d)ce(d,i);else{if(A().some(n=>n.name===m)){alert("すでに同じ名前のキーワードが登録されています。");return}de(i)}e.style.display="none",p()}),p()}const ve=["イサン","ファウスト","ドンキホーテ","良秀","ムルソー","ホンル","ヒースクリフ","イシュメール","ロージャ","シンクレア","ウーティス","グレゴール"];function be(t,e,s){window._listFilterState||(window._listFilterState={search:"",sinner:"all",sort:"updated_desc"});const o=window._listFilterState,r=()=>{let k=[...e];if(o.search){const p=o.search.toLowerCase();k=k.filter(m=>(m.name||"").toLowerCase().includes(p)||(m.team||"").toLowerCase().includes(p)||(m.keywords||[]).some(w=>w.toLowerCase().includes(p)))}o.sinner!=="all"&&(k=k.filter(p=>p.prisoner===o.sinner)),k.sort((p,m)=>o.sort==="updated_desc"?new Date(m.updatedAt||0)-new Date(p.updatedAt||0):o.sort==="updated_asc"?new Date(p.updatedAt||0)-new Date(m.updatedAt||0):o.sort==="name_asc"?(p.name||"").localeCompare(m.name||"","ja"):0);const $=t.querySelector("#identity-grid-container");if($){if(k.length===0){$.innerHTML=`
        <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-muted); background: var(--panel-bg); border: 1px solid var(--border-color);">
          該当するキャラクターが見つかりません。新規作成するか、JSONファイルをインポートしてください。
        </div>
      `;return}$.innerHTML=k.map(p=>{var L,a,i,d,f,n,u,v;const m=p.image?`background-image: url('${p.image}');`:"",w=p.updatedAt?new Date(p.updatedAt).toLocaleString("ja-JP",{hour12:!1}):"不明";return`
        <div class="identity-card" data-id="${p.id}">
          <div class="identity-card-image" style="${m}">
            ${p.image?"":`<div class="identity-card-image-placeholder">${p.prisoner||"イサン"}</div>`}
            <div class="identity-card-tag">${p.prisoner||"未設定"}</div>
          </div>
          <div class="identity-card-info">
            <h3 class="identity-card-title">${p.name||"（名称未設定）"}</h3>
            <div class="identity-card-subtitle">${p.team||"所属・チーム未設定"}</div>
            
            <div class="identity-card-meta">
              <span>スキル: ${(((a=(L=p.skills)==null?void 0:L.skill1)==null?void 0:a.length)||0)+(((d=(i=p.skills)==null?void 0:i.skill2)==null?void 0:d.length)||0)+(((n=(f=p.skills)==null?void 0:f.skill3)==null?void 0:n.length)||0)} / 守備: ${((v=(u=p.skills)==null?void 0:u.defense)==null?void 0:v.length)||0}</span>
              <span>更新: ${w.split(" ")[0]}</span>
            </div>
          </div>
          <div class="identity-card-actions">
            <button class="btn-open-edit" title="編集"><svg class="icon" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> 編集</button>
            <button class="btn-open-preview" title="プレビュー"><svg class="icon" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg> 表示</button>
            <button class="btn-duplicate" title="複製"><svg class="icon" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></button>
            <button class="btn-delete btn-danger" title="削除"><svg class="icon" viewBox="0 0 24 24" style="fill: #ff5252;"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
          </div>
        </div>
      `}).join(""),$.querySelectorAll(".identity-card").forEach(p=>{const m=p.getAttribute("data-id");p.querySelector(".btn-open-edit").addEventListener("click",()=>s.onEdit(m)),p.querySelector(".btn-open-preview").addEventListener("click",()=>s.onPreview(m)),p.querySelector(".btn-duplicate").addEventListener("click",()=>s.onDuplicate(m)),p.querySelector(".btn-delete").addEventListener("click",()=>{const w=e.find(L=>L.id===m);w&&confirm(`キャラクター「${w.name||"無題"}」を削除しますか？
（この操作は取り消せません）`)&&s.onDelete(m)})})}},l=ve.map(k=>`<option value="${k}" ${o.sinner===k?"selected":""}>${k}</option>`).join("");t.innerHTML=`
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
          <input type="text" id="search-input" class="search-input" placeholder="名前、所属、キーワードで検索..." value="${o.search}">
          
          <select id="sinner-filter" class="filter-select">
            <option value="all" ${o.sinner==="all"?"selected":""}>すべての囚人</option>
            ${l}
          </select>
          
          <select id="sort-select" class="filter-select">
            <option value="updated_desc" ${o.sort==="updated_desc"?"selected":""}>最終更新（新しい順）</option>
            <option value="updated_asc" ${o.sort==="updated_asc"?"selected":""}>最終更新（古い順）</option>
            <option value="name_asc" ${o.sort==="name_asc"?"selected":""}>名前順（昇順）</option>
          </select>
        </div>
      </div>

      <div class="identity-grid" id="identity-grid-container">
        <!-- Rendered items go here -->
      </div>
    </div>

    <!-- Hidden file input for JSON import -->
    <input type="file" id="json-file-input" accept=".json" style="display: none;">
  `;const y=t.querySelector("#search-input"),h=t.querySelector("#sinner-filter"),S=t.querySelector("#sort-select");y.addEventListener("input",k=>{o.search=k.target.value,r()}),h.addEventListener("change",k=>{o.sinner=k.target.value,r()}),S.addEventListener("change",k=>{o.sort=k.target.value,r()}),t.querySelector("#btn-create-new").addEventListener("click",()=>s.onCreateNew()),t.querySelector("#btn-open-global-dict").addEventListener("click",()=>s.onOpenDict());const E=t.querySelector("#json-file-input");t.querySelector("#btn-import-json").addEventListener("click",()=>{E.click()}),E.addEventListener("change",k=>{const $=k.target.files[0];if($){const p=new FileReader;p.onload=m=>{try{const w=JSON.parse(m.target.result);s.onImportJSON(w)}catch{alert("JSONファイルの解析に失敗しました。正しいフォーマットか確認してください。")}},p.readAsText($),E.value=""}}),r()}const ye=["イサン","ファウスト","ドンキホーテ","良秀","ムルソー","ホンル","ヒースクリフ","イシュメール","ロージャ","シンクレア","ウーティス","グレゴール"],te=[{value:"wrath",label:"憤怒 (赤)"},{value:"lust",label:"色欲 (橙)"},{value:"sloth",label:"怠惰 (黄)"},{value:"gluttony",label:"暴食 (緑)"},{value:"gloom",label:"憂鬱 (水色)"},{value:"pride",label:"傲慢 (青)"},{value:"envy",label:"嫉妬 (紫)"}];function me(t,e,s,o){let r="builder-tab-s1";const l=e.dictionary||[];t.innerHTML=`
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
  `;const y=()=>{const i=t.querySelector("#builder-left-panel");if(!i)return;const d=ye.map(b=>`<option value="${b}" ${e.prisoner===b?"selected":""}>${b}</option>`).join(""),f=e.image?`background-image: url('${e.image}');`:"";i.innerHTML=`
      <div class="panel-title">基本情報</div>
      
      <!-- Image Uploader -->
      <div class="form-group">
        <label>キャラクター画像</label>
        <div class="image-uploader ${e.image?"has-image":""}" id="image-upload-area" style="${f}">
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
            ${d}
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
    `;const n=i.querySelector("#image-upload-area"),u=i.querySelector("#char-image-input"),v=i.querySelector("#btn-delete-image");n.addEventListener("click",b=>{b.target!==v&&u.click()}),u.addEventListener("change",b=>{const I=b.target.files[0];if(I){const x=new FileReader;x.onload=M=>{e.image=M.target.result,n.style.backgroundImage=`url('${e.image}')`,n.classList.add("has-image"),a()},x.readAsDataURL(I)}}),v.addEventListener("click",b=>{b.stopPropagation(),e.image=null,n.style.backgroundImage="",n.classList.remove("has-image"),u.value="",a()}),i.querySelector("#char-name").addEventListener("input",b=>{e.name=b.target.value,a()}),i.querySelector("#char-prisoner").addEventListener("change",b=>{e.prisoner=b.target.value,a()}),i.querySelector("#char-team").addEventListener("input",b=>{e.team=b.target.value,a()}),i.querySelector("#char-hp").addEventListener("input",b=>{e.stats.hp=parseInt(b.target.value)||0,E(),a()}),i.querySelector("#char-speed-min").addEventListener("input",b=>{e.stats.speedMin=parseInt(b.target.value)||0,a()}),i.querySelector("#char-speed-max").addEventListener("input",b=>{e.stats.speedMax=parseInt(b.target.value)||0,a()}),i.querySelector("#char-def-correction").addEventListener("input",b=>{e.stats.defCorrection=parseInt(b.target.value)||0,a()}),i.querySelector("#char-season").addEventListener("input",b=>{e.season=b.target.value,a()}),i.querySelector("#char-releasedate").addEventListener("change",b=>{e.releaseDate=b.target.value,a()}),["slash","pierce","strike"].forEach(b=>{const I=i.querySelector(`#res-type-${b}`),x=i.querySelector(`#res-val-${b}`);I.addEventListener("change",M=>{e.resistances[b]=M.target.value,M.target.value==="custom"?x.style.display="block":(x.style.display="none",e.resistances[`${b}Val`]={fatal:2,weak:1.5,normal:1,resist:.5,immune:0}[M.target.value]||1),a()}),x.addEventListener("input",M=>{e.resistances[`${b}Val`]=parseFloat(M.target.value)||1,a()})}),S(),i.querySelector("#btn-add-stagger").addEventListener("click",()=>{e.staggers=e.staggers||[],e.staggers.push(0),S(),a()}),k();const c=i.querySelector("#keyword-input"),T=()=>{const b=c.value.trim();b&&!e.keywords.includes(b)&&(e.keywords.push(b),c.value="",k(),a())};i.querySelector("#btn-add-keyword").addEventListener("click",T),c.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),T())})},h=(i,d,f,n)=>`
      <div class="form-group" style="margin-bottom: 12px;">
        <label>${i}耐性</label>
        <div style="display: flex; gap: 8px;">
          <select id="res-type-${d}" class="form-control" style="flex: 1;">
            <option value="normal" ${f==="normal"?"selected":""}>普通 (x1.0)</option>
            <option value="resist" ${f==="resist"?"selected":""}>耐性 (x0.5)</option>
            <option value="weak" ${f==="weak"?"selected":""}>弱点 (x1.5)</option>
            <option value="fatal" ${f==="fatal"?"selected":""}>脆弱 (x2.0)</option>
            <option value="immune" ${f==="immune"?"selected":""}>無効 (x0.0)</option>
            <option value="custom" ${f==="custom"?"selected":""}>カスタム入力</option>
          </select>
          <input type="number" step="0.1" id="res-val-${d}" class="form-control" style="width: 80px; display: ${f==="custom"?"block":"none"};" value="${n||1}">
        </div>
      </div>
    `,S=()=>{const i=t.querySelector("#stagger-inputs-container");i&&(e.staggers=e.staggers||[],i.innerHTML=e.staggers.map((d,f)=>{const n=e.stats.hp>0?Math.round(d/e.stats.hp*100):0;return`
        <div class="list-editor-item stagger-row-item" data-index="${f}">
          <input type="number" class="form-control stagger-value-input" value="${d}" style="flex: 1;">
          <span class="stagger-calc-percentage" style="min-width: 60px; font-weight: 600; color: var(--gold-primary); text-align: center;">(${n}%)</span>
          <button class="btn btn-sm btn-danger btn-remove-stagger"><svg class="icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>
        </div>
      `}).join(""),i.querySelectorAll(".stagger-row-item").forEach(d=>{const f=parseInt(d.getAttribute("data-index")),n=d.querySelector(".stagger-value-input"),u=d.querySelector(".stagger-calc-percentage");n.addEventListener("input",v=>{const c=parseInt(v.target.value)||0;e.staggers[f]=c;const T=e.stats.hp>0?Math.round(c/e.stats.hp*100):0;u.textContent=`(${T}%)`,a()}),d.querySelector(".btn-remove-stagger").addEventListener("click",()=>{e.staggers.splice(f,1),S(),a()})}))},E=()=>{t.querySelectorAll(".stagger-row-item").forEach(d=>{const f=d.querySelector(".stagger-value-input"),n=d.querySelector(".stagger-calc-percentage"),u=parseInt(f.value)||0,v=e.stats.hp>0?Math.round(u/e.stats.hp*100):0;n.textContent=`(${v}%)`})},k=()=>{const i=t.querySelector("#keywords-badges-container");i&&(i.innerHTML=e.keywords.map((d,f)=>`
      <span class="tag-badge">
        ${d}
        <span class="remove-tag" data-index="${f}">×</span>
      </span>
    `).join(""),i.querySelectorAll(".remove-tag").forEach(d=>{d.addEventListener("click",()=>{const f=parseInt(d.getAttribute("data-index"));e.keywords.splice(f,1),k(),a()})}))},$=()=>{const i=t.querySelector("#builder-right-panel");if(!i)return;i.innerHTML=`
      <div style="padding: 0 20px;">
        <div class="tabs-header" style="margin-bottom: 20px;">
          <button class="tab-link ${r==="builder-tab-s1"?"active":""}" data-target="builder-tab-s1">スキル1</button>
          <button class="tab-link ${r==="builder-tab-s2"?"active":""}" data-target="builder-tab-s2">スキル2</button>
          <button class="tab-link ${r==="builder-tab-s3"?"active":""}" data-target="builder-tab-s3">スキル3</button>
          <button class="tab-link ${r==="builder-tab-def"?"active":""}" data-target="builder-tab-def">守備</button>
          <button class="tab-link ${r==="builder-tab-passives"?"active":""}" data-target="builder-tab-passives">パッシブ・精神力</button>
        </div>
      </div>

      <div class="tab-content ${r==="builder-tab-s1"?"active":""}" id="builder-tab-s1" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">スキル1 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="skill1">+ スキル追加</button>
        </div>
        <div class="skills-editor-list" data-tab="skill1"></div>
      </div>

      <div class="tab-content ${r==="builder-tab-s2"?"active":""}" id="builder-tab-s2" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">スキル2 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="skill2">+ スキル追加</button>
        </div>
        <div class="skills-editor-list" data-tab="skill2"></div>
      </div>

      <div class="tab-content ${r==="builder-tab-s3"?"active":""}" id="builder-tab-s3" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">スキル3 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="skill3">+ スキル追加</button>
        </div>
        <div class="skills-editor-list" data-tab="skill3"></div>
      </div>

      <div class="tab-content ${r==="builder-tab-def"?"active":""}" id="builder-tab-def" style="padding: 0 20px;">
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="color: var(--gold-primary); font-size: 1.1rem;">守備スキル 編集</h3>
          <button class="btn btn-primary btn-sm btn-add-skill" data-tab="defense">+ 守備追加</button>
        </div>
        <div class="skills-editor-list" data-tab="defense"></div>
      </div>

      <div class="tab-content ${r==="builder-tab-passives"?"active":""}" id="builder-tab-passives" style="padding: 0 20px;">
        <!-- Passives & Panic & Sanity -->
        <div id="passives-editor-container"></div>
      </div>
    `;const d=i.querySelectorAll(".tab-link"),f=i.querySelectorAll(".tab-content");d.forEach(n=>{n.addEventListener("click",()=>{const u=n.getAttribute("data-target");r=u,d.forEach(v=>v.classList.remove("active")),f.forEach(v=>v.classList.remove("active")),n.classList.add("active"),i.querySelector(`#${u}`).classList.add("active")})}),i.querySelectorAll(".btn-add-skill").forEach(n=>{n.addEventListener("click",()=>{const u=n.getAttribute("data-tab"),v={id:"skill-"+Date.now()+"-"+Math.random().toString(36).substr(2,5),name:"",levelBonus:0,affinity:"sloth",atkType:"slash",defenseType:"defense",coins:1,unbreakableCoins:0,basePower:10,atkLevel:40,weight:1,effectText:"",flavorText:"",coinEffects:[{text:""}],tagMatchImpossible:!1,tagTargetIndistinguishable:!1,tagTargetImmutable:!1,specialTagsText:""};e.skills[u]=e.skills[u]||[],e.skills[u].push(v),p(u),a()})}),p("skill1"),p("skill2"),p("skill3"),p("defense"),w()},p=i=>{const d=t.querySelector(`.skills-editor-list[data-tab="${i}"]`);if(!d)return;const f=e.skills[i]||[];if(f.length===0){d.innerHTML='<div style="text-align: center; color: var(--text-muted); border: 1px dashed var(--border-color); padding: 24px; border-radius: 4px;">スキルが登録されていません。上のボタンから追加してください。</div>';return}d.innerHTML="",f.forEach((n,u)=>{const v=document.createElement("div");v.className="skill-editor-card",v.dataset.index=u;const c=te.map(g=>`<option value="${g.value}" ${n.affinity===g.value?"selected":""}>${g.label}</option>`).join("");let T="";for(let g=1;g<=10;g++)T+=`<option value="${g}" ${parseInt(n.weight)===g?"selected":""}>${g}</option>`;const b=i==="defense";v.innerHTML=`
        <div class="skill-editor-card-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="skill-drag-handle" style="display: none;">☰</span>
            <span style="font-weight: 700; color: var(--gold-primary);">#${u+1}</span>
            <h4 style="font-size: 1rem;">${n.name||"（名称未設定）"}</h4>
          </div>
          
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-sm btn-reorder-up" ${u===0?"disabled":""} title="上に移動">▲</button>
            <button class="btn btn-sm btn-reorder-down" ${u===f.length-1?"disabled":""} title="下に移動">▼</button>
            <button class="btn btn-danger btn-sm btn-delete-skill">削除</button>
          </div>
        </div>

        <div class="form-row-grid">
          <div class="form-group">
            <label>スキル名</label>
            <input type="text" class="form-control skill-name-input" value="${n.name||""}">
          </div>
          <div class="form-group">
            <label>罪悪属性</label>
            <select class="form-control skill-sin-select">
              ${c}
            </select>
          </div>
          ${b?`
            <div class="form-group">
              <label>守備タイプ</label>
              <select class="form-control skill-deftype-select">
                <option value="defense" ${n.defenseType==="defense"?"selected":""}>防御</option>
                <option value="evade" ${n.defenseType==="evade"?"selected":""}>回避</option>
                <option value="counter" ${n.defenseType==="counter"?"selected":""}>反撃</option>
                <option value="match_guard" ${n.defenseType==="match_guard"?"selected":""}>マッチ可能ガード</option>
                <option value="match_counter" ${n.defenseType==="match_counter"?"selected":""}>マッチ可能反撃</option>
              </select>
            </div>
          `:`
            <div class="form-group">
              <label>攻撃属性</label>
              <select class="form-control skill-atktype-select">
                <option value="slash" ${n.atkType==="slash"?"selected":""}>斬撃</option>
                <option value="pierce" ${n.atkType==="pierce"?"selected":""}>貫通</option>
                <option value="strike" ${n.atkType==="strike"?"selected":""}>打撃</option>
              </select>
            </div>
          `}
        </div>

        <!-- Conditional visibility: Attack attribute for Counters in defense tab -->
        ${b?`
          <div class="form-group counter-atktype-container" style="display: ${n.defenseType==="counter"||n.defenseType==="match_counter"?"block":"none"};">
            <label>反撃攻撃属性</label>
            <select class="form-control skill-atktype-select">
              <option value="slash" ${n.atkType==="slash"?"selected":""}>斬撃</option>
              <option value="pierce" ${n.atkType==="pierce"?"selected":""}>貫通</option>
              <option value="strike" ${n.atkType==="strike"?"selected":""}>打撃</option>
            </select>
          </div>
        `:""}

        <div class="form-row-grid">
          <div class="form-group">
            <label>ベース威力</label>
            <input type="number" class="form-control skill-basepower-input" value="${n.basePower||0}">
          </div>
          <div class="form-group">
            <label>コイン威力（±）</label>
            <input type="number" class="form-control skill-coinpower-input" value="${n.coinPower||0}">
          </div>
          <div class="form-group">
            <label>レベルボーナス</label>
            <input type="number" class="form-control skill-lvlbonus-input" value="${n.levelBonus||0}">
          </div>
          <div class="form-group">
            <label>攻撃加重値</label>
            <select class="form-control skill-weight-select">
              ${T}
            </select>
          </div>
        </div>

        <div class="form-row-grid">
          <div class="form-group">
            <label>コイン数</label>
            <input type="number" min="1" max="10" class="form-control skill-coin-count-input" value="${n.coins||1}">
          </div>
          <div class="form-group">
            <label>破壊不能コイン数（末尾）</label>
            <input type="number" min="0" max="${n.coins||1}" class="form-control skill-unbreakable-count-input" value="${n.unbreakableCoins||0}">
          </div>
        </div>

        <div class="form-group">
          <label>特殊タグ</label>
          <div style="display: flex; gap: 16px; margin-bottom: 8px; flex-wrap: wrap;">
            <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
              <input type="checkbox" class="skill-tag-match" ${n.tagMatchImpossible?"checked":""}> マッチ不可
            </label>
            <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
              <input type="checkbox" class="skill-tag-distinguish" ${n.tagTargetIndistinguishable?"checked":""}> 敵味方識別不可
            </label>
            <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
              <input type="checkbox" class="skill-tag-target" ${n.tagTargetImmutable?"checked":""}> 対象変更不可
            </label>
          </div>
          <input type="text" class="form-control skill-specialtags-text" placeholder="その他のタグを入力（カンマ区切り、例: ダメージ量増加, 充電）" value="${n.specialTagsText||""}">
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
            <textarea class="form-control skill-effect-textarea" rows="3" placeholder="スキル効果テキストを入力してください...">${n.effectText||""}</textarea>
          </div>
        </div>

        <div class="form-group">
          <label>フレーバーテキスト</label>
          <textarea class="form-control skill-flavor-textarea" rows="2" placeholder="世界観・設定のフレーバーテキストを入力（任意）">${n.flavorText||""}</textarea>
        </div>

        <!-- Coin Effects Textareas Container -->
        <div class="skill-coins-list">
          <label style="font-weight: 700; color: var(--gold-secondary); font-size: 0.85rem; display: block; margin-bottom: 8px;">各コインの効果</label>
          <div class="coin-effects-inputs">
            <!-- Dynamic coin textarea editors -->
          </div>
        </div>
      `,m(v,n),v.querySelector(".skill-name-input").addEventListener("input",g=>{n.name=g.target.value,v.querySelector("h4").textContent=g.target.value||"（名称未設定）",a()}),v.querySelector(".skill-sin-select").addEventListener("change",g=>{n.affinity=g.target.value,a()}),b&&v.querySelector(".skill-deftype-select").addEventListener("change",g=>{n.defenseType=g.target.value;const z=v.querySelector(".counter-atktype-container");n.defenseType==="counter"||n.defenseType==="match_counter"?z.style.display="block":z.style.display="none",a()}),v.querySelectorAll(".skill-atktype-select").forEach(g=>{g.addEventListener("change",z=>{n.atkType=z.target.value,a()})}),v.querySelector(".skill-basepower-input").addEventListener("input",g=>{n.basePower=parseInt(g.target.value)||0,a()}),v.querySelector(".skill-coinpower-input").addEventListener("input",g=>{n.coinPower=parseInt(g.target.value)||0,a()}),v.querySelector(".skill-lvlbonus-input").addEventListener("input",g=>{n.levelBonus=parseInt(g.target.value)||0,a()}),v.querySelector(".skill-weight-select").addEventListener("change",g=>{n.weight=parseInt(g.target.value)||1,a()});const x=v.querySelector(".skill-coin-count-input"),M=v.querySelector(".skill-unbreakable-count-input"),q=()=>{const g=Math.max(1,Math.min(10,parseInt(x.value)||1)),z=Math.max(0,Math.min(g,parseInt(M.value)||0));for(n.coins=g,n.unbreakableCoins=z,n.coinEffects=n.coinEffects||[];n.coinEffects.length<g;)n.coinEffects.push({text:""});n.coinEffects.length>g&&(n.coinEffects=n.coinEffects.slice(0,g)),x.value=g,M.max=g,M.value=z,m(v,n),a()};x.addEventListener("change",q),M.addEventListener("change",q),v.querySelector(".skill-tag-match").addEventListener("change",g=>{n.tagMatchImpossible=g.target.checked,a()}),v.querySelector(".skill-tag-distinguish").addEventListener("change",g=>{n.tagTargetIndistinguishable=g.target.checked,a()}),v.querySelector(".skill-tag-target").addEventListener("change",g=>{n.tagTargetImmutable=g.target.checked,a()}),v.querySelector(".skill-specialtags-text").addEventListener("input",g=>{n.specialTagsText=g.target.value,a()});const O=v.querySelector(".skill-effect-textarea");O.addEventListener("input",g=>{n.effectText=g.target.value,a()}),P(O,v.querySelector(".textarea-wrapper"),l),v.querySelector(".skill-flavor-textarea").addEventListener("input",g=>{n.flavorText=g.target.value,a()}),v.querySelectorAll(".shortcut-btn").forEach(g=>{g.addEventListener("click",z=>{z.preventDefault();let _=g.getAttribute("data-tag");if(g.classList.contains("btn-custom-shortcut")){const D=prompt(`カスタム条件タグを入力してください:
(例: [的中時], [使用前])`);if(D)_=D.startsWith("[")&&D.endsWith("]")?D:`[${D}]`;else return}const H=O.selectionStart,le=O.selectionEnd,K=O.value;O.value=K.substring(0,H)+_+K.substring(le),O.selectionStart=O.selectionEnd=H+_.length,n.effectText=O.value,O.focus(),O.dispatchEvent(new Event("input"))})}),v.querySelector(".btn-reorder-up").addEventListener("click",()=>{u>0&&(e.skills[i][u]=e.skills[i][u-1],e.skills[i][u-1]=n,p(i),a())}),v.querySelector(".btn-reorder-down").addEventListener("click",()=>{u<f.length-1&&(e.skills[i][u]=e.skills[i][u+1],e.skills[i][u+1]=n,p(i),a())}),v.querySelector(".btn-delete-skill").addEventListener("click",()=>{confirm("このスキルを削除しますか？")&&(e.skills[i].splice(u,1),p(i),a())}),d.appendChild(v)})},m=(i,d)=>{const f=i.querySelector(".coin-effects-inputs");if(!f)return;const n=parseInt(d.coins)||1,u=parseInt(d.unbreakableCoins)||0,v=["I","II","III","IV","V","VI","VII","VIII","IX","X"];f.innerHTML="";for(let c=0;c<n;c++){const T=c>=n-u,b=d.coinEffects&&d.coinEffects[c]?d.coinEffects[c].text:"",I=document.createElement("div");I.className="coin-effect-editor",I.innerHTML=`
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
          <span class="coin-num-badge" style="${T?"border-color: #ff5252; color: #ff5252;":""}">
            ${v[c]||c+1}
          </span>
          <span style="font-size: 0.8rem; font-weight: 700;">
            コイン ${c+1} 効果 ${T?'<strong style="color:#ff5252; margin-left:8px;">🔴破壊不能</strong>':""}
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
          <textarea class="form-control coin-desc-textarea" rows="2" placeholder="的中時の効果などを入力...">${b}</textarea>
        </div>
      `;const x=I.querySelector(".coin-desc-textarea");x.addEventListener("input",M=>{d.coinEffects=d.coinEffects||[],d.coinEffects[c]=d.coinEffects[c]||{text:""},d.coinEffects[c].text=M.target.value,a()}),P(x,I.querySelector(".textarea-wrapper"),l),I.querySelectorAll(".coin-shortcut-btn").forEach(M=>{M.addEventListener("click",q=>{q.preventDefault();let O=M.getAttribute("data-tag");if(M.classList.contains("btn-custom-coin-shortcut")){const H=prompt("カスタム条件タグを入力してください:");if(H)O=H.startsWith("[")&&H.endsWith("]")?H:`[${H}]`;else return}const g=x.selectionStart,z=x.selectionEnd,_=x.value;x.value=_.substring(0,g)+O+_.substring(z),x.selectionStart=x.selectionEnd=g+O.length,d.coinEffects[c].text=x.value,x.focus(),x.dispatchEvent(new Event("input"))})}),f.appendChild(I)}},w=()=>{var v,c,T,b;const i=t.querySelector("#passives-editor-container");if(!i)return;i.innerHTML=`
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
        <input type="text" id="panic-name-input" class="form-control" value="${((v=e.panic)==null?void 0:v.name)||"パニック"}">
      </div>
      <div class="form-group">
        <label>パニック効果 (@入力でサジェスト)</label>
        <div class="textarea-wrapper" id="panic-text-wrapper">
          <textarea id="panic-text-input" class="form-control" rows="2" placeholder="パニック効果を入力...">${((c=e.panic)==null?void 0:c.text)||"1ターンの間行動しない"}</textarea>
        </div>
      </div>

      <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-top: 32px; margin-bottom: 16px;">
        <h3 style="color: var(--gold-primary); font-size: 1.1rem;">精神力増減条件 (@入力でサジェスト)</h3>
      </div>
      <div class="form-row-grid">
        <div class="form-group">
          <label>基本精神力増加条件</label>
          <div class="textarea-wrapper" id="sanity-inc-wrapper">
            <textarea id="sanity-inc-input" class="form-control" rows="4" placeholder="精神力増加条件を入力...">${((T=e.sanity)==null?void 0:T.increase)||""}</textarea>
          </div>
        </div>
        <div class="form-group">
          <label>基本精神力減少条件</label>
          <div class="textarea-wrapper" id="sanity-dec-wrapper">
            <textarea id="sanity-dec-input" class="form-control" rows="4" placeholder="精神力減少条件を入力...">${((b=e.sanity)==null?void 0:b.decrease)||""}</textarea>
          </div>
        </div>
      </div>
    `,L("passives","passives-list-editor"),L("supportPassives","supports-list-editor"),i.querySelector("#btn-add-passive").addEventListener("click",()=>{e.passives=e.passives||[],e.passives.push({name:"",type:"own",count:1,affinity:"sloth",text:"",flavorText:""}),L("passives","passives-list-editor"),a()}),i.querySelector("#btn-add-support").addEventListener("click",()=>{e.supportPassives=e.supportPassives||[],e.supportPassives.push({name:"",type:"resonance",count:1,affinity:"sloth",text:"",flavorText:""}),L("supportPassives","supports-list-editor"),a()});const d=i.querySelector("#panic-name-input"),f=i.querySelector("#panic-text-input");d.addEventListener("input",I=>{e.panic=e.panic||{},e.panic.name=I.target.value,a()}),f.addEventListener("input",I=>{e.panic=e.panic||{},e.panic.text=I.target.value,a()}),P(f,i.querySelector("#panic-text-wrapper"),l);const n=i.querySelector("#sanity-inc-input"),u=i.querySelector("#sanity-dec-input");n.addEventListener("input",I=>{e.sanity=e.sanity||{},e.sanity.increase=I.target.value,a()}),P(n,i.querySelector("#sanity-inc-wrapper"),l),u.addEventListener("input",I=>{e.sanity=e.sanity||{},e.sanity.decrease=I.target.value,a()}),P(u,i.querySelector("#sanity-dec-wrapper"),l)},L=(i,d)=>{const f=t.querySelector(`#${d}`);if(!f)return;const n=e[i]||[];if(n.length===0){f.innerHTML='<div style="text-align: center; color: var(--text-muted); border: 1px dashed var(--border-color); padding: 16px; border-radius: 4px; font-size: 0.85rem;">パッシブが追加されていません</div>';return}f.innerHTML="",n.forEach((u,v)=>{const c=document.createElement("div");c.className="skill-editor-card",c.style.padding="12px",c.style.marginBottom="12px";const T=te.map(q=>`<option value="${q.value}" ${u.affinity===q.value?"selected":""}>${q.label}</option>`).join("");c.innerHTML=`
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong style="color: var(--gold-secondary); font-size: 0.9rem;">パッシブ #${v+1}</strong>
          <button class="btn btn-danger btn-sm btn-delete-passive">削除</button>
        </div>
        <div class="form-row-grid">
          <div class="form-group">
            <label>パッシブ名</label>
            <input type="text" class="form-control passive-name-input" value="${u.name||""}">
          </div>
          <div class="form-group" style="min-width: 140px;">
            <label>発動条件</label>
            <div style="display: flex; gap: 4px;">
              <select class="form-control passive-type-select" style="flex: 1;">
                <option value="resonance" ${u.type==="resonance"?"selected":""}>共鳴</option>
                <option value="own" ${u.type==="own"?"selected":""}>保有</option>
                <option value="none" ${u.type==="none"?"selected":""}>なし</option>
              </select>
              <input type="number" min="1" class="form-control passive-count-input" style="width: 50px; display: ${u.type==="none"?"none":"block"};" value="${u.count||1}">
            </div>
          </div>
          <div class="form-group passive-affinity-container" style="display: ${u.type==="none"?"none":"block"};">
            <label>罪悪属性</label>
            <select class="form-control passive-affinity-select">
              ${T}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>効果テキスト (@入力でサジェスト)</label>
          <div class="textarea-wrapper">
            <textarea class="form-control passive-desc-textarea" rows="2" placeholder="パッシブ効果テキスト...">${u.text||""}</textarea>
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label>フレーバーテキスト</label>
          <textarea class="form-control passive-flavor-textarea" rows="1" placeholder="フレーバーテキストを入力（任意）">${u.flavorText||""}</textarea>
        </div>
      `,c.querySelector(".passive-name-input").addEventListener("input",q=>{u.name=q.target.value,a()});const b=c.querySelector(".passive-type-select"),I=c.querySelector(".passive-count-input"),x=c.querySelector(".passive-affinity-container");b.addEventListener("change",q=>{u.type=q.target.value,u.type==="none"?(I.style.display="none",x.style.display="none"):(I.style.display="block",x.style.display="block"),a()}),I.addEventListener("input",q=>{u.count=parseInt(q.target.value)||1,a()}),c.querySelector(".passive-affinity-select").addEventListener("change",q=>{u.affinity=q.target.value,a()});const M=c.querySelector(".passive-desc-textarea");M.addEventListener("input",q=>{u.text=q.target.value,a()}),P(M,c.querySelector(".textarea-wrapper"),l),c.querySelector(".passive-flavor-textarea").addEventListener("input",q=>{u.flavorText=q.target.value,a()}),c.querySelector(".btn-delete-passive").addEventListener("click",()=>{confirm("このパッシブを削除しますか？")&&(e[i].splice(v,1),L(i,d),a())}),f.appendChild(c)})};t.querySelector("#btn-back").addEventListener("click",o),t.querySelector("#btn-save-character").addEventListener("click",()=>{var T,b,I;const i=`${e.name||"limbus_identity"}.json`,d=new Set,f=x=>{if(!x)return;const M=x.match(/\[\[([^\]]+)\]\]/g);M&&M.forEach(q=>{const O=q.slice(2,-2);d.add(O)})};f((T=e.panic)==null?void 0:T.text),f((b=e.sanity)==null?void 0:b.increase),f((I=e.sanity)==null?void 0:I.decrease),Object.values(e.skills).flat().forEach(x=>{f(x.effectText),x.coinEffects&&x.coinEffects.forEach(M=>f(M.text))}),e.passives&&e.passives.forEach(x=>f(x.text)),e.supportPassives&&e.supportPassives.forEach(x=>f(x.text));const u=(JSON.parse(localStorage.getItem("limbus_dictionary"))||[]).filter(x=>d.has(x.name));e.dictionary=u;const v="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),c=document.createElement("a");c.setAttribute("href",v),c.setAttribute("download",i),document.body.appendChild(c),c.click(),c.remove()});function a(){e.updatedAt=new Date().toISOString(),s(e)}y(),$()}const V={slash:`
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
      <path d="M35,20 L65,20 C65,20 65,50 50,68 C35,50 35,20 35,20 Z" fill="currentColor" opacity="0.6"/>
      <path d="M25,75 L75,25 L80,30 L30,80 Z" fill="currentColor"/>
      <path d="M20,80 L30,70 M15,75 L25,65" stroke="currentColor" stroke-width="5"/>
      <circle cx="72" cy="28" r="16" fill="#141211" stroke="currentColor" stroke-width="2"/>
      <path d="M72,20 L72,36 M64,28 L80,28" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `},ae={wrath:`
    <svg viewBox="0 0 24 24">
      <path d="M12,2C12,2 17,7.5 17,11.5c0,2.8-2.2,5-5,5s-5-2.2-5-5C7,7.5 12,2 12,2z M12,5.5c-1,1.5-2.5,3.5-2.5,6c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5C14.5,9 13,7 12,5.5z"/>
    </svg>
  `,lust:`
    <svg viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `,sloth:`
    <svg viewBox="0 0 24 24">
      <path d="M12.3 2a10 10 0 0 0-1.9 19.8 1 1 0 0 0 1.2-1.2 8 8 0 0 1 7.9-7.9 1 1 0 0 0 1.2-1.2A10 10 0 0 0 12.3 2z"/>
    </svg>
  `,gluttony:`
    <svg viewBox="0 0 24 24">
      <path d="M17 8C17 4 12 2 12 2S7 4 7 8c0 4 5 14 5 14s5-10 5-14z M12 5c1 1.5 2 3.5 2 5c0 2.5-2 4-2 4s-2-1.5-2-4c0-1.5 1-3.5 2-5z"/>
    </svg>
  `,gloom:`
    <svg viewBox="0 0 24 24">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  `,pride:`
    <svg viewBox="0 0 24 24">
      <path d="M2 4l3 14h14l3-14-6 5-4-7-4 7-6-5zM17 16H7v-2h10v2z"/>
    </svg>
  `,envy:`
    <svg viewBox="0 0 24 24">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  `},ge='<svg class="level-sword-icon" viewBox="0 0 24 24"><path d="M17.3 2.7l4 4-13.6 13.6-1.7.3.3-1.7L17.3 2.7M16 1.3l-2.6 2.6L17.5 8l2.6-2.6c.8-.8.8-2 0-2.8l-1.3-1.3c-.8-.8-2-.8-2.8 0zM3.9 15.7l1.4 1.4-2.8 2.8c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l2.8-2.8z"/></svg>';function we(t,e){var w,L,a,i;if(!e){t.innerHTML='<div style="padding: 40px; text-align: center; color: var(--text-muted);">キャラクターが選択されていません</div>';return}const s=e.dictionary||[],o=e.image?`<div class="preview-character-image" style="background-image: url('${e.image}')"></div>`:'<div class="identity-card-image-placeholder">No Image Available</div>',r=e.keywords.map(d=>`<span class="preview-keyword-pill">${d}</span>`).join(""),l=e.staggers&&e.staggers.length>0?e.staggers.map(d=>{const f=e.stats.hp>0?Math.round(d/e.stats.hp*100):0;return`
          <div class="stagger-line">
            <span>混乱閾値</span>
            <span>${d} <strong class="stagger-percent">(${f}%)</strong></span>
          </div>
        `}).join(""):'<div style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 8px;">なし</div>',y=(d,f)=>{var b;const n={fatal:{text:"脆弱",class:"fatal"},weak:{text:"弱点",class:"weak"},normal:{text:"普通",class:"normal"},resist:{text:"耐性",class:"resist"},immune:{text:"無効",class:"immune"},custom:{text:`カスタム (${f})`,class:"normal"}};let u=d;d==="custom"&&(f>=2?u="fatal":f>=1.5?u="weak":f<=0?u="immune":f<=.5?u="resist":u="normal");const v=n[d]||n.normal,c=d==="custom"?`x${f}`:`x${{fatal:2,weak:1.5,normal:1,resist:.5,immune:0}[d]}`,T=((b=n[u])==null?void 0:b.class)||"normal";return{text:`${v.text} (${c})`,class:T}},h=y(e.resistances.slash,e.resistances.slashVal),S=y(e.resistances.pierce,e.resistances.pierceVal),E=y(e.resistances.strike,e.resistances.strikeVal),k=`
    <div class="preview-left">
      <div class="preview-character-image-box">
        ${o}
      </div>
      
      <div class="preview-basic-info">
        <div class="preview-name-title">
          <span>${e.name||"（名称未設定）"}</span>
          <span class="sinner-icon-rarity">★★★</span>
        </div>
        <div class="preview-team-title">${e.team||"所属・チーム未設定"}</div>
        
        <div class="preview-grid-stats">
          <div class="stat-item">
            <span class="stat-label">最大HP</span>
            <span class="stat-value">${e.stats.hp}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">速度</span>
            <span class="stat-value">${e.stats.speedMin}-${e.stats.speedMax}</span>
          </div>
          <div class="stat-item">
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
            <span class="resist-value ${E.class}">${E.text}</span>
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
          ${r||'<div style="color: var(--text-muted); font-size: 0.85rem;">なし</div>'}
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
  `,$=`
    <div class="preview-right">
      <div class="tabs-header">
        <button class="tab-link active" data-target="preview-tab-s1">スキル1</button>
        <button class="tab-link" data-target="preview-tab-s2">スキル2</button>
        <button class="tab-link" data-target="preview-tab-s3">スキル3</button>
        <button class="tab-link" data-target="preview-tab-def">守備</button>
      </div>

      <div class="tab-content active" id="preview-tab-s1">
        <div class="preview-skills-container">
          ${G(e.skills.skill1,s)}
        </div>
      </div>
      
      <div class="tab-content" id="preview-tab-s2">
        <div class="preview-skills-container">
          ${G(e.skills.skill2,s)}
        </div>
      </div>

      <div class="tab-content" id="preview-tab-s3">
        <div class="preview-skills-container">
          ${G(e.skills.skill3,s)}
        </div>
      </div>

      <div class="tab-content" id="preview-tab-def">
        <div class="preview-skills-container">
          ${G(e.skills.defense,s,!0)}
        </div>
      </div>

      <!-- Passives Section -->
      <div class="preview-section" style="margin-top: 32px;">
        <div class="preview-section-title">バトルパッシブ</div>
        <div>
          ${ne(e.passives)}
        </div>
      </div>

      <!-- Support Passives Section -->
      <div class="preview-section">
        <div class="preview-section-title">サポートパッシブ</div>
        <div>
          ${ne(e.supportPassives)}
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
            <h4 style="color: var(--danger-color); font-size: 1.05rem; margin-bottom: 4px;">${((w=e.panic)==null?void 0:w.name)||"パニック"}</h4>
            <div class="passive-desc">${B(((L=e.panic)==null?void 0:L.text)||"1ターンの間行動しない",s)}</div>
          </div>
        </div>
      </div>

      <!-- Sanity Section -->
      <div class="preview-section">
        <div class="preview-section-title">精神力増減条件</div>
        <div class="sanity-condition-container">
          <div class="sanity-cond-box">
            <div class="sanity-cond-title">精神力増加条件</div>
            <div class="sanity-cond-list">${B(((a=e.sanity)==null?void 0:a.increase)||"なし",s)}</div>
          </div>
          <div class="sanity-cond-box">
            <div class="sanity-cond-title">精神力減少条件</div>
            <div class="sanity-cond-list">${B(((i=e.sanity)==null?void 0:i.decrease)||"なし",s)}</div>
          </div>
        </div>
      </div>
    </div>
  `;t.innerHTML=`
    <div class="preview-layout">
      ${k}
      ${$}
    </div>
  `;const p=t.querySelectorAll(".tab-link"),m=t.querySelectorAll(".tab-content");p.forEach(d=>{d.addEventListener("click",()=>{const f=d.getAttribute("data-target");p.forEach(n=>n.classList.remove("active")),m.forEach(n=>n.classList.remove("active")),d.classList.add("active"),t.querySelector(`#${f}`).classList.add("active")})}),ue(t)}function G(t,e,s=!1){return!t||t.length===0?'<div style="text-align: center; color: var(--text-muted); padding: 24px;">登録されているスキルはありません</div>':t.map((o,r)=>{const l=`var(--sin-${o.affinity||"sloth"})`;let y=o.atkType||"slash";if(s){const c=o.defenseType||"defense";c==="defense"?y="defense":c==="evade"?y="evade":c==="match_guard"?y="match_guard":(c==="counter"||c==="match_counter")&&(y=o.atkType||"slash")}const h=V[y]||V.slash,S=s&&o.defenseType==="match_counter",E=parseInt(o.coins)||1,k=parseInt(o.unbreakableCoins)||0;let $="";for(let c=1;c<=E;c++){const T=c>E-k;$+=`<div class="coin-token ${T?"unbreakable":""}"></div>`}const p=parseInt(o.levelBonus)||0,m=p>=0?"+":"",w=parseInt(o.weight)||1;let L="";for(let c=1;c<=10;c++)L+=`<div class="weight-sq ${c<=w?"":"dim"}"></div>`;let a="";const i=[];o.tagMatchImpossible&&i.push("【マッチ不可】"),o.tagTargetIndistinguishable&&i.push("【敵味方識別不可】"),o.tagTargetImmutable&&i.push("【対象変更不可】"),o.specialTagsText&&o.specialTagsText.split(/[,，\n]/).forEach(c=>{const T=c.trim();T&&i.push(`【${T}】`)}),i.length>0&&(a=`<div class="special-tags-list">${i.map(c=>`<span class="special-tag">${c}</span>`).join("")}</div>`);let d="";if(o.coinEffects&&o.coinEffects.length>0){const c=["I","II","III","IV","V","VI","VII","VIII","IX","X"];d=`
        <div class="coin-effects-preview-container">
          ${o.coinEffects.map((T,b)=>{if(!T||!T.text)return"";const I=b+1>E-k;let x=T.text;return I&&(x=`🔴破壊不能コイン
${x}`),`
              <div class="coin-effect-row">
                <div class="coin-num-badge" style="${I?"border-color: #ff5252; color: #ff5252;":""}">
                  ${c[b]||b+1}
                </div>
                <div class="coin-effect-text">
                  ${B(x,e)}
                </div>
              </div>
            `}).join("")}
        </div>
      `}const f=s&&(o.defenseType==="counter"||o.defenseType==="match_counter"),n=s&&!f?"防御レベル補正":"攻撃レベル補正",u=s&&!f?'<svg class="level-sword-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>':ge;let v="";return s&&(v=`<div class="resonance-badge" style="background-color: rgba(255,255,255,0.05); color: var(--text-secondary); border-color: var(--border-color); margin-bottom: 6px;">${{defense:"防御",evade:"回避",match_guard:"マッチ可能ガード",counter:"反撃",match_counter:"マッチ可能反撃"}[o.defenseType]||"守備"}</div>`),`
      <div class="skill-card-preview" style="border-top: 3px solid ${l};">
        <div class="skill-card-preview-header">
          <!-- Octagon & Base Power -->
          <div class="skill-card-left-badge-group">
            <span class="base-power-text">${o.basePower||"0"}</span>
            <div class="octagon-badge-container">
              <div class="octagon-outer" style="background-color: ${l};">
                <div class="octagon-inner">
                  ${h}
                </div>
                <!-- Small Sin hexagon badge -->
                <div class="sin-hexagon-badge" style="background-color: ${l};">
                  <div class="sin-hexagon-inner">
                    <span class="sin-mini-icon">${ae[o.affinity||"sloth"]}</span>
                  </div>
                </div>
              </div>
              ${S?'<div class="match-plus-badge">+</div>':""}
            </div>
            <div class="level-bonus-flag" style="background-color: ${l};">
              +${o.coinPower||"0"}
            </div>
          </div>
          
          <!-- Banner & Coins -->
          <div class="skill-card-top-right">
            <div class="coins-row">
              ${$}
            </div>
            <div class="skill-name-banner" style="--accent-color: ${l};">
              ${o.name||"（名称未設定）"}
            </div>
          </div>
        </div>

        <!-- Meta info: レベル補正, weight, etc. -->
        <div class="skill-stats-row">
          ${v}
          <div class="skill-level-indicator">
            ${u}
            <span>${n}</span>
            <span class="level-val">${m}${p}</span>
          </div>
          
          <div class="weight-indicator">
            <span>加重値</span>
            <div class="weight-squares">
              ${L}
            </div>
          </div>
        </div>

        <!-- Special Action Tags -->
        ${a}

        <!-- Skill Main Body Effect -->
        ${o.effectText?`
          <div class="skill-card-body-text">
            ${B(o.effectText,e)}
          </div>
        `:""}

        <!-- Coin Effects Rows -->
        ${d}

        <!-- Flavor Text -->
        ${o.flavorText?`
          <div class="skill-flavor-text">
            ${o.flavorText}
          </div>
        `:""}
      </div>
    `}).join("")}function ne(t){return!t||t.length===0?'<div style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;">登録されているパッシブはありません</div>':t.map(e=>{const s=e.count&&e.affinity,o=s?`resonance-badge ${e.affinity}`:"",r=e.type==="resonance"?"共鳴":e.type==="own"?"保有":"",l=s?`<span class="${o}"><span class="resonance-sin-icon">${ae[e.affinity]}</span> × ${e.count} ${r}</span>`:"";return`
      <div class="passive-item-preview">
        <div class="passive-name-row">
          <span class="passive-name">${e.name||"（名称未設定）"}</span>
          ${l}
        </div>
        <div class="passive-desc">${B(e.text||"",[])}</div>
        ${e.flavorText?`<div class="passive-flavor">${e.flavorText}</div>`:""}
      </div>
    `}).join("")}let C=[];const Y={id:"sample-middle-sister",name:"蜘蛛の巣 中指の親方",prisoner:"良秀",team:"中指",image:null,season:"シーズン7",releaseDate:"2026-05-28",stats:{hp:285,speedMin:4,speedMax:7,defCorrection:5},resistances:{slash:"normal",slashVal:1,pierce:"fatal",pierceVal:2,strike:"resist",strikeVal:.5},staggers:[213,142,71],keywords:["指","長姉","蜘蛛の巣","中指"],skills:{skill1:[{id:"s1-1",name:"怨念スタンピング",levelBonus:3,affinity:"envy",atkType:"slash",coins:4,unbreakableCoins:1,basePower:4,coinPower:3,atkLevel:64,weight:1,effectText:`対象の[[火傷]]と[[出血]]の合計4につき、最終威力 +1 (最大3)
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
最終威力を増加させる効果を持つ。`,icon:"preset-protection"},{id:"term-grudge",name:"中指 - 怨恨",type:"resource",color:"#ab47bc",description:"攻撃を受けた際に増加する固有リソース。特定の仕返しスキルに全て消耗して威力を増加させる。",icon:"preset-protection"},{id:"term-unbreakable",name:"破壊不能コイン",type:"special",color:"#e53935",description:"マッチに敗北しても破壊されず、最後まで投げ続けられるコイン。",icon:"preset-protection"},{id:"term-res-envy",name:"嫉妬完全共鳴",type:"special",color:"#8e24aa",description:"嫉妬属性のスキルがチェーン上で連続して3つ以上繋がった状態。",icon:"default"},{id:"term-seal1",name:"1段階 封印解除",type:"buff",color:"#ffa726",description:"剣 of 封印の一部解除された状態。効果：与ダメージ量増加。",icon:"preset-dmg-up"},{id:"term-seal2",name:"2段階 封印解除",type:"buff",color:"#f57c00",description:"剣 of 封印の大部分解除された状態。効果：クリティカル確率増加および与ダメージ量増加。",icon:"preset-dmg-up"}],updatedAt:new Date().toISOString()};function ke(){ie();const t=localStorage.getItem("limbus_identities");try{t?(C=JSON.parse(t).filter(Boolean),C.length===0&&(C=[Y],localStorage.setItem("limbus_identities",JSON.stringify(C)))):(C=[Y],localStorage.setItem("limbus_identities",JSON.stringify(C)))}catch(e){console.error("Failed to parse identities from localStorage, resetting to default sample",e),C=[Y],localStorage.setItem("limbus_identities",JSON.stringify(C))}Ee(),window.addEventListener("hashchange",j),j()}function j(){const t=window.location.hash||"#/",e=document.getElementById("app-content"),s=document.getElementById("header-nav");if(!e||!s)return;const o=document.getElementById("global-term-tooltip");if(o&&o.classList.remove("visible"),t==="#/"||t==="")s.innerHTML="",be(e,C,{onEdit:r=>window.location.hash=`#/edit/${r}`,onPreview:r=>window.location.hash=`#/preview/${r}`,onDuplicate:$e,onDelete:Le,onCreateNew:xe,onOpenDict:Ie,onImportJSON:Se});else if(t.startsWith("#/edit/")){const r=t.replace("#/edit/",""),l=C.find(y=>y.id===r);if(!l){window.location.hash="#/";return}s.innerHTML=`
      <div class="mode-toggle-group">
        <button class="mode-btn active" onclick="location.hash='#/edit/${r}'">編集モード</button>
        <button class="mode-btn" onclick="location.hash='#/preview/${r}'">プレビュー</button>
      </div>
    `,me(e,l,he,()=>window.location.hash="#/")}else if(t.startsWith("#/preview/")){const r=t.replace("#/preview/",""),l=C.find(h=>h.id===r);if(!l){window.location.hash="#/";return}s.innerHTML=`
      <div class="mode-toggle-group">
        <button class="mode-btn" onclick="location.hash='#/edit/${r}'">編集モード</button>
        <button class="mode-btn active" onclick="location.hash='#/preview/${r}'">プレビュー</button>
      </div>
      <button class="btn" onclick="location.hash='#/'" style="margin-left: 12px;">人格一覧へ</button>
    `,e.innerHTML='<div class="view-container" id="preview-wrapper"></div>';const y=e.querySelector("#preview-wrapper");we(y,l)}}function he(t){C=C.map(e=>e.id===t.id?t:e),localStorage.setItem("limbus_identities",JSON.stringify(C))}function xe(){const t={id:"char-"+Date.now()+"-"+Math.random().toString(36).substr(2,5),name:"",prisoner:"イサン",team:"",image:null,season:"",releaseDate:new Date().toISOString().split("T")[0],stats:{hp:200,speedMin:1,speedMax:5,defCorrection:0},resistances:{slash:"normal",slashVal:1,pierce:"normal",pierceVal:1,strike:"normal",strikeVal:1},staggers:[120,60],keywords:[],skills:{skill1:[],skill2:[],skill3:[],defense:[]},passives:[],supportPassives:[],panic:{name:"パニック",text:"1ターンの間行動しない",image:null},sanity:{increase:`・マッチ勝利時、マッチ回数に比例して増加（増加量：基本値10、2マッチ目から1マッチにつき20%ずつ増加）
・敵討伐時、倒した敵のレベルが自分のレベル以上の場合、10増加
・味方が倒した敵のレベルが自分のレベル以上の場合、5増加`,decrease:"・味方死亡時、死亡した味方のレベルが自分のレベル以上の場合、レベル差によって減少（減少量：基本値10、レベル差につき10ずつ増加）"},dictionary:[],updatedAt:new Date().toISOString()};C.push(t),localStorage.setItem("limbus_identities",JSON.stringify(C)),window.location.hash=`#/edit/${t.id}`}function $e(t){const e=C.find(s=>s.id===t);if(e){const s=JSON.parse(JSON.stringify(e));s.id="char-"+Date.now()+"-"+Math.random().toString(36).substr(2,5),s.name=s.name?`${s.name} (コピー)`:"名称未設定 (コピー)",s.updatedAt=new Date().toISOString(),C.push(s),localStorage.setItem("limbus_identities",JSON.stringify(C)),j()}}function Le(t){C=C.filter(e=>e.id!==t),localStorage.setItem("limbus_identities",JSON.stringify(C)),j()}async function Se(t){if(!t.id||!t.skills){alert("無効なキャラクターデータです。");return}t.id="char-"+Date.now()+"-"+Math.random().toString(36).substr(2,5),t.updatedAt=new Date().toISOString();const e=t.dictionary||[],s=A(),o=[];if(e.forEach(l=>{const y=s.find(h=>h.name===l.name);y&&(y.color!==l.color||y.type!==l.type||y.description!==l.description||y.icon!==l.icon)&&o.push({local:y,imported:l})}),o.length>0){for(const l of o){const y=await Te(l);if(y==="overwrite"){const h=s.findIndex(S=>S.name===l.local.name);s[h]={...s[h],...l.imported}}else if(y==="rename"){const h=`${l.imported.name}(インポート)`;l.imported.name=h,l.imported.id="term-"+Date.now()+"-"+Math.random().toString(36).substr(2,9),s.push(l.imported);const S=`[[${l.local.name}]]`,E=`[[${h}]]`,k=$=>$?$.replaceAll(S,E):"";t.panic.text=k(t.panic.text),t.sanity.increase=k(t.sanity.increase),t.sanity.decrease=k(t.sanity.decrease),Object.values(t.skills).flat().forEach($=>{$.effectText=k($.effectText),$.coinEffects&&$.coinEffects.forEach(p=>p.text=k(p.text))}),t.passives&&t.passives.forEach($=>$.text=k($.text)),t.supportPassives&&t.supportPassives.forEach($=>$.text=k($.text))}}R(s)}const r=A();e.forEach(l=>{r.some(y=>y.name===l.name)||r.push(l)}),R(r),C.push(t),localStorage.setItem("limbus_identities",JSON.stringify(C)),alert(`キャラクター「${t.name||"名称未設定"}」をインポートしました。`),j()}function Ee(){document.body.insertAdjacentHTML("beforeend",`
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
  `)}function Ie(){const t=document.getElementById("modal-global-dict"),e=document.getElementById("modal-global-dict-body");fe(e),t.classList.add("active")}function Te(t){return new Promise(e=>{const s=document.getElementById("modal-conflict");s.querySelector("#conflict-term-name").textContent=`「${t.imported.name}」`,s.classList.add("active");const o=s.querySelectorAll(".conflict-option"),r=l=>{const h=l.currentTarget.getAttribute("data-action");o.forEach(S=>S.removeEventListener("click",r)),s.classList.remove("active"),e(h)};o.forEach(l=>{l.addEventListener("click",r)})})}document.getElementById("app").innerHTML=`
  <header class="app-header">
    <div class="logo-container">
      <span class="logo-text">人格ビルダー</span>
    </div>
    <nav id="header-nav">
      <!-- Routing links dynamically placed -->
    </nav>
  </header>
  <main id="app-content"></main>
`;ke();
