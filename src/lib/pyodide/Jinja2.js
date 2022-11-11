var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="Jinja2.data";var REMOTE_PACKAGE_BASE="Jinja2.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","jinja2",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","Jinja2-3.0.3-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:278739,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,789,2741,3889,5292,6467,7676,8936,10219,11439,12728,13855,15150,16456,17641,18909,19859,21017,22037,23117,24395,25490,26792,27850,28992,30184,31321,32451,33567,34525,35504,36592,37640,38601,39549,40675,41765,42797,43821,45017,45854,46831,47870,48776,49595,51247,52610,53896,55185,56405,57649,58697,59898,60894,62165,63378,64552,65667,66877,67911,68925,70173,71281,72347,73534,74855,76075,77356,78453,79655,80776,82055,83209,84330,85430,86571,87833,88986,90158,91514,92863,93988,95306,96594,97982,99163,99949,101148,102063,103221,104223,105221,106447,107478,108941,110218,111456,112783,114032,114925,116043,117438,118790,120017,121275,122249,123603,124785,126109,127442,128688,130037,131354,132816,134069,135495,136632,137903,139160,140350,141200,142067,143433,144466,145617,146778,147767,148614,149613,150705,151844,152863,153880,155194,156409,157454,158797,159842,160832,161902,163168,164171,165e3,165998,167390,168691,169973,171228,172477,173597,174721,176041,177106,178204,179522,180862,182232,183391,184529,185702,187031,188298,189458,190552,191798,192975,194320,195528,196812,197736,198793,199985,201061,202043,203266,204614,206053,207262,208405,209613,210913,211885,213003,213931,214864,215848,216983,217697,218392,219294,220564,221381,222363,223221,224172,225200,226301,227608,228991,230244,231242,232399,233698,234890,235963,237040,238158,239313,240620,241706,242741,243901,244901,246156,247288,248395,249619,250765,251792,252968,254312,255254,256113,257366,258281,259149,260543,261939,263293,264413,265635,266897,267959,269121,270467,271827,273090,274310,275445,277025,278195],sizes:[789,1952,1148,1403,1175,1209,1260,1283,1220,1289,1127,1295,1306,1185,1268,950,1158,1020,1080,1278,1095,1302,1058,1142,1192,1137,1130,1116,958,979,1088,1048,961,948,1126,1090,1032,1024,1196,837,977,1039,906,819,1652,1363,1286,1289,1220,1244,1048,1201,996,1271,1213,1174,1115,1210,1034,1014,1248,1108,1066,1187,1321,1220,1281,1097,1202,1121,1279,1154,1121,1100,1141,1262,1153,1172,1356,1349,1125,1318,1288,1388,1181,786,1199,915,1158,1002,998,1226,1031,1463,1277,1238,1327,1249,893,1118,1395,1352,1227,1258,974,1354,1182,1324,1333,1246,1349,1317,1462,1253,1426,1137,1271,1257,1190,850,867,1366,1033,1151,1161,989,847,999,1092,1139,1019,1017,1314,1215,1045,1343,1045,990,1070,1266,1003,829,998,1392,1301,1282,1255,1249,1120,1124,1320,1065,1098,1318,1340,1370,1159,1138,1173,1329,1267,1160,1094,1246,1177,1345,1208,1284,924,1057,1192,1076,982,1223,1348,1439,1209,1143,1208,1300,972,1118,928,933,984,1135,714,695,902,1270,817,982,858,951,1028,1101,1307,1383,1253,998,1157,1299,1192,1073,1077,1118,1155,1307,1086,1035,1160,1e3,1255,1132,1107,1224,1146,1027,1176,1344,942,859,1253,915,868,1394,1396,1354,1120,1222,1262,1062,1162,1346,1360,1263,1220,1135,1580,1170,544],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_Jinja2.data")}Module["addRunDependency"]("datafile_Jinja2.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/jinja2/__init__.py",start:0,end:2205,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/_identifier.py",start:2205,end:3980,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/async_utils.py",start:3980,end:5927,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/bccache.py",start:5927,end:18597,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/compiler.py",start:18597,end:90806,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/constants.py",start:90806,end:92239,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/debug.py",start:92239,end:100733,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/defaults.py",start:100733,end:102e3,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/environment.py",start:102e3,end:162983,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/exceptions.py",start:162983,end:168054,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/ext.py",start:168054,end:200176,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/filters.py",start:200176,end:252785,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/idtracking.py",start:252785,end:263506,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/lexer.py",start:263506,end:293436,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/loaders.py",start:293436,end:316190,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/meta.py",start:316190,end:320586,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/nativetypes.py",start:320586,end:324555,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/nodes.py",start:324555,end:359105,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/optimizer.py",start:359105,end:360755,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/parser.py",start:360755,end:400522,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/runtime.py",start:400522,end:435576,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/sandbox.py",start:435576,end:450176,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/tests.py",start:450176,end:456081,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/utils.py",start:456081,end:483052,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/visitor.py",start:483052,end:486624,audio:0},{filename:"/lib/python3.9/site-packages/jinja2/py.typed",start:486624,end:486624,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/PKG-INFO",start:486624,end:490082,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/SOURCES.txt",start:490082,end:492501,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/dependency_links.txt",start:492501,end:492502,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/entry_points.txt",start:492502,end:492563,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/requires.txt",start:492563,end:492598,audio:0},{filename:"/lib/python3.9/site-packages/Jinja2-3.0.3-py3.9.egg-info/top_level.txt",start:492598,end:492605,audio:0}],remote_package_size:282835,package_uuid:"1e5aef35-8f0d-43ae-8f5d-12200ac7694c"})})();