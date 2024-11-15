let web = false

let createWeb = () => {
	plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
		// console.log(232323);
		fs.root.getFile('face.html', {
			create: true
		}, function(fileEntry) {
			fileEntry.file(function(file) {
				fileEntry.createWriter(function(writer) {
					writer.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body><p id="hello">请面向屏幕</p><div id="main"><video id="video" style="display:none" playsinline webkit-playsinline width="750" height="1000" autoplay loop muted="true"></video></div><p id="test"></p></body></html>'
					);
					
					web = plus.webview.create('_doc/face.html', Math.round(Math
							.random() *
							80 + 20), {
							'uni-app': 'none',
							"background": 'transparent',
							"backButtonAutoControl": 'hide',
							top: 0,
							height: 0
						}, 'zoom-fade-out');
					let _open = false;
	
					web.appendJsFile('_www/uni_modules/xh-recco/static/face.js');
					web.appendJsFile('_www/uni_modules/xh-recco/static/tesseract503.js');
					web.appendJsFile('_www/uni_modules/xh-recco/static/opencv.js');
					// web.appendJsFile(
					// 	'_www/uni_modules/xh-recco/static/face copy.js'
					// 	);
					web.setCssFile('_www/uni_modules/xh-recco/static/index.css');
					web.appendJsFile('_www/uni_modules/xh-recco/static/face-api.min.js');
					web.show();
					
					web.addEventListener('popGesture', function(e){
						// console.log(e);
					}, false);
					web.addEventListener("hide", function (e) {
						// console.log(e);
						web.evalJS('faceDetection.ClosedataStream()');
					})
					web.addEventListener("close", function (e) {
						console.log(e);
					})
					
					// this.$scope.$getAppWebview().addEventListener('popGesture',(e) => {
					// 	if (e.type == 'end' && e.result) {
					// 		console.log('监听到左滑事件');
					// 	}
					// })
					// web.addEventListener('popGesture',(e) => {
					// 	if (e.type == 'end' && e.result) {
					// 		console.log('监听到左滑事件');
					// 		web.setStyle({
					// 			height: '0'
					// 		}) 
					// 		web.evalJS('faceDetection.ClosedataStream()');
					// 	}
					// })
				})
			})
		})
	})
}

createWeb();


export default {
	web: false,
	getis() {
		return new Promise((a, b) => {
			plus.io.resolveLocalFileSystemURL('_www/uni_modules/xh-recco/static/face.js', function(entry) {
				a(true)
			}, function() {
				a(false)

			})
		})
	},
	close() {
		web.evalJS('faceDetection.ClosedataStream()');
		plus.webview.close(web)
	},
	sethtml(e) {
		web.evalJS(e);
	},
	getimg(fn = function() {}) {
		web.evalJS('faceDetection.getimg()');
		uni.$on('getimgdata', function(data) {
			uni.$off('getimgdata')
			fn(data)
		})
	},
	opendataStream(fn) {
		let _this=this;
		let _open = true;
		web.evalJS('faceDetection.opendataStream()');
		uni.$on('getStreamdata', function(data) {
			if (_open) {
				fn(data, () => {
					_open = false;
					_this.ClosedataStream()
					 uni.$off('getStreamdata')
				})
			}
		})
	},
	ClosedataStream() {
		web.evalJS('faceDetection.ClosedataStream()');
	},
	loadFaceRecModel(url) {
		
		// web.evalJS("faceDetection.loadFaceRecModel(" + url +")");
		let evaText = `faceDetection.loadFaceRecModelUrl="${url}"`
		web.evalJS(evaText);
		web.evalJS('faceDetection.loadFaceRecModel()');
	},
	identify(url, callback = function() {}) {
		
		plus.io.resolveLocalFileSystemURL(url, function(entry) {
			entry.file(function(file){
				var fileReader = new plus.io.FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onloadend = function(evt) {
					let faceDetectionDataText = 'faceDetection.identifyData.imageUrl=' + JSON.stringify(evt.target.result)
					web.evalJS(faceDetectionDataText);
					web.evalJS('faceDetection.identify()');
				}
			})
		})
		return new Promise((a, b) => {
			plus.globalEvent.addEventListener('plusMessage', function(e) {
				if (e.data.identifyRes) {
					a(e.data)
				}
			})
		})
		
	},
	open(data, callback = function() {}) {
		// uni.showModal({
		// 	content: JSON.stringify(data)
		// });
		// return
		web.evalJS('faceDetection.ClosedataStream()');
		let _this = this;
		
		web.setStyle({
			height: '100%'
		})
		web.show();
		let faceDetectionDataText = 'faceDetection.faceDetectionData=' + JSON.stringify(data)
		// uni.showModal({
		// 	content: JSON.stringify(!!data)
		// });
		// console.log(!!e);
		if (!!data) {
			web.evalJS(faceDetectionDataText);
		}
		
		web.evalJS('faceDetection.videoInstall()');
		
		
		plus.globalEvent.addEventListener('plusMessage', function(e) {
			// console.log(e);
			// uni.showModal({
			// 	content: JSON.stringify(e.data)
			// });
			if (e.data.close) {
				callback(e.data)
				web.setStyle({
					height: 0
				})
				setTimeout(function() {
					web.evalJS('faceDetection.ClosedataStream()');
				}, 500);
				// setTimeout(function() {
				// 	plus.webview.close(web)
				// }, 300);
			}
			if (e.data.detectRes) {
				console.log(e);
			}
		})

	}
}