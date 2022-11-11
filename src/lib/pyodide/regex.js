var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="regex.data";var REMOTE_PACKAGE_BASE="regex.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","regex",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","regex-2021.7.6-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:418021,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1377,2402,3792,4771,5882,7253,8446,9264,10318,11320,12452,13690,14779,16121,17470,18757,20162,21601,22999,24353,25520,26468,27128,28208,29149,30030,31024,32054,33073,34035,34933,36015,37115,38165,39178,40245,41426,42223,43317,44592,45465,46527,47857,48879,49704,50782,51774,52714,53669,54570,55500,56657,57756,58923,59822,60735,61686,62800,63773,64796,65780,66815,67678,68670,69714,70853,71912,72851,73876,74943,76073,76984,77843,78693,79693,80716,81911,82715,83425,84331,85484,86627,87855,89105,90406,91726,92955,94327,95542,96624,97646,98635,99632,100629,101627,102623,103618,104614,105610,106605,107602,108599,109624,110916,111979,113083,114450,115920,117375,118409,120041,121641,123258,124369,125601,126923,128103,129422,130694,132069,133102,134170,135450,136698,137799,139137,140455,141571,142706,144069,145239,146267,147704,148729,150010,151235,152335,153444,154399,155434,156443,157583,158444,159895,161206,162611,163779,164614,165797,167228,168373,169606,170859,172210,173156,174497,175891,177152,178536,179595,180557,181438,182313,183318,184598,185988,187366,188263,189291,190547,191505,192839,193829,195051,196164,197290,198316,199723,201105,202168,203516,204832,205787,207263,208412,209894,210662,212289,213852,215356,216622,217871,219201,220633,221825,222998,224503,225954,227333,228844,230449,231881,233293,234163,235118,236198,237159,237966,239246,240087,240884,242087,243641,244852,246292,247755,249046,250642,252112,253466,254326,255236,256381,257176,257960,258639,259288,259961,260582,261082,261708,262430,262709,262901,263087,263273,263469,263650,263841,264027,264202,264393,264585,264769,264961,265297,266449,266955,267668,268310,268892,269297,269781,270448,271208,271682,272004,272700,272951,274225,274955,275722,276694,277582,278272,279104,279816,280668,281347,282204,283072,284330,284983,285970,287368,287917,288497,289134,289764,290297,290854,292006,293137,294015,294169,295142,296091,296467,296888,297331,297824,298501,299105,299706,300206,300760,300992,301521,301854,302175,302966,304230,305019,305950,306869,307976,308698,309689,310287,311133,312067,312779,313950,314421,314770,315170,315481,316372,317237,318222,318605,319632,320480,321859,322710,323075,324344,325085,325694,326654,327379,328322,328677,329184,329647,330249,331152,331359,331993,332764,333677,334597,335416,335932,336895,337593,338308,339034,339873,340640,341511,342287,342964,343807,344549,345348,346250,347141,347901,348650,349309,350147,350501,351178,351813,352378,352873,353396,353949,354455,355081,355637,356430,357011,357514,358090,358607,359145,359685,360329,361131,361970,362772,363526,364250,365015,365742,366296,367165,368006,368698,369485,370209,370903,371646,372640,373527,374308,375039,375856,376670,377688,378544,379988,382036,384084,386066,387985,389771,391707,393755,395541,396861,398092,399472,400492,401623,402792,403749,404661,405622,406923,408074,409307,410578,411921,413053,414150,415334,416512,417869],sizes:[1377,1025,1390,979,1111,1371,1193,818,1054,1002,1132,1238,1089,1342,1349,1287,1405,1439,1398,1354,1167,948,660,1080,941,881,994,1030,1019,962,898,1082,1100,1050,1013,1067,1181,797,1094,1275,873,1062,1330,1022,825,1078,992,940,955,901,930,1157,1099,1167,899,913,951,1114,973,1023,984,1035,863,992,1044,1139,1059,939,1025,1067,1130,911,859,850,1e3,1023,1195,804,710,906,1153,1143,1228,1250,1301,1320,1229,1372,1215,1082,1022,989,997,997,998,996,995,996,996,995,997,997,1025,1292,1063,1104,1367,1470,1455,1034,1632,1600,1617,1111,1232,1322,1180,1319,1272,1375,1033,1068,1280,1248,1101,1338,1318,1116,1135,1363,1170,1028,1437,1025,1281,1225,1100,1109,955,1035,1009,1140,861,1451,1311,1405,1168,835,1183,1431,1145,1233,1253,1351,946,1341,1394,1261,1384,1059,962,881,875,1005,1280,1390,1378,897,1028,1256,958,1334,990,1222,1113,1126,1026,1407,1382,1063,1348,1316,955,1476,1149,1482,768,1627,1563,1504,1266,1249,1330,1432,1192,1173,1505,1451,1379,1511,1605,1432,1412,870,955,1080,961,807,1280,841,797,1203,1554,1211,1440,1463,1291,1596,1470,1354,860,910,1145,795,784,679,649,673,621,500,626,722,279,192,186,186,196,181,191,186,175,191,192,184,192,336,1152,506,713,642,582,405,484,667,760,474,322,696,251,1274,730,767,972,888,690,832,712,852,679,857,868,1258,653,987,1398,549,580,637,630,533,557,1152,1131,878,154,973,949,376,421,443,493,677,604,601,500,554,232,529,333,321,791,1264,789,931,919,1107,722,991,598,846,934,712,1171,471,349,400,311,891,865,985,383,1027,848,1379,851,365,1269,741,609,960,725,943,355,507,463,602,903,207,634,771,913,920,819,516,963,698,715,726,839,767,871,776,677,843,742,799,902,891,760,749,659,838,354,677,635,565,495,523,553,506,626,556,793,581,503,576,517,538,540,644,802,839,802,754,724,765,727,554,869,841,692,787,724,694,743,994,887,781,731,817,814,1018,856,1444,2048,2048,1982,1919,1786,1936,2048,1786,1320,1231,1380,1020,1131,1169,957,912,961,1301,1151,1233,1271,1343,1132,1097,1184,1178,1357,152],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_regex.data")}Module["addRunDependency"]("datafile_regex.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/regex/__init__.py",start:0,end:65,audio:0},{filename:"/lib/python3.9/site-packages/regex/regex.py",start:65,end:32608,audio:0},{filename:"/lib/python3.9/site-packages/regex/_regex_core.py",start:32608,end:172826,audio:0},{filename:"/lib/python3.9/site-packages/regex/_regex.so",start:172826,end:843175,audio:0},{filename:"/lib/python3.9/site-packages/regex-2021.7.6-py3.9.egg-info/PKG-INFO",start:843175,end:882432,audio:0},{filename:"/lib/python3.9/site-packages/regex-2021.7.6-py3.9.egg-info/SOURCES.txt",start:882432,end:883026,audio:0},{filename:"/lib/python3.9/site-packages/regex-2021.7.6-py3.9.egg-info/dependency_links.txt",start:883026,end:883027,audio:0},{filename:"/lib/python3.9/site-packages/regex-2021.7.6-py3.9.egg-info/top_level.txt",start:883027,end:883033,audio:0}],remote_package_size:422117,package_uuid:"7ec2277b-44a1-4952-8439-6a5e43dd13bd"})})();