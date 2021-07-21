const  previousBtn  =  document.getElementById('previousBtn');
const  nextBtn  =  document.getElementById('nextBtn');
const  finishBtn  =  document.getElementById('finishBtn');
const  content  =  document.getElementById('content');
const  bullets  =  [...document.querySelectorAll('.bullet')];
const progress = [...document.querySelectorAll('.progress-line')];
const  steps  =  [...document.querySelectorAll('.step')];
var contentText = [
	`<div class="row">
	<div class="col-lg-6">
		<div class="sub-subtitle">
			Screening
		</div>
		<div class="sub-content mt-5">
			스타트업을 대상으로 아이디어를 접수합니다.<br>
			각 아이디어를 분석하여 가능성 없는 아이디어를 배제하고<br>
			서비스를 제공할 아이디어를 뽑는 과정을 거칩니다.
		</div>
	</div>
	<div class="col-lg-6 d-flex justify-content-center">
		<img class="mt-5 mt-lg-0" style="max-width: 95%" src="../img/Service Process/image 69.png" alt="">
	</div>
</div>`,
`<div class="row">
<div class="col-lg-6">
	<div class="sub-subtitle">
		Selecting Service
	</div>
	<div class="sub-content mt-5">
		스타트업 진행 정도, 스타트업의 종류,<br>
		제공하는 서비스의 난이도 차이에 따라<br>
		서비스를 4단계로 나누어 진행합니다.<br>
		스타트업은 원하는 서비스를 선택할 수 있습니다.
	</div>
</div>
<div class="col-lg-6 d-flex justify-content-center">
	<img class="mt-5 mt-lg-0" style="max-width: 95%" src="../img/Service Process/image 72.png" alt="">
</div>
</div>`,
`<div class="row">
<div class="col-lg-6">
	<div class="sub-subtitle">
		Consulting & Deal making
	</div>
	<div class="sub-content mt-5">
		Idad Pool을 접수하고, 시장 검증을 통해 초기 데이터를 생성합니다.<br>
		데이터를 기반으로 적절한 VC/AC를 분석하여<br>
		Idea Business와 VC/AC 사이를 조율합니다.<br>
		또한 아이디어를 정부/지자체, VC/AC, 일반 기업 등으로 전달하여<br>
		원활하게 대규모 투자가 이루어질 수 있도록 도움을 줍니다.
	</div>
</div>
<div class="col-lg-6 d-flex justify-content-center">
	<img class="mt-5 mt-lg-0" style="max-width: 95%" src="../img/Service Process/image 73.png" alt="">
</div>
</div>`,
`<div class="row">
<div class="col-lg-4">
	<div class="sub-subtitle">
		Securitization
	</div>
	<div class="sub-content mt-4">
		아이디어나 상품에 대해 증권화를 진행합니다.
	</div>
	<div class="d-flex justify-content-center">
	<img class="mt-5 mt-lg-0" style="max-width: 100%;" src="../img/Service Process/마켓 1.png">
	</div>
</div>
<div class="col-lg-8 d-flex justify-content-center">
	<div class="row">
	<div class="col-lg-7 d-flex justify-content-center">
	<img src="../img/Service Process/로그인한 후 메인페이지 1.png" style="max-width: 100%;">
	</div>
	<div class="col-lg-5 d-flex justify-content-center">
	<img src="../img/Service Process/마켓-클릭 (1) 1.png" style="max-width: 100%;">
	</div>
	</div>
	
</div>
</div>`,
	
]

const MAX_STEPS = 4;
let currentStep = 1;

content.innerHTML  =  `${contentText[currentStep-1]}`;
function goSteps(i){
	currentStep = i+1;
		for(var j = 0; j < i+1; j++){
			if(bullets[j].classList.contains('completed')){
				continue;
			}
			bullets[j].classList.add('completed');
			if(j<3){
				if(progress[j].classList.contains('disabled') == true){
					progress[j].classList.remove('disabled');
					
				}
			}
			
		}
		for(var k = currentStep;k <= 3; k++){
			if(bullets[k].classList.contains('completed')){
				bullets[k].classList.remove('completed');
				if(k<3){
					if(progress[k].classList.contains('disabled')==false){
						progress[k].classList.add('disabled');
						
					}
				}
				
				
			}
		}
		console.log(currentStep);
		content.innerHTML  =  `${contentText[currentStep-1]}`;
	}
//for(var i = 0;i<5;i++){
//	bullets[i].addEventListener('click', function(){
//		goSteps(i);
//	})
//}

	//bullets[0].addEventListener('click', () => {
	//	currentStep = 0+1;
	//	for(var j = 0; j < i+1; j++){
	//		if(bullets[j].classList.contains('completed')){
	//			continue;
	//		}
	//		bullets[j].classList.add('completed');
	//		console.log(currentStep);
	//	}
	//	for(var k = j + 1;k <= 4; k++){
	//		if(bullets[k].classList.contains('completed')){
	//			bullets[k].classList.remove('completed');
	//		}
	//	}
	//});
