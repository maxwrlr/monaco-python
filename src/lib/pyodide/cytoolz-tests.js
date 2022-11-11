var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="cytoolz-tests.data";var REMOTE_PACKAGE_BASE="cytoolz-tests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cytoolz",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/cytoolz","tests",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:46303,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1248,2366,3380,4460,5161,6116,7121,8407,9556,10725,11879,12908,13848,14972,15795,16930,17773,18862,19908,20982,22045,23004,23500,23996,24804,25541,26216,27335,28369,29414,30267,31129,32213,33188,34310,35074,35908,37044,38246,38978,39781,40441,41026,41857,42860,43622,44347,45031,45910],sizes:[1248,1118,1014,1080,701,955,1005,1286,1149,1169,1154,1029,940,1124,823,1135,843,1089,1046,1074,1063,959,496,496,808,737,675,1119,1034,1045,853,862,1084,975,1122,764,834,1136,1202,732,803,660,585,831,1003,762,725,684,879,393],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_cytoolz-tests.data")}Module["addRunDependency"]("datafile_cytoolz-tests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/cytoolz/tests/dev_skip_test.py",start:0,end:937,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_compatibility.py",start:937,end:1202,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_curried.py",start:1202,end:4905,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_curried_toolzlike.py",start:4905,end:6304,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_dev_skip_test.py",start:6304,end:6684,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_dicttoolz.py",start:6684,end:15764,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_docstrings.py",start:15764,end:18798,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_doctests.py",start:18798,end:19263,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_embedded_sigs.py",start:19263,end:23058,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_functoolz.py",start:23058,end:43275,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_inspect_args.py",start:43275,end:59269,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_itertoolz.py",start:59269,end:77458,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_none_safe.py",start:77458,end:89680,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_recipes.py",start:89680,end:90502,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_serialization.py",start:90502,end:96327,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_signatures.py",start:96327,end:99204,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_tlz.py",start:99204,end:100690,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/tests/test_utils.py",start:100690,end:101075,audio:0}],remote_package_size:50399,package_uuid:"8669d084-7b07-4c6a-8bc5-371cef4ef452"})})();