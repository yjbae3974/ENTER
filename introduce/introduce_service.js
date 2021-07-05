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
		<div class="cub-content mt-5">
			스타트업을 대상으로 아이디어를 접수합니다.<br>
			각 아이디어를 분석하여 가능성 없는 아이디어를 배제하고<br>
			서비스를 제공할 아이디어를 뽑는 과정을 거칩니다.
		</div>
	</div>
	<div class="col-lg-6 d-flex justify-content-center">
		<img src="../img/Service Process/image 69.png" alt="">
	</div>
</div>`,
`<div class="row">
<div class="col-lg-6">
	<div class="sub-subtitle">
		Selecting Service
	</div>
	<div class="cub-content mt-5">
		스타트업 진행 정도, 스타트업의 종류,<br>
		제공하는 서비스의 난이도 차이에 따라<br>
		서비스를 4단계로 나누어 진행합니다.<br>
		스타트업은 원하는 서비스를 선택할 수 있습니다.
	</div>
</div>
<div class="col-lg-6 d-flex justify-content-center">
	<img src="../img/Service Process/image 72.png" alt="">
</div>
</div>`,
	"스텝 3입니당",
	"스텝 4입니당",
	"스텝 5입니당"
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
