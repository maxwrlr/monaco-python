var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="uncertainties.data";var REMOTE_PACKAGE_BASE="uncertainties.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","uncertainties",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/uncertainties","unumpy",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/uncertainties","lib1to2",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/uncertainties/lib1to2","fixes",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","uncertainties-3.1.6-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:130850,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1453,2804,4194,5567,7170,8534,9942,11252,12509,13820,15183,16382,17666,18914,20239,21556,22760,24009,25202,26469,27572,28837,30311,31710,33150,34704,36086,37280,38507,39751,40970,42050,43264,44437,45746,47132,48435,49787,51100,52408,53777,55206,56558,57853,59133,60293,61419,62583,63723,64937,66148,67505,68859,70291,71518,72778,73776,75244,76651,77658,78878,80308,81627,82968,84197,85548,86828,88266,89657,91072,92284,93647,95063,96406,97630,98880,100292,101316,102613,103911,105113,106352,107570,108957,110091,111137,112528,113959,115150,116438,117594,118812,119842,121013,121929,123402,125020,126475,127912,129347,130641],sizes:[1453,1351,1390,1373,1603,1364,1408,1310,1257,1311,1363,1199,1284,1248,1325,1317,1204,1249,1193,1267,1103,1265,1474,1399,1440,1554,1382,1194,1227,1244,1219,1080,1214,1173,1309,1386,1303,1352,1313,1308,1369,1429,1352,1295,1280,1160,1126,1164,1140,1214,1211,1357,1354,1432,1227,1260,998,1468,1407,1007,1220,1430,1319,1341,1229,1351,1280,1438,1391,1415,1212,1363,1416,1343,1224,1250,1412,1024,1297,1298,1202,1239,1218,1387,1134,1046,1391,1431,1191,1288,1156,1218,1030,1171,916,1473,1618,1455,1437,1435,1294,209],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_uncertainties.data")}Module["addRunDependency"]("datafile_uncertainties.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/uncertainties/1to2.py",start:0,end:384,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/__init__.py",start:384,end:9739,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/core.py",start:9739,end:137299,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/umath.py",start:137299,end:138618,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/umath_core.py",start:138618,end:153429,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/__init__.py",start:153429,end:156270,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/core.py",start:156270,end:184526,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/ulinalg.py",start:184526,end:184897,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/__init__.py",start:184897,end:184897,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/__init__.py",start:184897,end:184897,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_std_dev.py",start:184897,end:185934,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_std_devs.py",start:185934,end:186424,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_uarray_umatrix.py",start:186424,end:188980,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_ufloat.py",start:188980,end:192021,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.6-py3.9.egg-info/PKG-INFO",start:192021,end:205979,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.6-py3.9.egg-info/SOURCES.txt",start:205979,end:207127,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.6-py3.9.egg-info/dependency_links.txt",start:207127,end:207128,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.6-py3.9.egg-info/requires.txt",start:207128,end:207213,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.6-py3.9.egg-info/top_level.txt",start:207213,end:207227,audio:0}],remote_package_size:134946,package_uuid:"10855291-9e09-4662-8246-44e621cc1c68"})})();