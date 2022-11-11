var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="matplotlib-tests.data";var REMOTE_PACKAGE_BASE="matplotlib-tests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","matplotlib",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/matplotlib","testing",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/matplotlib","tests",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","mpl_toolkits",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/mpl_toolkits","tests",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:599361,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1291,2312,3615,4942,6107,7432,8481,9704,11142,12391,13753,14908,16275,17668,18567,19423,20235,21218,22234,23485,24824,25566,26842,27629,28640,29836,30962,32112,33372,34521,35882,36948,38263,39510,40396,41667,42945,43898,44724,45985,46974,47676,48801,49578,50582,51856,53093,54139,55192,56137,57233,58359,59402,60465,61475,62468,63648,64386,64906,65454,66250,67195,68363,69559,70184,70734,71446,72635,73910,74987,76318,77281,78170,78798,79498,80643,81685,82673,84061,85290,86387,87538,88704,89738,91044,92063,93289,94188,95398,96395,97343,98409,99381,100074,101166,102281,103449,104629,105548,106651,107708,108854,109752,110824,112095,112996,114078,115382,116369,117336,118472,119678,120725,121833,123170,124032,125110,125984,127002,128150,129490,130632,131627,132901,133894,135113,136265,137616,138774,140001,141116,142562,143801,145032,146050,147246,148521,149691,151124,152528,153696,154948,155794,157154,158356,159773,160977,162100,163252,164459,165706,166996,168365,169800,171188,172595,173877,175307,176390,177533,178632,179439,180527,181528,182514,183449,184546,185485,186440,187378,188361,189506,190685,191819,192901,193933,194715,195314,196030,197126,198295,199549,200870,201955,203122,204287,205543,206596,207681,208808,210127,211263,212346,213428,214665,215799,216995,218243,219249,220269,221340,222194,222966,223992,225091,225930,227080,228264,229113,230586,231403,232610,233706,234934,236010,237012,238239,239365,240702,241439,242539,243429,244225,245135,246432,247421,248569,249706,251003,252245,253384,254583,255246,256273,257201,257956,258718,260167,261387,262652,263237,263978,264451,265263,266270,267203,268194,269124,269598,270794,271996,273236,274301,275252,276321,277557,278674,279821,280875,281814,282883,284171,285314,286398,287637,288639,289741,290521,291543,292856,294086,295375,296597,297844,298870,300169,301284,302554,303827,304860,305860,306862,308081,309385,310811,312161,313522,314783,316176,317283,318608,320026,321298,322328,323435,324460,325292,326307,327053,328201,329518,330346,330968,332371,333588,334874,336121,337168,338221,339495,340577,341912,342825,344211,345237,346091,347200,348336,349663,350478,351425,352565,353178,353698,354307,354856,355503,355958,356372,356738,357245,357773,358234,358701,359729,360465,361315,362353,363384,364340,365075,365852,366535,367355,368275,368853,369773,370961,371775,372743,373891,374646,375947,376750,377973,379129,380234,381554,382404,383470,384653,385789,386991,388098,389361,390447,391731,392765,394067,395208,396187,396783,397873,398991,400251,401434,402570,403747,405096,406541,407832,408784,409726,410772,411907,413002,413686,414374,415030,415909,417110,418176,419243,420416,421615,422730,423796,424829,425876,426777,427680,428482,429374,430569,431859,432944,434179,435228,436029,437125,438199,440134,441317,442431,443643,445061,446339,447403,448537,449524,450975,451857,452840,453992,454845,455870,456918,457990,459041,460329,461145,462062,463556,464537,465695,466348,467458,468791,469985,471134,472293,473263,474350,475475,476618,477656,478639,479659,480714,481784,482905,483969,484798,485424,486201,487230,488341,489358,490293,491315,492452,493346,494459,495369,496455,497574,498611,499484,500752,501949,503174,504366,505215,506050,507038,507912,508769,509615,510373,511562,512374,513545,514510,515542,516662,517804,519029,520142,521329,522422,523629,524823,525850,526912,528219,529564,530846,531952,533211,534537,535748,536882,538172,539428,540355,541261,542546,543722,545001,546056,547413,548792,549796,550664,551674,552462,553602,554221,554813,555792,557081,558201,559306,560623,561903,563026,563771,564964,566319,567655,568571,569377,570636,571636,572741,574031,575108,576361,577351,578558,579864,580902,582027,583059,584225,585343,586611,587699,588410,589395,590257,591475,592396,593603,594575,595731,596710,597745,599066],sizes:[1291,1021,1303,1327,1165,1325,1049,1223,1438,1249,1362,1155,1367,1393,899,856,812,983,1016,1251,1339,742,1276,787,1011,1196,1126,1150,1260,1149,1361,1066,1315,1247,886,1271,1278,953,826,1261,989,702,1125,777,1004,1274,1237,1046,1053,945,1096,1126,1043,1063,1010,993,1180,738,520,548,796,945,1168,1196,625,550,712,1189,1275,1077,1331,963,889,628,700,1145,1042,988,1388,1229,1097,1151,1166,1034,1306,1019,1226,899,1210,997,948,1066,972,693,1092,1115,1168,1180,919,1103,1057,1146,898,1072,1271,901,1082,1304,987,967,1136,1206,1047,1108,1337,862,1078,874,1018,1148,1340,1142,995,1274,993,1219,1152,1351,1158,1227,1115,1446,1239,1231,1018,1196,1275,1170,1433,1404,1168,1252,846,1360,1202,1417,1204,1123,1152,1207,1247,1290,1369,1435,1388,1407,1282,1430,1083,1143,1099,807,1088,1001,986,935,1097,939,955,938,983,1145,1179,1134,1082,1032,782,599,716,1096,1169,1254,1321,1085,1167,1165,1256,1053,1085,1127,1319,1136,1083,1082,1237,1134,1196,1248,1006,1020,1071,854,772,1026,1099,839,1150,1184,849,1473,817,1207,1096,1228,1076,1002,1227,1126,1337,737,1100,890,796,910,1297,989,1148,1137,1297,1242,1139,1199,663,1027,928,755,762,1449,1220,1265,585,741,473,812,1007,933,991,930,474,1196,1202,1240,1065,951,1069,1236,1117,1147,1054,939,1069,1288,1143,1084,1239,1002,1102,780,1022,1313,1230,1289,1222,1247,1026,1299,1115,1270,1273,1033,1e3,1002,1219,1304,1426,1350,1361,1261,1393,1107,1325,1418,1272,1030,1107,1025,832,1015,746,1148,1317,828,622,1403,1217,1286,1247,1047,1053,1274,1082,1335,913,1386,1026,854,1109,1136,1327,815,947,1140,613,520,609,549,647,455,414,366,507,528,461,467,1028,736,850,1038,1031,956,735,777,683,820,920,578,920,1188,814,968,1148,755,1301,803,1223,1156,1105,1320,850,1066,1183,1136,1202,1107,1263,1086,1284,1034,1302,1141,979,596,1090,1118,1260,1183,1136,1177,1349,1445,1291,952,942,1046,1135,1095,684,688,656,879,1201,1066,1067,1173,1199,1115,1066,1033,1047,901,903,802,892,1195,1290,1085,1235,1049,801,1096,1074,1935,1183,1114,1212,1418,1278,1064,1134,987,1451,882,983,1152,853,1025,1048,1072,1051,1288,816,917,1494,981,1158,653,1110,1333,1194,1149,1159,970,1087,1125,1143,1038,983,1020,1055,1070,1121,1064,829,626,777,1029,1111,1017,935,1022,1137,894,1113,910,1086,1119,1037,873,1268,1197,1225,1192,849,835,988,874,857,846,758,1189,812,1171,965,1032,1120,1142,1225,1113,1187,1093,1207,1194,1027,1062,1307,1345,1282,1106,1259,1326,1211,1134,1290,1256,927,906,1285,1176,1279,1055,1357,1379,1004,868,1010,788,1140,619,592,979,1289,1120,1105,1317,1280,1123,745,1193,1355,1336,916,806,1259,1e3,1105,1290,1077,1253,990,1207,1306,1038,1125,1032,1166,1118,1268,1088,711,985,862,1218,921,1207,972,1156,979,1035,1321,295],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_matplotlib-tests.data")}Module["addRunDependency"]("datafile_matplotlib-tests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/matplotlib/testing/conftest.py",start:0,end:5567,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/__init__.py",start:5567,end:5933,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/conftest.py",start:5933,end:6191,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_afm.py",start:6191,end:9901,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_agg.py",start:9901,end:17330,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_agg_filter.py",start:17330,end:18299,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_animation.py",start:18299,end:26653,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_arrow_patches.py",start:26653,end:32313,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_artist.py",start:32313,end:41374,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_axes.py",start:41374,end:252629,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_bases.py",start:252629,end:258564,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_cairo.py",start:258564,end:260385,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_nbagg.py",start:260385,end:261292,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_pdf.py",start:261292,end:269960,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_pgf.py",start:269960,end:280280,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_ps.py",start:280280,end:284868,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_qt.py",start:284868,end:294079,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_svg.py",start:294079,end:306522,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_tk.py",start:306522,end:307924,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_tools.py",start:307924,end:308425,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backend_webagg.py",start:308425,end:309127,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_backends_interactive.py",start:309127,end:317002,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_basic.py",start:317002,end:318203,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_bbox_tight.py",start:318203,end:323152,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_category.py",start:323152,end:333375,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_cbook.py",start:333375,end:358003,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_collections.py",start:358003,end:381011,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_colorbar.py",start:381011,end:403663,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_colors.py",start:403663,end:444359,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_compare_images.py",start:444359,end:447653,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_constrainedlayout.py",start:447653,end:460705,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_container.py",start:460705,end:461255,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_contour.py",start:461255,end:475086,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_cycles.py",start:475086,end:480746,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_dates.py",start:480746,end:519678,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_determinism.py",start:519678,end:524264,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_dviread.py",start:524264,end:526577,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_figure.py",start:526577,end:552176,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_font_manager.py",start:552176,end:559791,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_fontconfig_pattern.py",start:559791,end:561812,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_gridspec.py",start:561812,end:562772,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_image.py",start:562772,end:598715,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_legend.py",start:598715,end:621606,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_lines.py",start:621606,end:629943,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_marker.py",start:629943,end:636379,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_mathtext.py",start:636379,end:651008,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_matplotlib.py",start:651008,end:652463,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_mlab.py",start:652463,end:718147,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_offsetbox.py",start:718147,end:728975,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_patches.py",start:728975,end:748248,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_path.py",start:748248,end:764502,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_patheffects.py",start:764502,end:769704,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_pickle.py",start:769704,end:775330,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_png.py",start:775330,end:776630,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_polar.py",start:776630,end:788360,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_preprocess_data.py",start:788360,end:798681,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_pyplot.py",start:798681,end:801162,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_quiver.py",start:801162,end:809222,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_rcparams.py",start:809222,end:828493,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_sankey.py",start:828493,end:828803,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_scale.py",start:828803,end:834462,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_simplification.py",start:834462,end:845510,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_skew.py",start:845510,end:851816,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_sphinxext.py",start:851816,end:853785,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_spines.py",start:853785,end:856917,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_streamplot.py",start:856917,end:860740,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_style.py",start:860740,end:866467,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_subplots.py",start:866467,end:872447,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_table.py",start:872447,end:878176,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_testing.py",start:878176,end:878805,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_texmanager.py",start:878805,end:879262,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_text.py",start:879262,end:901670,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_ticker.py",start:901670,end:953111,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_tightlayout.py",start:953111,end:963418,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_transforms.py",start:963418,end:990706,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_triangulation.py",start:990706,end:1036652,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_ttconv.py",start:1036652,end:1037192,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_type1font.py",start:1037192,end:1039280,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_units.py",start:1039280,end:1044995,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_usetex.py",start:1044995,end:1047894,audio:0},{filename:"/lib/python3.9/site-packages/matplotlib/tests/test_widgets.py",start:1047894,end:1064102,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/__init__.py",start:1064102,end:1064467,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/conftest.py",start:1064467,end:1064680,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/test_axes_grid.py",start:1064680,end:1067131,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/test_axes_grid1.py",start:1067131,end:1085222,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/test_axisartist_angle_helper.py",start:1085222,end:1090892,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/test_axisartist_axis_artist.py",start:1090892,end:1093900,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/test_axisartist_axislines.py",start:1093900,end:1096342,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/test_axisartist_clip_path.py",start:1096342,end:1097346,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/test_axisartist_floating_axes.py",start:1097346,end:1101473,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/test_axisartist_grid_finder.py",start:1101473,end:1101798,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/test_axisartist_grid_helper_curvelinear.py",start:1101798,end:1109314,audio:0},{filename:"/lib/python3.9/site-packages/mpl_toolkits/tests/test_mplot3d.py",start:1109314,end:1145310,audio:0}],remote_package_size:603457,package_uuid:"232e68d7-1dc5-44df-80d2-a559f2b406d4"})})();