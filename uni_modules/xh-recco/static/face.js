(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(factory());
}(this, (function() {
	'use strict';
	var img,info={},imgCanvas,textList=[],tesseractWorker,videoStream,videoStream,isTinyYolov2 = false,isRecognitionNet = false;
	var getTextList = function(url, success) {
		var rep = (text) => {
			let resText = text.replace(/[a-zA-Z`:-_-.~!@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~！@#￥%……&*（）—— \+ ={}|《》？：“”-【】、；‘’，。、]/g,'');
			return resText.replaceAll("\n", "");
		}
		var check_surname = (str) => {
			var str = str.substr(0, 1); //截取用户提交的用户名的前两字节，也就是姓。 
			var surname = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵堪汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董粱杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯咎管卢莫经房裘缪干解应宗宣丁贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄魏加封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎祖武符刘姜詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲台从鄂索咸籍赖卓蔺屠蒙池乔阴郁胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍郤璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庚终暨居衡步都耿满弘匡国文寇广禄阙东殴殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后江红游竺权逯盖益桓公万俟司马上官欧阳夏侯诸葛闻人东方赫连皇甫尉迟公羊澹台公冶宗政濮阳淳于仲孙太叔申屠公孙乐正轩辕令狐钟离闾丘长孙慕容鲜于宇文司徒司空亓官司寇仉督子车颛孙端木巫马公西漆雕乐正壤驷公良拓拔夹谷宰父谷粱晋楚闫法汝鄢涂钦段干百里东郭南门呼延妫海羊舌微生岳帅缑亢况後有琴梁丘左丘东门西门商牟佘佴伯赏南宫墨哈谯笪年爱阳佟第五言福";
			let res = surname.search(str) == -1?false:true
			return res
		}
		// 身份证号码验证
		var checkIDcard = (val) => {
			if (checkCode(val)) {
				var date = val.substring(6, 14);
				if (checkDate(date)) {
					if (checkProv(val.substring(0, 2))) {
						return true;
					}
				}
			}
			return false;
		}
		// 校验码验证
		var checkCode = (val) => {
			var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
			var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
			var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
			var code = val.substring(17);
			if (p.test(val)) {
				var sum = 0;
				for (var i = 0; i < 17; i++) {
					sum += val[i] * factor[i];
				}
				if (parity[sum % 11] == code.toUpperCase()) {
					return true;
				}
			}
			return false;
		}
		// 出生日期验证
		var checkDate = (val) => {
			var pattern = /^(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
			if (pattern.test(val)) {
				var year = val.substring(0, 4);
				var month = val.substring(4, 6);
				var date = val.substring(6, 8);
				var date2 = new Date(year + "-" + month + "-" + date);
				var t = date2.getTime();
				var n = new Date().getTime();
				if (date2 && date2.getMonth() == (parseInt(month) - 1) && (n-t>0)) {
					return true;
				}
			}
			return false;
		}
		// 地区验证
		var checkProv = (val) => {
			var pattern = /^[1-9][0-9]/;
			var provs = {11: "北京",12: "天津",13: "河北",14: "山西",15: "内蒙古",21: "辽宁",22: "吉林",23: "黑龙江",31: "上海",32: "江苏",33: "浙江",34: "安徽",35: "福建",36: "江西",37: "山东",41: "河南",42: "湖北",43: "湖南",44: "广东",45: "广西",46: "海南",50: "重庆",51: "四川",52: "贵州",53: "云南",54: "西藏",61: "陕西",62: "甘肃",63: "青海",64: "宁夏",65: "新疆",71: "台湾",81: "香港",82: "澳门",91: "海外"};
			if (pattern.test(val)) {
				if (provs[val]) {
					return true;
				}
			}
			return false;
		}
		var getResult = (e) => {
			return new Promise(resolve => {
				let ctx = e.resCanvas.getContext("2d");
				tesseractWorker.recognize(e.resCanvas).then(res => {
					resolve({
						text: res.data.text,
						id: e.id,
						data: res.data
					});
				})
			})
			
		}
		var recognize = (e) => {
			let l = -1;
			let o = () => {
				getResult(textList[l]).then(res => {
					let value = rep(res.text)
					let IDcardText = value;
					if (!checkIDcard(value)) {
						IDcardText = ''
						res.data.symbols.map((item, k) => {
							if (item.confidence > 95) {
								IDcardText += item.text
							}
						})
					}
					
					textList[l].value = IDcardText;
					if (checkIDcard(IDcardText)) {
						info.num = IDcardText;
						info.width = textList[l].width
						info.height = textList[l].height
						info.y = textList[l].y
						info.x = textList[l].x
						let n = new Date().getTime()
						
						// this.info.idTime = `${(n-this.stamp)/1000}秒`
						// console.log(`身份证解析成功：${IDcardText}，耗时：${(n-this.stamp)/1000}秒`);
						
						let textHeight = 0;
						res.data.symbols.map(item => {
							textHeight += item.bbox.y1 - item.bbox.y0;
						})
						let heightRatio = (info.height-textHeight/18) / 2;
						let IDbox = res.data.blocks[0].bbox;
						let itemCanvas = document.createElement("canvas");
						itemCanvas.id = 'itemCanvas';
						itemCanvas.width = (IDbox.x1 - IDbox.x0) / 5;
						itemCanvas.height = IDbox.y1 - IDbox.y0;
						let itemCtx = itemCanvas.getContext("2d");
						
						itemCtx.drawImage(imgCanvas, -info.x-IDbox.x0+textHeight/5.5, -info.y+(textHeight/2.6), img.width, img.height);
						// itemCtx.drawImage(img, -info.x, -info.y, img.width, img.height);
						getResult({
							id: 'name',
							resCanvas: itemCanvas
						}).then(nameRes => {
							let nameText = rep(nameRes.text)
							
							info.name = nameText;
							window.faceDetection.faceDetectionData.checkFace = url;
							plus.webview.postMessageToUniNView({
								identifyRes: true,
								info: info
							}, "__uniapp__service");
						})
					} else {
						next();
					}
				})
			}
			let next = () => {
				if (l < textList.length - 1) {
					l ++;
					o();
				} else if (!info.num && e < 3) {
					console.log('逆时针旋转90°');
					e += 1;
				} else if (!info.num) {
					alert('未识别到有效信息')
				}
			}
			next();
		}
		var cutImage = (rotate=0) => {
			textList = []
			info = {}
			imgCanvas = document.createElement("canvas");
			img = new Image();
			img.src = url;
			img.onload = () => {
				let w,h
				if (rotate==1) {
					h = 600
					w = img.width*(h/img.height)
				} else {
					w = 600
					h = img.height*(w/img.width)
				}
				img.width = w
				img.height = h
				
				let sourceMat = cv.imread(img);
				let lunkuoMat = cv.imread(img);
				let resMat = cv.imread(img);
				cv.cvtColor(resMat, resMat, cv.COLOR_BGR2GRAY);
				if (rotate) {
					for (var i = 0; i < rotate; i++) {
						cv.rotate(sourceMat, sourceMat, cv.ROTATE_90_CLOCKWISE);
						cv.rotate(lunkuoMat, lunkuoMat, cv.ROTATE_90_CLOCKWISE);
					}
				}
				// 灰度化
				cv.cvtColor(sourceMat, sourceMat, cv.COLOR_BGR2GRAY);
				 //调节背景
				let ocrMat = new cv.Mat();
				cv.normalize(sourceMat, ocrMat, -150, 300, cv.NORM_MINMAX);
				cv.imshow(imgCanvas, ocrMat);
				// 二值化
				cv.adaptiveThreshold(sourceMat, sourceMat, 255, 0, 1, 5, 10);
				
				// 腐蚀
				// 腐蚀系数
				let element = cv.getStructuringElement(0, new cv.Size(3, 2));
				cv.erode(sourceMat, sourceMat, element);
				
				
				cv.GaussianBlur(sourceMat, sourceMat, new cv.Size(7, 1), 0, 0);
				// cv.imshow("fushi", sourceMat)
				
				
				// 膨胀
				// 膨胀系数
				// console.log(this.dilateNum);
				let dilateValue = cv.getStructuringElement(0, new cv.Size(25, 25));
				cv.dilate(sourceMat, sourceMat, dilateValue);
				// cv.imshow("pengzhang", sourceMat)
				// 轮廓识别
				let contours = new cv.MatVector(); // 轮廓
				let hierarchy = new cv.Mat(); //等级
				if (rotate) {
					cv.rotate(lunkuoMat, lunkuoMat, cv[rotate]);
				}
				cv.findContours(sourceMat, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_NONE); // 这种方法记录线上的每个点.
			
				let l = contours.size();
				// console.log(l);
				for (let i = 0; i < l; ++i) {
					
					let val = `result${i}`
					let mp = contours.get(i);
					let box = cv.boundingRect(mp);
					// console.log(box);
					let area = box.width*box.height;
					// console.log(area);
					
					
					if (i == l - 1) {
						recognize(rotate);
						setTimeout(() => {
							sourceMat.delete()
							element.delete()
							dilateValue.delete()
							contours.delete()
							hierarchy.delete()
							resMat.delete()
							// partMat.delete()
							mp.delete()
						}, 100);
					}
					let prop = box.height/box.width
					// console.log(prop);
					
					if (area < 2000) continue
					// if (area > 100000) continue
					
					if ( prop > 4 && rotate < 3) {
						// rotate += 1
						// console.log('可能是竖图');
						// // // alert('可能是竖图')
						// i = l
						// cutImage(rotate)
					}
					if (prop > 0.2) continue
					
					// 绘制轮廓线
					let color = new cv.Scalar(255,0,0);
					cv.drawContours(lunkuoMat, contours, i, color, 1, cv.LINE_8, hierarchy, 100);
					
					
					
					let rect = new cv.Rect(box.x, box.y, box.width, box.height);
					let partMat = new cv.Mat();
					partMat = resMat.roi(rect);
					let dsize = new cv.Size(0, 0);
					cv.resize(partMat, partMat, dsize, 2, 2, cv.INTER_AREA)
					
					let resCanvas = document.createElement("canvas");
					resCanvas.id = "resCanvas";
					// resCanvas.id = val;
					cv.imshow(resCanvas, partMat);
					
					let obj = {
						id: val,
						area: area,
						x: box.x,
						y: box.y,
						width: box.width,
						height: box.height,
						resCanvas: resCanvas,
						prop: prop
					}
					let hasAdd = textList.some((item, k) => {
						if (item.prop > prop) {
							textList.splice(k, 0, obj);
							return true;
						}
					})
					if (!hasAdd) textList.push(obj)
					setTimeout(() => {
						partMat.delete();
					}, 300);
				}
				
			};
			
		}
		cutImage();
	}
	var install = function(video, success, user) {
		// Grab elements, create settings, etc.
		var mediaConfig = {
			video: {
				facingMode: user ? "user" : "environment",
				width: document.body.clientWidth,
				height: document.body.clientWidth
			}
		}; // Put video listeners into place

		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia(mediaConfig).then(function(stream) {
				// video.src = window.URL.createObjectURL(stream);
				// console.log(2222);
				// plus.webview.postMessageToUniNView({
				//   stream: stream
				// }, "__uniapp__service");
				videoStream = stream;
				video.srcObject = stream;
				video.play();
				success(video.srcObject);
			});
		}
		/* Legacy code below! */
		else if (navigator.getUserMedia) {
			// Standard
			navigator.getUserMedia(mediaConfig, function(stream) {
				videoStream = stream;
				video.src = stream;
				video.play();
				success();
			});
		} else if (navigator.mozGetUserMedia) {
			// Mozilla-prefixed
			navigator.mozGetUserMedia(mediaConfig, function(stream) {
				videoStream = stream;
				video.src = window.URL.createObjectURL(stream);
				video.play();
				success();
			});
		} else if (navigator.msGetUserMedia) {
			// Mozilla-prefixed
			navigator.msGetUserMedia(mediaConfig, function(stream) {
				videoStream = stream;
				video.src = window.URL.createObjectURL(stream);
				video.play();
				success();
			});
		} else if (navigator.webkitGetUserMedia) {
			// WebKit-prefixed
			navigator.webkitGetUserMedia(mediaConfig, function(stream) {
				videoStream = stream;
				video.src = window.webkitURL.createObjectURL(stream);
				video.play();
				success();
			});
		}
	};
	let hasLandmark=false,hasRecognition=false;

	let loadModel = async () => {
		console.log('loadModel');
		// faceapi.nets.tinyFaceDetector.loadFromUri('_www/uni_modules/xh-recco/static/model');
		// await faceapi.nets.faceLandmark68Net.loadFromUri('_www/uni_modules/xh-recco/static/model');
		
		// faceapi.nets.tinyFaceDetector.loadFromUri('/var/mobile/Containers/Data/Application/0A52D273-A627-46AF-901A-B51136F32497/Documents/Pandora/apps/C41691BC43747410091C6C3DF1390927/www/uni_modules/xh-recco/static/model')
		// await faceapi.nets.faceLandmark68Net.loadFromUri('/var/mobile/Containers/Data/Application/0A52D273-A627-46AF-901A-B51136F32497/Documents/Pandora/apps/C41691BC43747410091C6C3DF1390927/www/uni_modules/xh-recco/static/model');
		faceapi.nets.tinyFaceDetector.loadFromUri('https://static-mp-714763ef-ba0d-4dff-ab20-b4458c3d4f0c.next.bspapp.com/model')
		await faceapi.nets.faceLandmark68Net.loadFromUri('https://static-mp-714763ef-ba0d-4dff-ab20-b4458c3d4f0c.next.bspapp.com/model');
		hasLandmark = true
		// alert('加载模型完成')
		await faceapi.nets.faceRecognitionNet.loadFromUri('https://static-mp-714763ef-ba0d-4dff-ab20-b4458c3d4f0c.next.bspapp.com/model')
		hasRecognition = true
		console.log('识别模型加载完成');
		// alert('开始生成识别模型')
	}
	let loadFaceRecModel = async () => {
		
		await faceapi.nets.faceRecognitionNet.loadFromUri('https://static-mp-714763ef-ba0d-4dff-ab20-b4458c3d4f0c.next.bspapp.com/model')
		hasRecognition = true
		console.log('开始生成识别模型');
		alert('开始生成识别模型')
	}
	let loadOCRModel = async () => {
		// alert('loadOCRModel')
		tesseractWorker = await Tesseract.createWorker('chi_sim');
		// alert('worker加载完成')
		// await worker.loadLanguage('chi_sim');
		// await worker.initialize('chi_sim');
		// const ret = await tesseractWorker.recognize();
		// alert(JSON.stringify(ret.data.text))
	}
	document.addEventListener("plusready", function() {
		// plus.navigator.checkPermission('CAMERA');
		let oaName = plus.os.name
		loadOCRModel();
		loadModel();
		// 加载人脸识别模型
		// faceapi.nets.tinyFaceDetector.loadFromUri('https://static-mp-714763ef-ba0d-4dff-ab20-b4458c3d4f0c.next.bspapp.com/model')
		// 加载人脸点位图模型
		// faceapi.loadFaceLandmarkModel('https://static-mp-714763ef-ba0d-4dff-ab20-b4458c3d4f0c.next.bspapp.com/model')
		// faceapi.nets.faceLandmark68TinyNet.loadFromUri('https://static-mp-714763ef-ba0d-4dff-ab20-b4458c3d4f0c.next.bspapp.com/model')
		
		// 加载点位图对比模型
		// faceapi.nets.faceRecognitionNet.loadFromUri('https://static-mp-714763ef-ba0d-4dff-ab20-b4458c3d4f0c.next.bspapp.com/model')

		if (oaName == "iOS") {
			var AVCaptureDevice = plus.ios.import("AVCaptureDevice");
			var authStatus = AVCaptureDevice.authorizationStatusForMediaType("vide");
			
			if (authStatus == 3) {
				crea();
			} else {
				console.log(authStatus);
				// alert("请打开应用相机权限!");
				// gotoAppPermissionSetting();
			}
			
			plus.ios.deleteObject(AVCaptureDevice);
		} else {
			plus.android.requestPermissions(["android.permission.CAMERA"], function(e) {
				if (e.granted[0]) {
					crea();
				} else {
					alert("请打开应用相机权限!");
					gotoAppPermissionSetting();
				}
			});
		}
		
		
		function gotoAppPermissionSetting() {
			if (oaName == "iOS") {
				var UIApplication = plus.ios.import("UIApplication");
				var application2 = UIApplication.sharedApplication();
				var NSURL2 = plus.ios.import(
				"NSURL"); // var setting2 = NSURL2.URLWithString("prefs:root=LOCATION_SERVICES");

				var setting2 = NSURL2.URLWithString("app-settings:");
				application2.openURL(setting2);
				plus.ios.deleteObject(setting2);
				plus.ios.deleteObject(NSURL2);
				plus.ios.deleteObject(application2);
			} else {
				// console.log(plus.device.vendor);
				var Intent = plus.android.importClass("android.content.Intent");
				var Settings = plus.android.importClass("android.provider.Settings");
				var Uri = plus.android.importClass("android.net.Uri");
				var mainActivity = plus.android.runtimeMainActivity();
				var intent = new Intent();
				intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
				var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
				intent.setData(uri);
				mainActivity.startActivity(intent);
			}
		}
		

		function crea() {
			
			var video = document.getElementById('video');
			var body = document.body;
			var hello = document.getElementById('hello');
			var testContent = document.getElementById('test');
			var canvas = document.createElement("canvas");
			canvas.id = 'videoCanvas'
			let Animation;
			let faceImageUrl, noFace = 0, descriptors=[], innerHTMLtext = '请面向屏幕', windowInfo, passInfo = {isPass: false},testName, detectRes, intTime, openStream=false, isPass=false, isTest=false, faceScore=0, faceImage=0, checkOff=false, hasFace=false, i = 0, s = {}, colorList = ['green','#660099','red','blue'];
			let testList = [{
				name: '请张张嘴',
				value: 0
			}, {
				name: '请眨眨眼',
				value: 1
			}, {
				name: '请左右摇头',
				value: 'head'
			}]
			
			const options = new faceapi.TinyFaceDetectorOptions();
			// canvas.width = video.width();
			// canvas.height = video.height();
			const checkFaceDescriptor = async () => {
				
				// const img = new Image();
				// img.src = window.faceDetection.faceDetectionData.checkFace;
				
				// const result = await faceapi
				//   .detectAllFaces(img, options)
				//   .withFaceLandmarks()
				//   .withFaceDescriptors();
				
				const faceMatcher = new faceapi.FaceMatcher(new faceapi.LabeledFaceDescriptors(
				  'className',
				  descriptors
				))
				
				const img = new Image();
				img.src = window.faceDetection.faceDetectionData.checkFace;
				const result = await faceapi
					.detectAllFaces(img, options)
					.withFaceLandmarks()
					.withFaceDescriptors()
				// alert(JSON.stringify(result))
				let bestMatch = faceMatcher.findBestMatch(result[0].descriptor)
				// alert(JSON.stringify(bestMatch.distance));
				
				plus.webview.postMessageToUniNView({
					close: true,
					faceImage: faceImage,
					isCheck: bestMatch.distance<0.6?true:false,
					distance: (1-bestMatch.distance/0.6)*100
				}, "__uniapp__service");
				
				// 
				
				
				// let resList = []
				// // let iamges = ['88.png', '95.jpg', '98.png']
				// let iamges = ['12.jpg', '18.jpg', '22.jpg', '23.jpg', '43.jpg', '80.jpg', '95.jpg', '98.jpg']
				// for (let i = 0; i < iamges.length; i++) {
				// 	const img = new Image();
				// 	img.src = `https://mp-714763ef-ba0d-4dff-ab20-b4458c3d4f0c.cdn.bspapp.com/test/${iamges[i]}`;
				// 	const result = await faceapi
				// 	  .detectAllFaces(img, options)
				// 	  .withFaceLandmarks()
				// 	  .withFaceDescriptors()
				// 	let bestMatch = faceMatcher.findBestMatch(result[0].descriptor)
				// 	bestMatch.picName = iamges[i]
				// 	resList.push(bestMatch)
				// }
				// setTimeout(function() {
				// 	alert(JSON.stringify(resList));
				// }, 2000);
				
			}
			let lightScreen = () => {
				// hello.innerHTML = "请保持姿势不变";
				i = 0;
				clearInterval(s);
				s = setInterval(e => {
					if (!hasFace || !isPass) {
						// isPass = false
						clearInterval(s);
						// cancelAnimationFrame(Animation);
						// window.faceDetection.opendataStream();
						return
					}
					console.log(i);
					// $("body").css("background", colorList[i]);
					// $("#hello").css("color","#FFFFFF");
					// hello.innerHTML = "未检测到人脸";
					innerHTMLtext = "请保持姿势不变";
					hello.style.color = "#FFFFFF";
					body.style.background = colorList[i];
					i ++;
					if (i > 4) {
						
						// alert(window.faceDetection.faceDetectionData.checkFace)
						if (window.faceDetection.faceDetectionData.checkFace) {
							checkFaceDescriptor()
						} else {
							plus.webview.postMessageToUniNView({
								close: true,
								faceImage: faceImage
							}, "__uniapp__service");
						}
						
						
						
						// isPass = false
						clearInterval(s);
						// cancelAnimationFrame(Animation);
						
					}
					
				}, 1000);
			}
			
			var faceDetectCtrl = {
				type: false, //0张嘴，1眨眼
				faceList: [],
				isStraight: 0,
				isMouse: 0,
				isEye: 0,
				lastNorse: {
					_x: 0,
					_y: 0
				},
				lastInfo: {},
				averageEyeDistance: false,
				init: () => {
					faceDetectCtrl.averageEyeDistance = false
					faceDetectCtrl.type = false
					faceDetectCtrl.lastNorse = {
						_x: 0,
						_y: 0
					}
					faceDetectCtrl.lastInfo = []
					faceDetectCtrl.faceList = []
					faceDetectCtrl.isStraight = 0
					faceDetectCtrl.isMouse = 0
					faceDetectCtrl.isEye = 0
					isPass = false
				},
				start: (landmarks) => {
					const data = landmarks._positions
					let verticalValue = Math.abs(data[0]._y - data[16]._y)
					let norseHight = Math.abs(data[27]._y - data[29]._y)
					
					
					let leftFaceNorse = Math.abs(data[27]._x - data[0]._x)
					let rightFaceNorse = Math.abs(data[27]._x - data[16]._x)
					
					let faceNorse = Math.abs(leftFaceNorse - rightFaceNorse)
					let norseWidth = Math.abs(data[31]._x - data[35]._x)
					
					// $('#hello').html(`左${leftFaceNorse}<br />右${rightFaceNorse}<br />差${faceNorse}<br />宽${norseWidth}<br />差${verticalValue}<br />高${norseHight}`)
					// $('#hello').html(`${faceDetectCtrl.isStraight}`)
					if (verticalValue > norseHight) {
						// console.log('水平偏差');
						// innerHTMLtext = '请保持姿势端正';
					}
					if (faceNorse > norseWidth) {
						// console.log('左右偏差');
						// innerHTMLtext = '请正对屏幕';
					
					}
					// hello.innerHTML = faceDetectCtrl.isStraight;
					if (verticalValue > norseHight || faceNorse > norseWidth) {
						if (faceDetectCtrl.isStraight < 10) faceDetectCtrl.isStraight ++
					} else {
						if (faceDetectCtrl.isStraight) {
							
							faceDetectCtrl.isStraight --
						}
						
					}
					let mouseOpenHight=0, norseXPosition=0, norseYPosition=0;
					
					// hello.innerHTML = `Straight:${faceDetectCtrl.isStraight}<br/>isMouse:${faceDetectCtrl.isMouse}<br/>isEye:${faceDetectCtrl.isEye}<br/>`;
					if (faceDetectCtrl.isStraight > 8) innerHTMLtext = '请保持正对屏幕';
					if (faceDetectCtrl.isStraight == 0) {
						innerHTMLtext = testName;
						norseXPosition = Math.abs(data[30]._x - faceDetectCtrl.lastNorse._x)
						norseYPosition = Math.abs(data[30]._y - faceDetectCtrl.lastNorse._y)
						// hello.innerHTML = `norseXPosition:${norseXPosition}<br/>norseYPosition:${norseYPosition}<br/>norseWidth:${norseWidth}`;
						faceDetectCtrl.lastNorse = data[30]
						if (faceDetectCtrl.type === 0 && norseXPosition < norseWidth/10) {
							let mouseOpenWidth = Math.abs(data[63]._x - data[61]._x)
							mouseOpenHight = Math.abs(data[62]._y - data[66]._y)
							// testContent.innerHTML = `mouseOpenHight:${mouseOpenHight}<br/>mouseOpenWidth:${mouseOpenWidth}`;
							// return
							if (mouseOpenHight > mouseOpenWidth) faceDetectCtrl.isMouse = 1
							if (faceDetectCtrl.isMouse == 1 && mouseOpenHight < mouseOpenWidth) {
								faceDetectCtrl.isMouse = 2
								isPass = true
								passInfo.isPass = true
								innerHTMLtext = '很好请稍等'
							}
							
						}
						if (faceDetectCtrl.type === 1 && norseXPosition < norseWidth/10 && norseYPosition < norseWidth/10) {
							let EyeLengthX = 0,EyeLengthY = 0;
							// EyeLengthX = Math.abs(data[27]._x - data[0]._x) + Math.abs(data[27]._x - data[16]._x)
							EyeLengthY = Math.abs(data[27]._y - data[0]._y) + Math.abs(data[27]._y - data[16]._y)
							landmarks.getLeftEye().map(item => {
								// EyeLengthX += Math.abs(data[27]._x - item._x)
								EyeLengthY += Math.abs(data[27]._y - item.y)
							})
							landmarks.getRightEye().map(item => {
								// EyeLengthX += Math.abs(data[27]._x - item._x)
								EyeLengthY += Math.abs(data[27]._y - item.y)
							})
							landmarks.getLeftEyeBrow().map(item => {
								// EyeLengthX += Math.abs(data[27]._x - item._x)
								EyeLengthY += Math.abs(data[27]._y - item.y)
							})
							landmarks.getRightEyeBrow().map(item => {
								// EyeLengthX += Math.abs(data[27]._x - item._x)
								EyeLengthY += Math.abs(data[27]._y - item.y)
							})
							if (faceDetectCtrl.lastInfo.EyeLengthY) {
								// const xLength = Math.abs(faceDetectCtrl.lastInfo.EyeLengthX - EyeLengthX)
								const yLength = Math.abs(faceDetectCtrl.lastInfo.EyeLengthY - EyeLengthY)
								
								if (yLength > norseWidth / 2 && yLength < norseWidth) {
									// let eyeHight = Math.abs(data[41]._y - data[37]._y)
									// hello.innerHTML = `EyeLengthY:${yLength}<br/>norseWidth:${norseWidth}`;
									// testContent.innerHTML = `yLength:${yLength}<br/>norseWidth:${norseWidth/2}`;
									// return
									
									faceDetectCtrl.isEye = 1
									isPass = true
									passInfo.isPass = true
									hello.innerHTML = '很好请稍等'
								}
							}
							// faceDetectCtrl.lastInfo.EyeLengthX = EyeLengthX
							faceDetectCtrl.lastInfo.EyeLengthY = EyeLengthY
						}
					}
				}
				
			}
			
			
			window.faceDetection = {
				identifyData: {},
				faceDetectionData: {},
				loadFaceRecModelUrl: '',
				ClosedataStream() {
					cancelAnimationFrame(Animation);
					openStream = false;
					video.pause();
					if (videoStream) {
						videoStream.getTracks().forEach(function(track) {
							if (track.readyState == 'live') {
								track.stop();
							}
						});
					}
					hello.innerHTML = "请移动人脸到框内";
					hello.style.color = "#333333";
					body.style.background = "#FFFFFF";
					video.style.display = 'none';
					faceImage = false;
					// video.stop();
				},
				async loadFaceRecModel() {
					let t = 2000
					if (!hasLandmark) {
						t = 5000
					}
					setTimeout(async () => {
						await faceapi.nets.faceRecognitionNet.loadFromUri(this.loadFaceRecModelUrl)
						hasRecognition = true
					}, t);
					
					// alert('开始生成识别模型')
				},
				async identify() {
					
					getTextList(this.identifyData.imageUrl)
				},
				videoInstall(e) {
					// alert(this.faceDetectionData.checkFace)
					// faceImageUrl = JSON.parse(e).checkFace
					install(video, async function(e) {
						hello.innerHTML = "请移动人脸到框内";
						hello.style.color = "#333333";
						body.style.background = "#FFFFFF";
						video.style.display = 'block';
						
						window.faceDetection.opendataStream('videoInstall');
						openStream = true;
						testName = '';
						descriptors = [];
						faceScore = 0
						console.log('install');
						faceDetectCtrl.init();
						// window.faceDetection.opendataStream();
					}, true);
					Object.defineProperty(passInfo,'isPass',{
						get:function() {
							return false
						},
						set: function(value) {
							if (value) lightScreen()
						}
					})
				},
				
			
				async opendataStream(e) {
					// console.log(e);
					// faceScore++
					// let testName = ''
					// plus.webview.postMessageToUniNView({
					// 	detectRes: faceScore
					// }, "__uniapp__service");
					setTimeout(function() {
						// console.log(openStream);
						if (openStream) window.faceDetection.opendataStream('setTimeout');
					}, 100);
					
					// const detectRes = await faceapi.detectSingleFace(video, options).withFaceLandmarks().withFaceDescriptor();
					if (hasLandmark) detectRes = await faceapi.detectSingleFace(video, options).withFaceLandmarks();
					
					// detectRes = await faceapi.detectSingleFace(video, options).withFaceLandmarks();
					// const landmarks = await faceapi.detectFaceLandmarksTiny(video);
					// hello.innerHTML = "来了老弟！";
					// hello.innerHTML = JSON.stringify(detectRes);
					// console.log(JSON.stringify(detectRes));
					if (detectRes) {
						// alert(JSON.stringify(detectRes.detection._score))
						// return
						noFace = 0
						hasFace = true
						let nowScore = detectRes.detection._score
						if (hasRecognition && nowScore > 0.8) {
							// const result = await faceapi
							//   .detectSingleFace(video, options)
							//   .withFaceLandmarks()
							//   .withFaceDescriptors();
							// alert(JSON.stringify(result.descriptor))
							// console.log('开始生成识别模型');
							descriptors.push(await faceapi.computeFaceDescriptor(video))
						}
						if (nowScore > faceScore) {
							faceScore = nowScore
							console.log(nowScore);
							window.faceDetection.getimg();
							
						}
						// faceDetectCtrl.start(detectRes.landmarks);
						if (!isPass) {
							if (!testName) {
								let mathRandom = parseInt(Math.random() * 2);
								testName = testList[mathRandom].name;
								faceDetectCtrl.type = testList[mathRandom].value;
							} else faceDetectCtrl.start(detectRes.landmarks);
							
							// innerHTMLtext = testName;
						} else {
							// innerHTMLtext = "请保持姿势不变";
						}
						hello.innerHTML = innerHTMLtext;
					
					} else {
						noFace += 1
						if (noFace >= 10 && noFace < 30) {
							hello.innerHTML = "请移动人脸到框内";
						}
						if (noFace >= 30) {
							hasFace = false;
							isPass = false;
							passInfo.isPass = false;
							hello.innerHTML = "未检测到人脸";
							testName = '';
							body.style.background = '#FFFFFF';
							hello.style.color = '#333333';
						}
						// setTimeout(function() {
						// 	// alert(JSON.stringify(detectRes))
						// 	if (!detectRes) {
						// 		if (hasFace) {
						// 			hasFace = false
						// 			hello.innerHTML = "请移动人脸到框内";
						// 			setTimeout(function() {
						// 				if (!hasFace) {
						// 					hello.innerHTML = "未检测到人脸";
						// 				}
						// 			}, 3000);
						// 			testName = ''
						// 			body.style.background = '#FFFFFF'
						// 			hello.style.color = '#333333'
						// 		}
						// 	}
						// }, 800);
					}
					
				},
			
				async getimg() {
					// canvas.width = $("#video").width();
					// canvas.height = $("#video").height();
					let clientWidth = document.body.clientWidth;
					let clientHeight = document.body.clientHeight;
					canvas.width = clientWidth*2.1;
					canvas.height = clientWidth*2.1;
					let ctx = canvas.getContext("2d")
					ctx.translate(canvas.width, 0);
					ctx.scale(-1, 1);
					ctx.drawImage(video, 0, -clientHeight*0.1, canvas.width, canvas.width);
					let img = canvas.toDataURL("image/png");
					// cancelAnimationFrame(Animation);
					faceImage = img;
					
					const faceDes = new Image();
					faceDes.src = faceImage;
					// descriptors = [await faceapi.computeFaceDescriptor(faceDes)];
					// console.log(img);
					// plus.webview.postMessageToUniNView({
					// 	close: true,
					// 	faceImage: faceImage
					// }, "__uniapp__service");
					// plus.webview.postMessageToUniNView({
					// 	img: img
					// }, "__uniapp__service");
					
				}
			
			};
			
		}
		
	}, false);

})));
