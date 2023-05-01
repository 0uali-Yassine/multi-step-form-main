let step1 = document.querySelector('.step1');
let One_1 = document.querySelector('.One_1');
let One_2 = document.querySelector('.One_2');
let One_3 = document.querySelector('.One_3');
let One_4 = document.querySelector('.One_4');
let label1 = document.querySelector('.labelOne');
let label2 = document.querySelector('.labelTwo');
let label3 = document.querySelector('.labelThree');
let btnstep1 = document.querySelector('.btnStep_1');

let Name = document.querySelector('.inputName');
let email = document.querySelector('.inputEmail');
let phone = document.querySelector('.inputPhone');

email.addEventListener('click',()=>{

    if(Name.value === ''){
        label1.style.display = 'block';
        Name.style.border = '1px solid #ed3548';
    }else{
        label1.style.display = 'none';
        Name.style.border = '1px solid #9699ab';
    }
})
phone.addEventListener('click',()=>{

    if(email.value === '' ){
        label2.style.display = 'block';
        email.style.border = '1px solid #ed3548';
    }else{
        label2.style.display = 'none';
        email.style.border = '1px solid #9699ab';
    }
})

btnstep1.addEventListener('mouseover',()=>{
    if(Name.value !== '' && email.value !== '' && phone.value !== ''){
        btnstep1.style.cursor = 'pointer';
        btnstep1.addEventListener('click',()=>{
            step1.style.display = 'none';
            One_1.style.backgroundColor = 'transparent';
            One_1.style.color = 'white';
            One_2.style.backgroundColor = '#bfe2fd';
            One_2.style.color = 'black';
            step2.style.display = 'block';
        })
    }
})

let step2 = document.querySelector('.step2');
let go_back_step2 = document.querySelector('.go_back_step2');
let btnstep2 = document.querySelector('.btnStep_2');
let section1 = document.querySelector('.section1');
let section2 = document.querySelector('.section2');
let section3 = document.querySelector('.section3');
let btnForChoise = document.querySelector('.btnForChoise');
let btnChoise = document.querySelector('.btnChoise');
let planChoise = ''; 
section1.addEventListener('click',()=>{
    section1.classList.add('bg-[#f0f6ffa7]');
    section1.classList.add('border-[#473dff]');
    section2.classList.remove('bg-[#f0f6ffa7]');
    section2.classList.remove('border-[#473dff]');
    section3.classList.remove('bg-[#f0f6ffa7]');
    section3.classList.remove('border-[#473dff]');
    planChoise = 'Arcade';
    btnstep2.style.cursor = 'pointer';
    if(btnChoise.classList.contains('translate-x-[18px]')){
        sumOfAllPraices = 90;
        
      }else{
          sumOfAllPraices = 9;
      }

})
section2.addEventListener('click',()=>{
    section2.classList.add('bg-[#f0f6ffa7]');
    section2.classList.add('border-[#473dff]');
    section1.classList.remove('bg-[#f0f6ffa7]');
    section1.classList.remove('border-[#473dff]');
    section3.classList.remove('bg-[#f0f6ffa7]');
    section3.classList.remove('border-[#473dff]');
    planChoise = 'Advanced';
    btnstep2.style.cursor = 'pointer';
    if(btnChoise.classList.contains('translate-x-[18px]')){
        sumOfAllPraices = 120;
        
      }else{
          sumOfAllPraices = 12;
      }
})
section3.addEventListener('click',()=>{
    section3.classList.add('bg-[#f0f6ffa7]');
    section3.classList.add('border-[#473dff]');
    section1.classList.remove('bg-[#f0f6ffa7]');
    section1.classList.remove('border-[#473dff]');
    section2.classList.remove('bg-[#f0f6ffa7]');
    section2.classList.remove('border-[#473dff]');
    planChoise = 'Pro';
    btnstep2.style.cursor = 'pointer';
    if(btnChoise.classList.contains('translate-x-[18px]')){
      sumOfAllPraices = 150;

    }else{
        sumOfAllPraices = 15;
    }
})


go_back_step2.addEventListener('click',()=>{
    step1.style.display  = 'flex';
    step2.style.display = 'none';
    One_1.style.backgroundColor = '#bfe2fd';
    One_1.style.color = 'black';
    One_2.style.backgroundColor = 'transparent';
    One_2.style.color = 'white';
})



let section_info1 = document.querySelector('.section_info1');
let section_info2 = document.querySelector('.section_info2');
let section_info3 = document.querySelector('.section_info3');
let freeMonhts = document.querySelectorAll('.free_months');
let monthly = document.querySelector('.monthly');
let yearly = document.querySelector('.yearly');
let paraOnestep1 = document.querySelector('.paraOnestep1');
let paraTwostep1 = document.querySelector('.paraTwostep1');
let paraThreestep1 = document.querySelector('.paraThreestep1');

btnChoise.style.transition = 'all .3s ease-out 0s';
btnChoise.addEventListener('click',()=>{
    btnChoise.classList.toggle('translate-x-[18px]');
    monthly.classList.toggle('text-[#9699ab]');
    yearly.classList.toggle('text-[#02295afe]');
    if(btnChoise.classList.contains('translate-x-[18px]')){
        freeMonhts.forEach(free =>{
            free.style.display = 'block';
            paraOnestep1.innerText = '$90/yr';
            paraTwostep1.innerText = '$120/yr';
            paraThreestep1.innerText = '$150/yr';
            paraCheck1.innerText = '+$10/yr';
            paraCheck2.innerText = '+$20/yr';
            paraCheck3.innerText = '+$20/yr';
        })
    }else{
        freeMonhts.forEach(free =>{
            free.style.display = 'none';
            paraOnestep1.innerText = '$9/mo';
            paraTwostep1.innerText = '$12/mo';
            paraThreestep1.innerText = '$15/mo';
            paraCheck1.innerText = '+$1/mo';
            paraCheck2.innerText = '+$2/mo';
            paraCheck3.innerText = '+$2/mo';
        })
    }
    
    
})

btnstep2.addEventListener('click',()=>{
    if(planChoise == 'Arcade' || planChoise == 'Advanced' || planChoise == 'Pro'){
        step2.style.display = 'none';
        One_2.style.backgroundColor = 'transparent';
        One_2.style.color = 'white';
        One_3.style.backgroundColor = '#bfe2fd';
        One_3.style.color = 'black';
        step3.style.display = 'block';
    }
   
})

let step3 = document.querySelector('.step3');
let label_check_one = document.querySelector('.check_one');
let label_check_two = document.querySelector('.check_two');
let label_check_three = document.querySelector('.check_three');

let check1 = document.querySelector('#check1');
let check2 = document.querySelector('#check2');
let check3 = document.querySelector('#check3');
let btnStep3 = document.querySelector('.btnStep_3');

let paraCheck1 = document.querySelector('.paraCheck1');
let paraCheck2 = document.querySelector('.paraCheck2');
let paraCheck3 = document.querySelector('.paraCheck3');

label_check_one.addEventListener('click',()=>{
    if(check1.checked){
        label_check_one.style.backgroundColor = '#f0f6ffa7';
        label_check_one.style.border = '1px solid #473dff';
    }else{
        label_check_one.style.backgroundColor = 'white';        
        label_check_one.style.border = '1px solid #d6d9e6';     
    }
})
label_check_two.addEventListener('click',()=>{
    if(check2.checked){
        label_check_two.style.backgroundColor = '#f0f6ffa7';
        label_check_two.style.border = '1px solid #473dff';
    }else{
        label_check_two.style.backgroundColor = 'white';        
        label_check_two.style.border = '1px solid #d6d9e6';        
    }
})
label_check_three.addEventListener('click',()=>{
    if(check3.checked){
        label_check_three.style.backgroundColor = '#f0f6ffa7';
        label_check_three.style.border = '1px solid #473dff';
    }else{
        label_check_three.style.backgroundColor = 'white';        
        label_check_three.style.border = '1px solid #d6d9e6';        
    }
})

let step4 = document.querySelector('.step4');
btnStep3.addEventListener('mouseover',()=>{
    if(check1.checked || check2.checked || check3.checked){
        btnStep3.style.cursor = 'pointer';
        btnStep3.addEventListener('click',()=>{
            One_3.style.backgroundColor = 'transparent';
            One_3.style.color = 'white';
            One_4.style.backgroundColor = '#bfe2fd';
            One_4.style.color = 'black';
            step3.style.display = 'none';
            step4.style.display = 'block';
        
            if(btnChoise.classList.contains('translate-x-[18px]')){
                total_m_y.innerText = 'Total(per year)';
                switch (planChoise) {
                    case 'Arcade':
                    choisePlanFinal.innerText = 'Arcade(Yearly)';                
                        break;
                    case 'Advanced':
                    choisePlanFinal.innerText = 'Advanced(Yearly)';
                        break;
                    default:
                    choisePlanFinal.innerText = 'Pro(Yearly)';
                        break;
                }
        
                switch (planChoise) {
                    case 'Arcade':
                    PricePlanFinal.innerText = '$90/yr';                
                        break;
                    case 'Advanced':
                    PricePlanFinal.innerText = '$120/yr';
                        break;
                    default:
                    PricePlanFinal.innerText = '$150/yr';
                        break;
                }
            }else{
                total_m_y.innerText = 'Total(per month)';
                switch (planChoise) {
                    case 'Arcade':
                    choisePlanFinal.innerText = 'Arcade(Monthly)';                
                        break;
                    case 'Advanced':
                    choisePlanFinal.innerText = 'Advanced(Monthly)';
                        break;
                    default:
                    choisePlanFinal.innerText = 'Pro(Monthly)';
                        break;
                }
        
                switch (planChoise) {
                    case 'Arcade':
                    PricePlanFinal.innerText = '$9/mo';                
                        break;
                    case 'Advanced':
                    PricePlanFinal.innerText = '$12/mo';
                        break;
                    default:
                    PricePlanFinal.innerText = '$15/mo';
                        break;
                }
            }

            if(check1.checked){
                adds1.style.display = 'flex';
                addsOneChoise1.innerText = 'Online service';
                if(btnChoise.classList.contains('translate-x-[18px]')){
                    paraPriceAdds1.innerText = '+$10/yr';
                    sumOfAllPraices += 10;
                }else{
                    paraPriceAdds1.innerText = '+$1/mo';
                    sumOfAllPraices += 1;
                }
            }else{
                adds1.style.display = 'none';
            }
            if(check2.checked){
                adds2.style.display = 'flex';
                addsOneChoise2.innerText = 'Larger storage';
                if(btnChoise.classList.contains('translate-x-[18px]')){
                    paraPriceAdds2.innerText = '+$20/yr';
                    sumOfAllPraices += 20;
                }else{
                    paraPriceAdds2.innerText = '+$2/mo';
                    sumOfAllPraices += 2;
                }
            }else{
                adds2.style.display = 'none';
            }

            if(check3.checked){
                adds3.style.display = 'flex';
                addsOneChoise3.innerText = 'Customizable profile';
                if(btnChoise.classList.contains('translate-x-[18px]')){
                    paraPriceAdds3.innerText = '+$20/yr';
                    sumOfAllPraices += 20;
                }else{
                    paraPriceAdds3.innerText = '+$2/mo';
                    sumOfAllPraices += 2;
                }

            }else{
                adds3.style.display = 'none';
            }
            if(btnChoise.classList.contains('translate-x-[18px]')){
                totalPrice.innerText = `$${sumOfAllPraices}/yr`;

            }else{
                totalPrice.innerText = `$${sumOfAllPraices}/mo`;
            }
        })
    }else{
        btnStep3.style.cursor = 'not-allowed';
     
    }
})

let go_back_step3 = document.querySelector('.go_back_step3');
go_back_step3.addEventListener('click',()=>{
    step2.style.display = 'block';
    step3.style.display = 'none';
    One_3.style.backgroundColor = 'transparent';
    One_3.style.color = 'white';
    One_2.style.backgroundColor = '#bfe2fd';
    One_2.style.color = 'black';
})

let adds1 = document.querySelector('.adds1');
let adds2 = document.querySelector('.adds2');
let adds3 = document.querySelector('.adds3');
let choisePlanFinal = document.querySelector('.choisePlanFinal');
let PricePlanFinal = document.querySelector('.PricePlanFinal');
let addsOneChoise1 = document.querySelector('.addsOneChoise1');
let addsOneChoise2 = document.querySelector('.addsOneChoise2');
let addsOneChoise3 = document.querySelector('.addsOneChoise3');
let paraPriceAdds1 = document.querySelector('.paraPriceAdds1');
let paraPriceAdds2 = document.querySelector('.paraPriceAdds2');
let paraPriceAdds3 = document.querySelector('.paraPriceAdds3');
let total_m_y = document.querySelector('.total_m_y');
let totalPrice = document.querySelector('.totalPrice');
let sumOfAllPraices = 0;

let go_back_step4 = document.querySelector('.go_back_step4');
go_back_step4.addEventListener('click',()=>{
    step3.style.display = 'block';
    step4.style.display = 'none';
    One_4.style.backgroundColor = 'transparent';
    One_4.style.color = 'white';
    One_3.style.backgroundColor = '#bfe2fd';
    One_3.style.color = 'black';
    check1.checked = false;
    check2.checked = false;
    check3.checked = false;
})
let change = document.querySelector('.Change');
change.addEventListener('click',()=>{
    sumOfAllPraices = 0;
    check1.checked = false;
    check2.checked = false;
    check3.checked = false;
    One_4.style.backgroundColor = 'transparent';
    One_4.style.color = 'white';
    One_2.style.backgroundColor = '#bfe2fd';
    One_2.style.color = 'black';
    step2.style.display = 'block';
    step4.style.display = 'none';
    

})
let stepFinal = document.querySelector('.stepFinal');
let Confirm = document.querySelector('.confirm');
Confirm.addEventListener('click',()=>{
    step4.style.display = 'none';
    stepFinal.style.display = 'block';
})