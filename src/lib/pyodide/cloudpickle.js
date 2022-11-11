var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="cloudpickle.data";var REMOTE_PACKAGE_BASE="cloudpickle.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cloudpickle",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cloudpickle-2.0.0-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:47561,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1483,3030,4334,5519,6937,8279,9642,10988,12444,13772,15158,16121,17295,18554,19776,21197,22544,23804,24952,25997,27280,28498,29521,30669,31895,33003,34003,35326,36621,37927,39130,40249,41352,42603,44081,45407,46887,47449],sizes:[1483,1547,1304,1185,1418,1342,1363,1346,1456,1328,1386,963,1174,1259,1222,1421,1347,1260,1148,1045,1283,1218,1023,1148,1226,1108,1e3,1323,1295,1306,1203,1119,1103,1251,1478,1326,1480,562,112],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_cloudpickle.data")}Module["addRunDependency"]("datafile_cloudpickle.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/cloudpickle/__init__.py",start:0,end:355,audio:0},{filename:"/lib/python3.9/site-packages/cloudpickle/cloudpickle.py",start:355,end:36196,audio:0},{filename:"/lib/python3.9/site-packages/cloudpickle/cloudpickle_fast.py",start:36196,end:68474,audio:0},{filename:"/lib/python3.9/site-packages/cloudpickle/compat.py",start:68474,end:68828,audio:0},{filename:"/lib/python3.9/site-packages/cloudpickle-2.0.0-py3.9.egg-info/PKG-INFO",start:68828,end:75716,audio:0},{filename:"/lib/python3.9/site-packages/cloudpickle-2.0.0-py3.9.egg-info/SOURCES.txt",start:75716,end:78044,audio:0},{filename:"/lib/python3.9/site-packages/cloudpickle-2.0.0-py3.9.egg-info/dependency_links.txt",start:78044,end:78045,audio:0},{filename:"/lib/python3.9/site-packages/cloudpickle-2.0.0-py3.9.egg-info/top_level.txt",start:78045,end:78057,audio:0}],remote_package_size:51657,package_uuid:"fc0716f1-dbab-46d7-8f07-8e2caa1afb0e"})})();