function FTPYStr() {	
	return "亞惡壓圍爲醫壹稻飮隱羽營榮衞益驛圓艷鹽奧應橫歐毆穩假價畫會囘懷繪擴殼覺學嶽樂勸卷寬歡罐觀閒關陷館巖顏歸氣龜僞戲犧卻糺舊據擧峽挾敎狹鄕堯曉區驅勳薰羣徑惠攜溪經繼莖螢輕鷄藝缺儉劍圈檢權獻縣險顯驗嚴效廣恆鑛號國黑濟碎齋劑冱櫻册雜參慘棧蠶贊殘絲飼齒兒辭濕實舍寫釋壽收從澁獸縱肅處緖諸敍奬將牀燒祥稱證乘剩壤孃條淨疊穰讓釀囑觸寢愼晉眞神刄盡圖粹醉隨髓數樞瀨晴淸精靑聲靜齊蹟攝竊專戰淺潛纖踐錢禪曾雙壯搜插爭窗總聰莊裝騷增臟藏屬續墮體對帶滯臺瀧擇澤單擔膽團彈斷癡遲晝蟲鑄猪廳聽敕鎭塚遞鐵轉點傳都黨盜燈當鬪德獨讀屆繩貳姙黏惱腦霸廢拜賣麥發髮拔蠻祕濱甁福拂佛竝變邊舖穗寶萠襃豐沒飜槇萬滿默餠彌藥譯與譽搖樣謠遙瑤慾來賴亂覽畧隆龍兩獵綠鄰凛壘勵禮隸靈齡戀爐勞朗樓郞祿亙灣 逸謁緣黃溫禍悔海慨槪喝渴褐漢器既祈虛響勤謹揭擊硏穀殺祉視煮社者臭祝暑緖署涉狀節祖瘦僧層巢憎贈卽嘆著徵懲突難梅繁晚卑碑賓頻敏侮倂塀勉步墨每免麵戾欄虜淚類曆歷練鍊廊錄饑蠟靖飯藪銳戶吳娛絕縳姬彥內强悅歲產稅脫說閱摑祐禎吿";
}

function JTPYStr() {	
	return "亜悪圧囲為医壱稲飲隠羽営栄衛益駅円艶塩奥応横欧殴穏仮価画会回懐絵拡殻覚学岳楽勧巻寛歓缶観間関陥館巌顔帰気亀偽戯犠却糾旧拠挙峡挟教狭郷尭暁区駆勲薫群径恵携渓経継茎蛍軽鶏芸欠倹剣圏検権献県険顕験厳効広恒鉱号国黒済砕斎剤冴桜冊雑参惨桟蚕賛残糸飼歯児辞湿実舎写釈寿収従渋獣縦粛処緒諸叙奨将床焼祥称証乗剰壌嬢条浄畳穣譲醸嘱触寝慎晋真神刃尽図粋酔随髄数枢瀬晴清精青声静斉跡摂窃専戦浅潜繊践銭禅曽双壮捜挿争窓総聡荘装騒増臓蔵属続堕体対帯滞台滝択沢単担胆団弾断痴遅昼虫鋳猪庁聴勅鎮塚逓鉄転点伝都党盗灯当闘徳独読届縄弐妊粘悩脳覇廃拝売麦発髪抜蛮秘浜瓶福払仏並変辺舗穂宝萌褒豊没翻槙万満黙餅弥薬訳与誉揺様謡遥瑶欲来頼乱覧略隆竜両猟緑隣凜塁励礼隷霊齢恋炉労朗楼郎禄亘湾 逸謁縁黄温禍悔海慨概喝渇褐漢器既祈虚響勤謹掲撃研穀殺祉視煮社者臭祝暑緒署渉状節祖痩僧層巣憎贈即嘆著徴懲突難梅繁晩卑碑賓頻敏侮併塀勉歩墨毎免麺戻欄虜涙類暦歴練錬廊録飢蝋靖飯薮鋭戸呉娯絶縛姫彦内強悦歳産税脱説閲掴祐禎告";
} 

function testChinese(cc, i) {
	return (cc.charCodeAt(i) > 10000);
}

function Pinyin(cc) {	
	let str = '';
	for (let i = 0; i < cc.length; ++ i) {
		if (testChinese(cc, i)) {
			if (cc[i] in pinyin_data) {
				let ts = pinyin_data[cc[i]];
				const tone = ts[ts.length - 1];
				ts = ts.split(',')[0].slice(0, -1);				
				str += ts[0].toUpperCase();
				let ps = ts.substring(1);
				ps = ps.replace('a', tone_a[tone - 1]);
				ps = ps.replace('e', tone_e[tone - 1]);
				ps = ps.replace('i', tone_i[tone - 1]);
				ps = ps.replace('o', tone_o[tone - 1]);
				ps = ps.replace('u', tone_u[tone - 1]);
				str += ps;
				str += " ";
			} else {
				str += cc[i];
			}
		} else {
  			str += cc[i];
  		}
	}
	return str.trim();
}

function Traditionalized(cc) {
	let str = '';
	const ss = JTPYStr();
	const tt = FTPYStr();
	for (let i = 0; i < cc.length; ++ i) {
		if (testChinese(cc, i) && ss.indexOf(cc.charAt(i)) != -1) {
			str += tt.charAt(ss.indexOf(cc.charAt(i)));
		} else {
			str += cc.charAt(i);
		}
	}
	return str;
}

function Simplized(cc) {
	let str = '';
	const ss = JTPYStr();
	const tt = FTPYStr();
	for (let i = 0; i < cc.length; i += 1) {
		if(testChinese(cc, i) && tt.indexOf( cc.charAt(i) ) != -1) {
			str += ss.charAt(tt.indexOf(cc.charAt(i)));
		} else {
  			str += cc.charAt(i);
		}
	}
	return str;
}

/*
String.prototype.replaceAll = function(search, replacement) {
    let target = this;
    return target.split(search).join(replacement);
};
*/

String.prototype.replaceAll = function(search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function translateText(txt, targetEncoding, dialect) {
	if (txt === "" || txt === null) {
		return "";
	}
	if ((dialect !== null) && (dialect !== 0)) {
		let keys = null, values = null;
		if (dialect === 1) {
			keys = C2M_keys;
			values = C2M;
		} else if (dialect === 2) {
			keys = M2C_keys;
			values = M2C;
		}
		if (keys && values) {			
			for (let i = 0; i < keys.length; i += 1) {
				txt = txt.replaceAll(keys[i], values[keys[i]]);
				//txt = txt.replaceAll(Traditionalized(keys[i]), Traditionalized(values[keys[i]]));
				//txt = txt.replaceAll(Simplized(keys[i]), Simplized(values[keys[i]]));
			}
		}
	}
	if (targetEncoding == 1) {
		return Simplized(txt);
	}
	else if (targetEncoding == 2) {
		return Traditionalized(txt);
	}
	else if (targetEncoding == 3)  {
		return Pinyin(txt);
	}
	else {
		return txt;
	}
}

function translateBody(fobj, targetEncoding, dialect) {
	if ((targetEncoding === 0) && (dialect === 0)) {
		return;
	}
	let objs;
	if (typeof(fobj) === "object") {
		objs = fobj.childNodes;
	} else {
		objs = document.body.childNodes;
	}
	const objlen = objs.length;
	for (let i = 0; i < objlen; i += 1) {
		let obj = objs.item(i);
		if ("||BR|HR|TEXTAREA|".indexOf( "|" + obj.tagName + "|" ) > 0) {
			continue;
		}
		if (obj.title != "" && obj.title != null) {
			obj.title = translateText(obj.title, targetEncoding, dialect);
		}
		if (obj.alt != "" && obj.alt != null) {
			obj.alt = translateText(obj.alt, targetEncoding, dialect);
		}
		if (obj.tagName == "INPUT" && obj.value != "" && obj.type != "text" && obj.type != "hidden") {
			obj.value = translateText(obj.value, targetEncoding, dialect);
		}
		if (obj.nodeType == 3) {
			obj.data = translateText(obj.data, targetEncoding, dialect);
		} else {
			translateBody(obj, targetEncoding, dialect);
		}
	}
}

chrome.storage.sync.get('setting', function(data) {
	chrome.storage.sync.get('dialect', function(data2) {
		function work() {
			translateBody(document.body, data.setting, data2.dialect);	
		}	
		if (data != null && data2 != null) {
			work();
			setTimeout(work, 2000);
			setTimeout(work, 3500);
			setTimeout(work, 5000);
		}
	});
});  
