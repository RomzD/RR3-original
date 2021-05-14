
function genPass(form)
{
	
	
	if(form.moneyInput.value>65535){
		form.moneyInput.value=65535;
	}
	else if(form.moneyInput.value<0){
		form.moneyInput.value=0;
	}
/////////////////////////

	/*console.log('value is '+form.moneyInput.value[0]);
	console.log('form.money.Input.value === 0 ? is '+(form.moneyInput.value[0]===0))
	console.log('form.moneyInput.value.length is  '+  form.moneyInput.value.length );
	console.log('form.moneyInput.value.length is greater than 1?  '+  ((form.moneyInput.value.length) >1));*/
	if((form.moneyInput.value[0]==='0') && ((form.moneyInput.value.length) >1))
	{
		
		var counter=0;
		for(let i=0;i<(form.moneyInput.value.length);i++)
		{
			if(form.moneyInput.value[i]==='0')
			{
				counter++;
			}
			else break;
		}
		form.moneyInput.value=form.moneyInput.value.slice(counter);
		if(form.moneyInput.value==='')
		{
			form.moneyInput.value='0';
		}
	}//check for zeroes at beggining
	
/*	var reg = new RegExp('[0-9]');
	if((form.moneyInput.value.length) >0){
		for(let i=0;i<(form.moneyInput.value.length);i++){
			console.log('value is '+form.moneyInput.value);

			console.log('reg.test(value) is '+reg.test(form.moneyInput.value[i]));

			if (!reg.test(form.moneyInput.value[i]) )
			{
				console.log('im in inner if');

				form.moneyInput.value=form.moneyInput.value.replace(form.moneyInput.value[i],'');
				i=0;
			}
		}

	}//check for wrong symbols
*/

var moneyInputStyle= form.moneyInput;
var alphaChannel = 0.712;
alphaChannel=(1/65535)*Number(moneyInputStyle.value);
moneyInputStyle.style.boxShadow ='0px 0px 5px rgba(22, 255, 23,' +alphaChannel +')';
//////////////////
	var para= document.querySelector('p');
	var alphabet="0123456789ABCDEFGHIJKLMNOPQRSTUV";
	var level=form.levels.value;
	var money= form.moneyInput.value //form.money.value;
	var bike= form.bikeName.value;
	bike= bike==='' ? 0 : bike;
	//console.log('bike typeof='+ typeof bike+'bike.value='+bike);
	var tracks=new Number(0);
	var passchars=new Array(0,0,0,0,0,0,0,0);
//	console.clear();
//	console.log('im in pass');
	for (var i=0;i<form.tracks.length;i+=1)
	{
		
		//console.log(i + ' ' +form.tracks[i]+' is checked:'+form.tracks[i].checked);
		if (form.tracks[i].checked)
			tracks+=1<<i;
			
	}
	var str_pass="";
	//if (tracks<31 && form.money.value!="" && money>=0 && money<=65535)
//	{
		for (var i=0;i<4;i+=1)
		{
			passchars[i]=((money>>(4*i))&15)<<1;//заталкиваются по 4 бита от того, что введено в деньги потом дополняются до 5 цифр нулем
		}
		passchars[4]=level; // просто загоняется от 1 до 5
		passchars[5]=bike<<1; //загоняются байки 0000 = перро125  1111=WT  , потом дополняются до 1
		passchars[6]=tracks;
		if (form.performance.checked)
			passchars[0]|=1;	//если отмечен перформанс, логическое или для 1 разряда у первого элемента массива
		if (form.suspension.checked)
			passchars[1]|=1;       //если отмечена подвеска, логическое или до 1 разряда у второго элемента массива
		if (form.tires.checked)
			passchars[4]|=8;       // логическое или для 3 элемента, дополняется 4 бит
		if (form.armor.checked)
			passchars[4]|=16;      //дополняется 5 бит
		var control=((passchars[2]&0x1E)+(passchars[3]&0x1E)+(passchars[5]&0x1E))&7;
//самое непонятное. Берется число 16 в hex. 10000 и побитово сравнивается с деньгами из 2 ячейки. 
//ааа часть контрольной суммы, складываются главные биты из 2, 3 ячеек и первые 3 бита из 5 ячейки
//Просто складываются, получается некое число.
		if (control&4)
			passchars[5]|=1;//вот тут надо выяснить. Видимо если получилось 100, в 1 бит 5 элемента ставится 1
		if (control&2)
			passchars[3]|=1;//если 10, то в первый бит третьего элемента ставится 1
		if (control&1)
			passchars[2]|=1;//если 01, то во вт
		var checksum=0; //переменная контрольной суммы
		for (var i=0;i<6;i+=1)
		{	
			checksum+=Number(passchars[i]);// суммируются в десятичном виде первые 6 элементов массива
		}
		checksum^=passchars[6]; // логическое ИЛИ контрольной суммы с трассами
		checksum+=1; //контрольную сумму увеличивают на 1
		checksum&=0x1F;//31 Контрольная сумма переводится в 32ричную систему
		passchars[7]=checksum;
		for (var i=0;i<passchars.length;i+=1)//проходится каждый элемент массива
		{
			str_pass+=alphabet.charAt(passchars[i]); //значение в строку пароля берется из символов алфавита
			if (i==passchars.length/2-1)//пробел в середине
				str_pass+=" ";
		}
//	}
	para.textContent=str_pass;

}