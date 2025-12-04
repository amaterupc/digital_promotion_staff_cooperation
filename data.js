const companyData = [
    {
        "name": "株式会社NTTドコモ",
        "url": "https://www.docomo.ne.jp/",
        "kana": "エヌティティドコモ",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "KDDI株式会社",
        "url": "https://www.kddi.com/",
        "kana": "ケイディーディーアイ",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "ソフトバンク株式会社",
        "url": "https://www.softbank.jp/",
        "kana": "ソフトバンク",
        "prefecture": "東京都",
        "district": "港区"
    },
    {
        "name": "楽天モバイル株式会社",
        "url": "https://corp.mobile.rakuten.co.jp/",
        "kana": "ラクテンモバイル",
        "prefecture": "東京都",
        "district": "世田谷区"
    },
    {
        "name": "全国中小企業青年中央会",
        "url": "https://www.chuokai.or.jp/index.php/bussinesslink/youthchuokai/",
        "kana": "ゼンコクチュウショウキギョウセイネンチュウオウカイ",
        "prefecture": "東京都",
        "district": "中央区"
    },
    {
        "name": "一般財団法人ニューメディア開発協会",
        "url": "https://www2.nmda.or.jp/",
        "kana": "ニューメディアカイハツキョウカイ",
        "prefecture": "東京都",
        "district": "港区"
    },
    {
        "name": "ネットでeシニア",
        "url": "https://mishima-life.jp/eseniorbynet/index.html",
        "kana": "ネットデイーシニア",
        "prefecture": "静岡県",
        "district": null
    },
    {
        "name": "合同会社TANOSEAT",
        "url": "https://tanoseat.jimdofree.com/",
        "kana": "タノシート",
        "prefecture": "京都府",
        "district": null
    },
    {
        "name": "社会福祉法人大井町社会福祉協議会",
        "url": "https://ooi-shakyo.jp/",
        "kana": "オオイマチシャカイフクシキョウギカイ",
        "prefecture": "神奈川県",
        "district": null
    },
    {
        "name": "石川県加賀市",
        "url": "https://www.city.kaga.ishikawa.jp/",
        "kana": "カガシ",
        "prefecture": "石川県",
        "district": null
    },
    {
        "name": "トランスコスモス株式会社",
        "url": "https://www.trans-cosmos.co.jp/",
        "kana": "トランスコスモス",
        "prefecture": "東京都",
        "district": "渋谷区"
    },
    {
        "name": "BIPROGY株式会社",
        "url": "https://www.biprogy.com/",
        "kana": "ビプロジー",
        "prefecture": "東京都",
        "district": "江東区"
    },
    {
        "name": "一般社団法人日本支援技術協会",
        "url": "https://www.jatc.jp/",
        "kana": "ニホンシエンギジュツキョウカイ",
        "prefecture": "東京都",
        "district": "新宿区"
    },
    {
        "name": "NPO法人ブロードバンドスクール協会",
        "url": "https://broadbandschool.jp/",
        "kana": "ブロードバンドスクールキョウカイ",
        "prefecture": "東京都",
        "district": "新宿区"
    },
    {
        "name": "富士通株式会社",
        "url": "https://www.fujitsu.com/jp/",
        "kana": "フジツウ",
        "prefecture": "東京都",
        "district": "港区"
    },
    {
        "name": "一般社団法人ソフトウェア協会",
        "url": "https://www.saj.or.jp/",
        "kana": "ソフトウェアキョウカイ",
        "prefecture": "東京都",
        "district": "港区"
    },
    {
        "name": "一般社団法人ウェブ解析士協会",
        "url": "https://www.waca.associates/jp",
        "kana": "ウェブカイセキシキョウカイ",
        "prefecture": "東京都",
        "district": "新宿区"
    },
    {
        "name": "北海道更別村",
        "url": "https://www.sarabetsu.jp/",
        "kana": "サラベツムラ",
        "prefecture": "北海道",
        "district": null
    },
    {
        "name": "兵庫県",
        "url": "https://web.pref.hyogo.lg.jp/index.html",
        "kana": "ヒョウゴケン",
        "prefecture": "兵庫県",
        "district": null
    },
    {
        "name": "一般社団法人パソコープ",
        "url": "https://www.pasocoop.org/",
        "kana": "パソコープ",
        "prefecture": "東京都",
        "district": "江東区"
    },
    {
        "name": "東京慈恵会医科大学",
        "url": "http://www.jikei.ac.jp",
        "kana": "トウキョウジケイカイイカダイガク",
        "prefecture": "東京都",
        "district": "港区"
    },
    {
        "name": "NPO法人パソコンサポートの会",
        "url": "https://www.edogawa-pc-support.org/",
        "kana": "パソコンサポートノカイ",
        "prefecture": "東京都",
        "district": "江戸川区"
    },
    {
        "name": "一色小学校区元気なコミュニティ協議会",
        "url": "https://gen-comi.jp",
        "kana": "イッシキショウガッコウクゲンキナコミュニティキョウギカイ",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "株式会社千葉興業銀行",
        "url": "https://www.chibakogyo-bank.co.jp/",
        "kana": "チバコウギョウギンコウ",
        "prefecture": "千葉県",
        "district": null
    },
    {
        "name": "富山県朝日町",
        "url": "https://www.town.asahi.toyama.jp/",
        "kana": "アサヒマチ",
        "prefecture": "富山県",
        "district": null
    },
    {
        "name": "センターフィールド株式会社",
        "url": "https://centerfield.co.jp/",
        "kana": "センターフィールド",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "株式会社大垣共立銀行",
        "url": "https://www.okb.co.jp/",
        "kana": "オオガキキョウリツギンコウ",
        "prefecture": "岐阜県",
        "district": null
    },
    {
        "name": "NPO法人タダカヨ",
        "url": "https://mmky310.info/",
        "kana": "タダカヨ",
        "prefecture": "東京都",
        "district": "文京区"
    },
    {
        "name": "NPO法人健康・生きがい就労ラボ",
        "url": "https://lifespiceworks.com/",
        "kana": "ケンコウイキガイシュウロウラボ",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "株式会社学映システム",
        "url": "https://www.gakuei.co.jp",
        "kana": "ガクエイシステム",
        "prefecture": "佐賀県",
        "district": null
    },
    {
        "name": "長野県長野市",
        "url": "https://www.city.nagano.nagano.jp/index.html",
        "kana": "ナガノシ",
        "prefecture": "長野県",
        "district": null
    },
    {
        "name": "公益社団法人鹿児島県シルバー人材センター連合会",
        "url": "http://kscr.or.jp/",
        "kana": "カゴシマケンシルバージンザイセンターレンゴウカイ",
        "prefecture": "鹿児島県",
        "district": null
    },
    {
        "name": "公益社団法人みよし市シルバー人材センター",
        "url": "https://miyoshi-sjc.com",
        "kana": "ミヨシシシルバージンザイセンター",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "公益社団法人ひたちなか市シルバー人材センター",
        "url": "https://www.hitachinaka-sc.com/",
        "kana": "ヒタチナカシシルバージンザイセンター",
        "prefecture": "茨城県",
        "district": null
    },
    {
        "name": "公益社団法人山口県シルバー人材センター連合会",
        "url": "https://webc.sjc.ne.jp/yamaguchikenren/index",
        "kana": "ヤマグチケンシルバージンザイセンターレンゴウカイ",
        "prefecture": "山口県",
        "district": null
    },
    {
        "name": "公益社団法人鉾田市シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/sarubia/",
        "kana": "ホコタシシルバージンザイセンター",
        "prefecture": "茨城県",
        "district": null
    },
    {
        "name": "公益財団法人山梨県シルバー人材センター連合会",
        "url": "https://www.y-sjc.jp",
        "kana": "ヤマナシケンシルバージンザイセンターレンゴウカイ",
        "prefecture": "山梨県",
        "district": null
    },
    {
        "name": "公益社団法人垂水市シルバー人材センター",
        "url": "http://tarumizu-sjc.or.jp",
        "kana": "タルミズシシルバージンザイセンター",
        "prefecture": "鹿児島県",
        "district": null
    },
    {
        "name": "公益社団法人岡山県シルバー人材センター連合会",
        "url": "https://www.okayama-ksjc.or.jp/",
        "kana": "オカヤマケンシルバージンザイセンターレンゴウカイ",
        "prefecture": "岡山県",
        "district": null
    },
    {
        "name": "公益社団法人新潟県シルバー人材センター連合会",
        "url": "https://webc.sjc.ne.jp/niigata/index",
        "kana": "ニイガタケンシルバージンザイセンターレンゴウカイ",
        "prefecture": "新潟県",
        "district": null
    },
    {
        "name": "公益社団法人常滑市シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/tokoname/index",
        "kana": "トコナメシシルバージンザイセンター",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "公益財団法人平塚市生きがい事業団",
        "url": "https://webc.sjc.ne.jp/hiratsuka",
        "kana": "ヒラツカシイキガイジギョウダン",
        "prefecture": "神奈川県",
        "district": null
    },
    {
        "name": "公益社団法人阿南市シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/anann/index",
        "kana": "アナンシシルバージンザイセンター",
        "prefecture": "徳島県",
        "district": null
    },
    {
        "name": "公益社団法人豊橋市シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/toyohashi",
        "kana": "トヨハシシシルバージンザイセンター",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "全国社会保険労務士会連合会",
        "url": "https://www.shakaihokenroumushi.jp/",
        "kana": "ゼンコクシャカイホケンロウムシカイレンゴウカイ",
        "prefecture": "東京都",
        "district": "中央区"
    },
    {
        "name": "創研情報株式会社",
        "url": "https://www.souken.co.jp/",
        "kana": "ソウケンジョウホウ",
        "prefecture": "東京都",
        "district": "品川区"
    },
    {
        "name": "公益社団法人渋谷区シルバー人材センター",
        "url": "http://www.shibuyasc.jp/",
        "kana": "シブヤクシルバージンザイセンター",
        "prefecture": "東京都",
        "district": "渋谷区"
    },
    {
        "name": "公益社団法人羽村市シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/hamura",
        "kana": "ハムラシシルバージンザイセンター",
        "prefecture": "東京都",
        "district": "羽村市"
    },
    {
        "name": "公益社団法人中野区シルバー人材センター",
        "url": "https://www.nakano-sjc.or.jp/index.html",
        "kana": "ナカノクシルバージンザイセンター",
        "prefecture": "東京都",
        "district": "中野区"
    },
    {
        "name": "公益社団法人京田辺市シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/kyotanabe/index",
        "kana": "キョウタナベシシルバージンザイセンター",
        "prefecture": "京都府",
        "district": null
    },
    {
        "name": "公益社団法人松本地域シルバー人材センター",
        "url": "https://matsumoto-sjc.jp/pc-2/",
        "kana": "マツモトチイキシルバージンザイセンター",
        "prefecture": "長野県",
        "district": null
    },
    {
        "name": "公益社団法人豊中市シルバー人材センター",
        "url": "https://www.toyonakasjc.or.jp/",
        "kana": "トヨナカシシルバージンザイセンター",
        "prefecture": "大阪府",
        "district": null
    },
    {
        "name": "公益社団法人松阪市シルバー人材センター",
        "url": "https://msjc.or.jp/",
        "kana": "マツサカシシルバージンザイセンター",
        "prefecture": "三重県",
        "district": null
    },
    {
        "name": "公益社団法人上牧町シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/kanmaki/index",
        "kana": "カンマキチョウシルバージンザイセンター",
        "prefecture": "奈良県",
        "district": null
    },
    {
        "name": "公益社団法人松江市シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/matsue/index",
        "kana": "マツエシシルバージンザイセンター",
        "prefecture": "島根県",
        "district": null
    },
    {
        "name": "公益社団法人町田市シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/machida/index",
        "kana": "マチダシシルバージンザイセンター",
        "prefecture": "東京都",
        "district": "町田市"
    },
    {
        "name": "公益社団法人豊田市シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/toyota/index",
        "kana": "トヨタシシルバージンザイセンター",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "公益社団法人米子広域シルバー人材センター",
        "url": "https://yonago-sjc.net/index.html",
        "kana": "ヨナゴコウイキシルバージンザイセンター",
        "prefecture": "鳥取県",
        "district": null
    },
    {
        "name": "東京都町田市",
        "url": "https://www.city.machida.tokyo.jp/",
        "kana": "マチダシ",
        "prefecture": "東京都",
        "district": "町田市"
    },
    {
        "name": "オンラインサポーターまちだ",
        "url": "https://online-sp.localinfo.jp/",
        "kana": "オンラインサポーターマチダ",
        "prefecture": "東京都",
        "district": "町田市"
    },
    {
        "name": "NPO法人まちづくり推進隊詫間",
        "url": "https://takumatai.jp/",
        "kana": "マチヅクリスイシンタイタクマ",
        "prefecture": "香川県",
        "district": null
    },
    {
        "name": "静岡県三島市",
        "url": "https://www.city.mishima.shizuoka.jp/ipn049857.html",
        "kana": "ミシマシ",
        "prefecture": "静岡県",
        "district": null
    },
    {
        "name": "茨城県ひたちなか市",
        "url": "https://www.city.hitachinaka.lg.jp/",
        "kana": "ヒタチナカシ",
        "prefecture": "茨城県",
        "district": null
    },
    {
        "name": "福井県あわら市",
        "url": "https://www.city.awara.lg.jp/index.html",
        "kana": "アワラシ",
        "prefecture": "福井県",
        "district": null
    },
    {
        "name": "滋賀県",
        "url": "https://www.pref.shiga.lg.jp/",
        "kana": "シガケン",
        "prefecture": "滋賀県",
        "district": null
    },
    {
        "name": "社会福祉法人東大和市社会福祉協議会",
        "url": "https://www.higashiyamatoshakyou.or.jp/",
        "kana": "ヒガシヤマトシシャカイフクシキョウギカイ",
        "prefecture": "東京都",
        "district": "東大和市"
    },
    {
        "name": "上田市議会DX推進議員連盟らくらくデジタル倶楽部",
        "url": "https://www.facebook.com/uedadxgiren",
        "kana": "ウエダシギカイディーエックススイシンギインレンメイ",
        "prefecture": "長野県",
        "district": null
    },
    {
        "name": "公益社団法人日本消費生活アドバイザー・コンサルタント・相談員協会（NACS）",
        "url": "https://nacs.or.jp",
        "kana": "ニホンショウヒセイカツアドバイザーコンサルタントソウダンインキョウカイ",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "株式会社十八親和銀行",
        "url": "https://www.18shinwabank.co.jp/",
        "kana": "ジュウハチシンワギンコウ",
        "prefecture": "長崎県",
        "district": null
    },
    {
        "name": "NPO法人視覚障碍者パソコンアシストネットワーク",
        "url": "https://www.span.jp/index.html",
        "kana": "シカクショウガイシャパソコンアシストネットワーク",
        "prefecture": "東京都",
        "district": "新宿区"
    },
    {
        "name": "株式会社EVISION",
        "url": "http://www.evision.co.jp/",
        "kana": "イビジョン",
        "prefecture": "東京都",
        "district": "新宿区"
    },
    {
        "name": "公益社団法人浜田市シルバー人材センター",
        "url": "http://www.hamada-silver.org/",
        "kana": "ハマダシシルバージンザイセンター",
        "prefecture": "島根県",
        "district": null
    },
    {
        "name": "東日本旅客鉄道株式会社",
        "url": "https://www.jreast.co.jp/",
        "kana": "ヒガシニホンリョカクテツドウ",
        "prefecture": "東京都",
        "district": "渋谷区"
    },
    {
        "name": "株式会社ラック",
        "url": "https://www.lac.co.jp",
        "kana": "ラック",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "NPO法人ITコーディネータ協会",
        "url": "https://www.itc.or.jp/",
        "kana": "アイティーコーディネータキョウカイ",
        "prefecture": "東京都",
        "district": "中央区"
    },
    {
        "name": "公益社団法人姶良市シルバー人材センター",
        "url": "https://webc.sjc.ne.jp/airacho/index",
        "kana": "アイラシシルバージンザイセンター",
        "prefecture": "鹿児島県",
        "district": null
    },
    {
        "name": "一般社団法人4Hearts",
        "url": "https://slowcommunication.jp/",
        "kana": "フォーハーツ",
        "prefecture": "神奈川県",
        "district": null
    },
    {
        "name": "株式会社フレアン",
        "url": "https://www.flaren.co.jp/",
        "kana": "フレアン",
        "prefecture": "東京都",
        "district": "港区"
    },
    {
        "name": "NPO法人虹志いなべ暮らしの保健室",
        "url": "https://inabe-hokenshitsu.com/",
        "kana": "ニジシイナベクラシノホケンシツ",
        "prefecture": "三重県",
        "district": null
    },
    {
        "name": "NPO法人すずらん",
        "url": "https://www.sunfield.ne.jp/~famisapo/suzuran/index.htm",
        "kana": "スズラン",
        "prefecture": "広島県",
        "district": null
    },
    {
        "name": "宮崎県都城市",
        "url": "https://www.city.miyakonojo.miyazaki.jp/",
        "kana": "ミヤコノジョウシ",
        "prefecture": "宮崎県",
        "district": null
    },
    {
        "name": "宮崎県都農町",
        "url": "https://www.town.tsuno.lg.jp/home",
        "kana": "ツノチョウ",
        "prefecture": "宮崎県",
        "district": null
    },
    {
        "name": "山形県山形市",
        "url": "https://www.city.yamagata-yamagata.lg.jp/",
        "kana": "ヤマガタシ",
        "prefecture": "山形県",
        "district": null
    },
    {
        "name": "千葉県富里市",
        "url": "https://www.city.tomisato.lg.jp/",
        "kana": "トミサトシ",
        "prefecture": "千葉県",
        "district": null
    },
    {
        "name": "川崎シニアネット",
        "url": "https://kawasaki-snet.com/",
        "kana": "カワサキシニアネット",
        "prefecture": "神奈川県",
        "district": null
    },
    {
        "name": "岐阜県笠松町",
        "url": "http://www.csplab.co.jp/",
        "kana": "カサマツチョウ",
        "prefecture": "岐阜県",
        "district": null
    },
    {
        "name": "京都府",
        "url": "https://www.pref.kyoto.jp/",
        "kana": "キョウトフ",
        "prefecture": "京都府",
        "district": null
    },
    {
        "name": "鹿児島県指宿市",
        "url": "https://www.city.ibusuki.lg.jp/main/",
        "kana": "イブスキシ",
        "prefecture": "鹿児島県",
        "district": null
    },
    {
        "name": "NPO法人QUEST",
        "url": "https://www.quest9.jp/",
        "kana": "クエスト",
        "prefecture": "東京都",
        "district": "新宿区"
    },
    {
        "name": "一般社団法人おかえり集学校",
        "url": "https://www.shugakko.or.jp/",
        "kana": "オカエリシュウガッコウ",
        "prefecture": "東京都",
        "district": "新宿区"
    },
    {
        "name": "北海道留寿都村",
        "url": "https://www.vill.rusutsu.lg.jp/kosodate/detail/00003815.html",
        "kana": "ルスツムラ",
        "prefecture": "北海道",
        "district": null
    },
    {
        "name": "福島県",
        "url": "https://www.pref.fukushima.lg.jp/",
        "kana": "フクシマケン",
        "prefecture": "福島県",
        "district": null
    },
    {
        "name": "兵庫県三田市",
        "url": "https://www.city.sanda.lg.jp/index.html",
        "kana": "サンダシ",
        "prefecture": "兵庫県",
        "district": null
    },
    {
        "name": "岐阜県岐阜市",
        "url": "https://gikyobun.or.jp/heartful/shogaigakushu/kouza/pc/itcollabo/",
        "kana": "ギフシ",
        "prefecture": "岐阜県",
        "district": null
    },
    {
        "name": "株式会社協和製作所",
        "url": "https://www.kyowa-mfg.co.jp/",
        "kana": "キョウワセイサクショ",
        "prefecture": "兵庫県",
        "district": null
    },
    {
        "name": "鳥取県倉吉市",
        "url": "https://www.city.kurayoshi.lg.jp/",
        "kana": "クラヨシシ",
        "prefecture": "鳥取県",
        "district": null
    },
    {
        "name": "兵庫県洲本市",
        "url": "https://www.city.sumoto.lg.jp/",
        "kana": "スモトシ",
        "prefecture": "兵庫県",
        "district": null
    },
    {
        "name": "石川県能美市",
        "url": "https://www.city.nomi.ishikawa.jp/www/index.html",
        "kana": "ノミシ",
        "prefecture": "石川県",
        "district": null
    },
    {
        "name": "日本PCサービス株式会社",
        "url": "https://www.j-pcs.jp/",
        "kana": "ニホンピーシーサービス",
        "prefecture": "大阪府",
        "district": null
    },
    {
        "name": "山形県長井市",
        "url": "http://www.city.nagai.yamagata.jp/",
        "kana": "ナガイシ",
        "prefecture": "山形県",
        "district": null
    },
    {
        "name": "群馬県甘楽町",
        "url": "https://www.town.kanra.lg.jp/",
        "kana": "カンラマチ",
        "prefecture": "群馬県",
        "district": null
    },
    {
        "name": "大分県宇佐市",
        "url": "https://www.city.usa.oita.jp/index.html",
        "kana": "ウサシ",
        "prefecture": "大分県",
        "district": null
    },
    {
        "name": "千葉県南房総市",
        "url": "https://www.city.minamiboso.chiba.jp/",
        "kana": "ミナミボウソウシ",
        "prefecture": "千葉県",
        "district": null
    },
    {
        "name": "島根県美郷町",
        "url": "https://www.town.shimane-misato.lg.jp/",
        "kana": "ミサトチョウ",
        "prefecture": "島根県",
        "district": null
    },
    {
        "name": "ウェブココル株式会社",
        "url": "https://cocol.co.jp/",
        "kana": "ウェブココル",
        "prefecture": "福岡県",
        "district": null
    },
    {
        "name": "佐賀県基山町",
        "url": "https://www.town.kiyama.lg.jp/default.html",
        "kana": "キヤマチョウ",
        "prefecture": "佐賀県",
        "district": null
    },
    {
        "name": "茨城県五霞町",
        "url": "https://www.town.goka.lg.jp/",
        "kana": "ゴカマチ",
        "prefecture": "茨城県",
        "district": null
    },
    {
        "name": "大阪府",
        "url": "https://www.pref.osaka.lg.jp/",
        "kana": "オオサカフ",
        "prefecture": "大阪府",
        "district": null
    },
    {
        "name": "福島県喜多方市",
        "url": "https://www.city.kitakata.fukushima.jp",
        "kana": "キタカタシ",
        "prefecture": "福島県",
        "district": null
    },
    {
        "name": "鳥取県米子市",
        "url": "https://www.city.yonago.lg.jp/",
        "kana": "ヨナゴシ",
        "prefecture": "鳥取県",
        "district": null
    },
    {
        "name": "愛知県岩倉市",
        "url": "https://www.city.iwakura.aichi.jp",
        "kana": "イワクラシ",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "株式会社フォーラムエイト",
        "url": "https://www.forum8.co.jp/",
        "kana": "フォーラムエイト",
        "prefecture": "東京都",
        "district": "港区"
    },
    {
        "name": "いちかわITインストラクターズ",
        "url": "https://ichikawaiti.jimdofree.com/",
        "kana": "イチカワアイティーインストラクターズ",
        "prefecture": "千葉県",
        "district": null
    },
    {
        "name": "一般社団法人中小企業個人情報セキュリティー推進協会",
        "url": "https://www.sp2.or.jp/",
        "kana": "チュウショウキギョウコジンジョウホウセキュリティースイシンキョウカイ",
        "prefecture": "東京都",
        "district": "中央区"
    },
    {
        "name": "一般社団法人ソフトウェア協会／イーテクノロジー株式会社",
        "url": "https://www.tokyo.linkstec.co.jp/",
        "kana": "イーテクノロジー",
        "prefecture": "東京都",
        "district": "港区"
    },
    {
        "name": "NPO法人シニアサロン井戸端会議",
        "url": "https://sendaissi.com/",
        "kana": "シニアサロンイドバタカイギ",
        "prefecture": "宮城県",
        "district": null
    },
    {
        "name": "NPO法人北摂SITA",
        "url": "https://hokusetsu-sita.org/",
        "kana": "ホクセツシータ",
        "prefecture": "大阪府",
        "district": null
    },
    {
        "name": "埼玉県さいたま市",
        "url": "https://www.city.saitama.jp/index.html",
        "kana": "サイタマシ",
        "prefecture": "埼玉県",
        "district": null
    },
    {
        "name": "株式会社フューチャーイン",
        "url": "https://www.futureinn.co.jp/",
        "kana": "フューチャーイン",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "学校法人東奥義塾東奥義塾中学校・高等学校",
        "url": "https://www.gijuku.ac.jp/",
        "kana": "トウオウギジュク",
        "prefecture": "青森県",
        "district": null
    },
    {
        "name": "社会福祉法人大崎市社会福祉協議会",
        "url": "https://www.osaki-shakyo.com",
        "kana": "オオサキシシャカイフクシキョウギカイ",
        "prefecture": "宮城県",
        "district": null
    },
    {
        "name": "クオールホールディングス株式会社",
        "url": "https://www.qolhd.co.jp/",
        "kana": "クオールホールディングス",
        "prefecture": "東京都",
        "district": "港区"
    },
    {
        "name": "鳥取県南部町",
        "url": "https://www.town.nanbu.tottori.jp/",
        "kana": "ナンブチョウ",
        "prefecture": "鳥取県",
        "district": null
    },
    {
        "name": "株式会社Soelu",
        "url": "https://simple-alpha.com/",
        "kana": "ソエル",
        "prefecture": "東京都",
        "district": "渋谷区"
    },
    {
        "name": "全国電機商業組合連合会",
        "url": "https://www.zds.or.jp/",
        "kana": "ゼンコクデンキショウギョウクミアイレンゴウカイ",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "（木津川市社会福祉協議会）木津川市パソコンニューメディアサロン",
        "url": "https://kizupns.seesaa.net/",
        "kana": "キヅガワシパソコンニューメディアサロン",
        "prefecture": "京都府",
        "district": null
    },
    {
        "name": "小田原デジタル活用支援事業",
        "url": "https://www.city.odawara.kanagawa.jp/",
        "kana": "オダワラデジタルカツヨウシエンジギョウ",
        "prefecture": "神奈川県",
        "district": null
    },
    {
        "name": "山形県大蔵村",
        "url": "https://www.vill.ohkura.yamagata.jp/index.html",
        "kana": "オオクラムラ",
        "prefecture": "山形県",
        "district": null
    },
    {
        "name": "一般財団法人草の根サイバーセキュリティ推進協議会",
        "url": "https://www.grafsec.or.jp/",
        "kana": "クサノネサイバーセキュリティスイシンキョウギカイ",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "NPO法人IT整備士協会",
        "url": "https://www.it-seibishi.or.jp/",
        "kana": "アイティーセイビシキョウカイ",
        "prefecture": "東京都",
        "district": "港区"
    },
    {
        "name": "JCOM株式会社",
        "url": "https://www.jcom.co.jp/corporate/",
        "kana": "ジェイコム",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "近畿ケーブルネットワーク株式会社",
        "url": "http://www.kcnf.co.jp",
        "kana": "キンキケーブルネットワーク",
        "prefecture": "大阪府",
        "district": null
    },
    {
        "name": "エトリ電設株式会社",
        "url": "https://www.etoden.co.jp/",
        "kana": "エトリデンセツ",
        "prefecture": "福井県",
        "district": null
    },
    {
        "name": "有限会社杉電気",
        "url": "https://sugidenki.co.jp",
        "kana": "スギデンキ",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "株式会社シーン",
        "url": "http://www.ceen.co.jp",
        "kana": "シーン",
        "prefecture": "北海道",
        "district": null
    },
    {
        "name": "総研フィールド株式会社",
        "url": "https://www.skf-field.co.jp/",
        "kana": "ソウケンフィールド",
        "prefecture": "東京都",
        "district": "品川区"
    },
    {
        "name": "株式会社T-NEX",
        "url": "http://www.t-nex.com",
        "kana": "ティーネックス",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "株式会社創和エンジニアリング",
        "url": "https://souwa-eng.net/",
        "kana": "ソウワエンジニアリング",
        "prefecture": "宮城県",
        "district": null
    },
    {
        "name": "株式会社稲村電気通信",
        "url": "http://inaden-corp.com",
        "kana": "イナムラデンキツウシン",
        "prefecture": "茨城県",
        "district": null
    },
    {
        "name": "オリエント通信株式会社",
        "url": "http://www.orient-com.co.jp/index.html",
        "kana": "オリエントツウシン",
        "prefecture": "鹿児島県",
        "district": null
    },
    {
        "name": "株式会社坂井電気",
        "url": "http://www.sakai-denki.com/",
        "kana": "サカイデンキ",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "株式会社海協リライアンス",
        "url": "https://www.kaikyo-fukuoka.co.jp/",
        "kana": "カイキョウリライアンス",
        "prefecture": "福岡県",
        "district": null
    },
    {
        "name": "株式会社大丸総合企画",
        "url": "https://kkdm.co.jp/",
        "kana": "ダイマルソウゴウキカク",
        "prefecture": "福岡県",
        "district": null
    },
    {
        "name": "株式会社メディアワークス",
        "url": "https://m-works.co.jp/",
        "kana": "メディアワークス",
        "prefecture": "群馬県",
        "district": null
    },
    {
        "name": "広島県世羅町",
        "url": "https://www.town.sera.hiroshima.jp/",
        "kana": "セラチョウ",
        "prefecture": "広島県",
        "district": null
    },
    {
        "name": "はれの日サロン（アイビスティ有限会社）",
        "url": "https://harenohi.club/",
        "kana": "ハレノヒサロン",
        "prefecture": "岡山県",
        "district": null
    },
    {
        "name": "社会福祉法人天龍村社会福祉協議会",
        "url": "https://tenryushakyo.info/",
        "kana": "テンリュウムラシャカイフクシキョウギカイ",
        "prefecture": "長野県",
        "district": null
    },
    {
        "name": "兵庫県姫路市",
        "url": "https://www.city.himeji.lg.jp/",
        "kana": "ヒメジシ",
        "prefecture": "兵庫県",
        "district": null
    },
    {
        "name": "一般社団法人日本経営士会",
        "url": "https://nihonkeieishikai.com/",
        "kana": "ニホンケイエイシカイ",
        "prefecture": "東京都",
        "district": "千代田区"
    },
    {
        "name": "尾北シニアネット",
        "url": "http://www.bihoku-senior.net",
        "kana": "ビホクシニアネット",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "城西国際大学",
        "url": "https://www.jiu.ac.jp",
        "kana": "ジョウサイコクサイダイガク",
        "prefecture": "千葉県",
        "district": null
    },
    {
        "name": "北海道札幌市",
        "url": "https://www.city.sapporo.jp/kikaku/ictplan/digitaldenentoshi.html",
        "kana": "サッポロシ",
        "prefecture": "北海道",
        "district": null
    },
    {
        "name": "社会福祉法人桶川市社会福祉協議会",
        "url": "https://www.okshakyo.com",
        "kana": "オケガワシシャカイフクシキョウギカイ",
        "prefecture": "埼玉県",
        "district": null
    },
    {
        "name": "東京都江戸川区",
        "url": "https://www.city.edogawa.tokyo.jp",
        "kana": "エドガワク",
        "prefecture": "東京都",
        "district": "江戸川区"
    },
    {
        "name": "香川県坂出市",
        "url": "https://www.city.sakaide.lg.jp",
        "kana": "サカイデシ",
        "prefecture": "香川県",
        "district": null
    },
    {
        "name": "株式会社システムズ",
        "url": "https://www.stm-systems.co.jp/",
        "kana": "システムズ",
        "prefecture": "東京都",
        "district": "品川区"
    },
    {
        "name": "神奈川県相模原市",
        "url": "https://morilab-fujino.jp/news/e20231101",
        "kana": "サガミハラシ",
        "prefecture": "神奈川県",
        "district": null
    },
    {
        "name": "株式会社平和堂",
        "url": "https://www.heiwado.jp/",
        "kana": "ヘイワドウ",
        "prefecture": "滋賀県",
        "district": null
    },
    {
        "name": "一般社団法人トナリノ",
        "url": "https://tonarino.org/",
        "kana": "トナリノ",
        "prefecture": "東京都",
        "district": "渋谷区"
    },
    {
        "name": "静岡県浜松市",
        "url": "https://www.city.hamamatsu.shizuoka.jp/dsc/digital-use/smartphone.html",
        "kana": "ハママツシ",
        "prefecture": "静岡県",
        "district": null
    },
    {
        "name": "株式会社シナプス",
        "url": "https://www.synapse.jp",
        "kana": "シナプス",
        "prefecture": "鹿児島県",
        "district": null
    },
    {
        "name": "兵庫県たつの市",
        "url": "https://www.city.tatsuno.lg.jp/",
        "kana": "タツノシ",
        "prefecture": "兵庫県",
        "district": null
    },
    {
        "name": "株式会社8emmy",
        "url": "https://www.8emmy.com",
        "kana": "エイトエミー",
        "prefecture": "東京都",
        "district": "渋谷区"
    },
    {
        "name": "群馬県前橋市",
        "url": "https://www.city.maebashi.gunma.jp/soshiki/seisaku/johoseisaku/oshirase/37697.html",
        "kana": "マエバシシ",
        "prefecture": "群馬県",
        "district": null
    },
    {
        "name": "愛媛県新居浜市",
        "url": "https://www.city.niihama.lg.jp/",
        "kana": "ニイハマシ",
        "prefecture": "愛媛県",
        "district": null
    },
    {
        "name": "神奈川県川崎市",
        "url": "https://www.city.kawasaki.jp/",
        "kana": "カワサキシ",
        "prefecture": "神奈川県",
        "district": null
    },
    {
        "name": "沖縄県浦添市",
        "url": "https://www.city.urasoe.lg.jp/",
        "kana": "ウラソエシ",
        "prefecture": "沖縄県",
        "district": null
    },
    {
        "name": "税理士法人レガシィ・株式会社レガシィ",
        "url": "https://legacy.ne.jp/",
        "kana": "レガシィ",
        "prefecture": "東京都",
        "district": "中央区"
    },
    {
        "name": "鹿児島県志布志市",
        "url": "https://www.city.shibushi.lg.jp",
        "kana": "シブシシ",
        "prefecture": "鹿児島県",
        "district": null
    },
    {
        "name": "株式会社アクセスライン",
        "url": "https://www.acl-01.com/",
        "kana": "アクセスライン",
        "prefecture": "福岡県",
        "district": null
    },
    {
        "name": "愛知県日進市",
        "url": "https://www.city.nisshin.lg.jp/index.html",
        "kana": "ニッシンシ",
        "prefecture": "愛知県",
        "district": null
    },
    {
        "name": "栃木県矢板市",
        "url": "https://www.city.yaita.tochigi.jp/soshiki/digitalsenryaku/digital-public-lecs.html",
        "kana": "ヤイタシ",
        "prefecture": "栃木県",
        "district": null
    },
    {
        "name": "特定非営利活動法人デジタルライフサポーターズネット",
        "url": "https://dsapo.org/",
        "kana": "デジタルライフサポーターズネット",
        "prefecture": "埼玉県",
        "district": null
    },
    {
        "name": "（茨木市社会福祉協議会）NPO法人茨木シニアICTアソシエーション",
        "url": "https://icta-npo.jimdofree.com/",
        "kana": "イバラキシニアアイシーティーアソシエーション",
        "prefecture": "大阪府",
        "district": null
    },
    {
        "name": "島根県",
        "url": "https://www.pref.shimane.lg.jp/life/information/joho/IT_riyou/digital_lecturer/digital_lecturer_project.html",
        "kana": "シマネケン",
        "prefecture": "島根県",
        "district": null
    },
    {
        "name": "熊本県宇城市",
        "url": "https://www.city.uki.kumamoto.jp/",
        "kana": "ウキシ",
        "prefecture": "熊本県",
        "district": null
    },
    {
        "name": "青森県南部町",
        "url": "https://www.town.aomori-nanbu.lg.jp/",
        "kana": "ナンブチョウ",
        "prefecture": "青森県",
        "district": null
    },
    {
        "name": "ソーシャルサービス有限会社",
        "url": "http://social-s.net",
        "kana": "ソーシャルサービス",
        "prefecture": "愛媛県",
        "district": null
    },
    {
        "name": "東京都練馬区",
        "url": "https://www.city.nerima.tokyo.jp/hokenfukushi/koreisha/oshirase/sumahokouza.html",
        "kana": "ネリマク",
        "prefecture": "東京都",
        "district": "練馬区"
    },
    {
        "name": "一般社団法人千葉市老人クラブ連合会",
        "url": "https://www.chibashi-roren.jp/",
        "kana": "チバシロウジンクラブレンゴウカイ",
        "prefecture": "千葉県",
        "district": null
    },
    {
        "name": "バイザー株式会社",
        "url": "https://www.visor.co.jp/",
        "kana": "バイザー",
        "prefecture": "愛知県",
        "district": null
    }
];
