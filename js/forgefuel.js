 function nameSimplify($name){
	$name=($name.replace(/[^a-zA-Z]/g, ""));
	$name=$name.toLowerCase();
	return $name;
}

function updateItemPage(){
	//MODITEMS.JAVA
	//public static Item tutorialHelmet;
	var simpName =nameSimplify(document.getElementById("iname").value);
	document.getElementById("itemDeclaration").innerHTML =
	"public static Item "+simpName+";";

	//GameRegistry.registerItem(tutorialItem = new BasicItem("tutorial_item"), "tutorial_item");
	document.getElementById("itemRegistration").innerHTML =
	"GameRegistry.registerItem("+simpName+' = new BasicItem("'+simpName+'"),'+'"'+simpName+'");';

	//ITEMRENDERREGISTER.JAVA
	document.getElementById("itemRender").innerHTML =
	"render(ModItems."+simpName+");";
	//reg(ModItems.tutorialItem);

	//JSON
	var obj ={
	    "parent":"mod:item/standard_item",
	    "textures": {
	        "layer0":"mod:items/"+simpName
	    }
	}
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

	document.getElementById("itemJSON").innerHTML =
	'<a href="data:' + data + '" download="'+simpName+'.json">Download JSON</a>';

	document.getElementById("itemTextures").innerHTML = 
	'<a href="http://forgefuel.net/images/16.png"download="'+simpName+'.png">Download Blank 16x16</a><br>'+
	'<a href="http://forgefuel.net/images/32.png" download="'+simpName+'.png">Download Blank 32x32</a><br>'+
	'<a href="http://forgefuel.net/images/64.png" download="'+simpName+'.png">Download Blank 64x64</a><br>'+
	'<a href="http://forgefuel.net/images/128.png" download="'+simpName+'.png">Download Blank 128x128</a><br>';
	document.getElementById("itemLang").innerHTML =
	"item."+simpName+".name="+document.getElementById("iname").value;
}

function updateBlockPage(){
	//MODITEMS.JAVA
	//public static Item tutorialHelmet;
	var simpName =nameSimplify(document.getElementById("bname").value);
	document.getElementById("blockDeclaration").innerHTML =
	"public static Block "+simpName+";";

	//GameRegistry.registerItem(tutorialItem = new BasicItem("tutorial_item"), "tutorial_item");
	document.getElementById("blockRegistration").innerHTML =
	"GameRegistry.registerBlock("+simpName+' = new BasicBlock("'+simpName+'"),'+'"'+simpName+'");';

	//ITEMRENDERREGISTER.JAVA
	document.getElementById("blockRender").innerHTML =
	"render(ModBlocks."+simpName+");";
	//	 ModItems.tutorialItem);

	//JSONa, blockstates
	var objA ={
    	"variants": {
        	"normal": { "model": "mod:"+simpName }
    	}
	}	
	var dataA = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objA));

	document.getElementById("blockJSONa").innerHTML =
	'<a href="data:' + dataA + '" download="'+simpName+'.json">Download JSON</a>';

	//JSONb, models.block
		var objB ={
	    "parent": "block/cube_all",
	    "textures": {
	        "all": "mod:blocks/"+simpName
	    }
	}	
	var dataB = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objB));

	document.getElementById("blockJSONb").innerHTML =
	'<a href="data:' + dataB + '" download="'+simpName+'.json">Download JSON</a>';

	//JSONc, models.item
	var objC ={
    "parent":"mod:block/"+simpName,
    "display": {
        "thirdperson": {
            "rotation": [ 10, -45, 170 ],
            "translation": [ 0, 1.5, -2.75 ],
            "scale": [ 0.375, 0.375, 0.375 ]
        	}
    	}
	}
	var dataC = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objC));

	document.getElementById("blockJSONc").innerHTML =
	'<a href="data:' + dataC + '" download="'+simpName+'.json">Download JSON</a>';

	document.getElementById("blockTextures").innerHTML = 
	'<a href="http://forgefuel.net/images/16.png"download="'+simpName+'.png">Download Blank 16x16</a><br>'+
	'<a href="http://forgefuel.net/images/32.png" download="'+simpName+'.png">Download Blank 32x32</a><br>'+
	'<a href="http://forgefuel.net/images/64.png" download="'+simpName+'.png">Download Blank 64x64</a><br>'+
	'<a href="http://forgefuel.net/images/128.png" download="'+simpName+'.png">Download Blank 128x128</a><br>';

	document.getElementById("blockLang").innerHTML =
	"tile."+simpName+".name="+document.getElementById("bname").value;
}

function updateOrePage(){
	//MODITEMS.JAVA
	//public static Item tutorialHelmet;
	var simpName =nameSimplify(document.getElementById("orename").value);
	var dropName =document.getElementById("oredrop").value;
	var fullName =document.getElementById("orename").value;
	var min =document.getElementById("oremin").value;
	var max =document.getElementById("oremax").value;

	document.getElementById("oreDeclaration").innerHTML =
	"public static Block "+simpName+";";

	document.getElementById("oreRegistration").innerHTML =
	"GameRegistry.registerBlock("+simpName+' = new ModBlockOre("'
		+simpName+'", Material.rock, '+dropName+', '
		+min+', '+max+'), '+'"'+simpName+'");';

	//ITEMRENDERREGISTER.JAVA
	document.getElementById("oreRender").innerHTML =
	"render(ModBlocks."+simpName+");";
	//reg(ModItems.tutorialItem);

	//JSONa, blockstates
	var objA ={
    	"variants": {
        	"normal": { "model": "mod:"+simpName }
    	}
	}	
	var dataA = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objA));

	document.getElementById("oreJSONa").innerHTML =
	'<a href="data:' + dataA + '" download="'+simpName+'.json">Download JSON</a>';

	//JSONb, models.block
		var objB ={
	    "parent": "block/cube_all",
	    "textures": {
	        "all": "mod:blocks/"+simpName
	    }
	}	
	var dataB = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objB));

	document.getElementById("oreJSONb").innerHTML =
	'<a href="data:' + dataB + '" download="'+simpName+'.json">Download JSON</a>';

	//JSONc, models.item
	var objC ={
    "parent":"mod:block/"+simpName,
    "display": {
        "thirdperson": {
            "rotation": [ 10, -45, 170 ],
            "translation": [ 0, 1.5, -2.75 ],
            "scale": [ 0.375, 0.375, 0.375 ]
        	}
    	}
	}
	var dataC = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objC));

	document.getElementById("oreJSONc").innerHTML =
	'<a href="data:' + dataC + '" download="'+simpName+'.json">Download JSON</a>';

	document.getElementById("oreTextures").innerHTML = 
	'<a href="http://forgefuel.net/images/16.png"download="'+simpName+'.png">Download Blank 16x16</a><br>'+
	'<a href="http://forgefuel.net/images/32.png" download="'+simpName+'.png">Download Blank 32x32</a><br>'+
	'<a href="http://forgefuel.net/images/64.png" download="'+simpName+'.png">Download Blank 64x64</a><br>'+
	'<a href="http://forgefuel.net/images/128.png" download="'+simpName+'.png">Download Blank 128x128</a><br>';

	document.getElementById("oreLang").innerHTML =
	"tile."+simpName+".name="+fullName;
}

function recipeUpdate3x3(){
	var t0=document.getElementById('3x3output').value;
	var t1=document.getElementById('3x3in1').value;
	var t2=document.getElementById('3x3in2').value;
	var t3=document.getElementById('3x3in3').value;
	var t4=document.getElementById('3x3in4').value;
	var t5=document.getElementById('3x3in5').value;
	var t6=document.getElementById('3x3in6').value;
	var t7=document.getElementById('3x3in7').value;
	var t8=document.getElementById('3x3in8').value;
	var t9=document.getElementById('3x3in9').value;
	var t10=document.getElementById('3x3outputCount').value;
	var t11=document.getElementById('3x3outputMeta').value;
	var elem = [t1,t2,t3,t4,t5,t6,t7,t8,t9];
	var uniqueElem = [];
	$.each(elem, function(i, el){
    if($.inArray(el, uniqueElem) === -1 &&	el!="") uniqueElem.push(el);
	});
	var numElm = uniqueElem.length;
	var tableString = '		"';//start of first line
	for(i=0; i<9; i++){//0,1,2
		if(i==3 || i==6){//start of second and third lines
			tableString+='"';
		}
		if(elem[i]==""){//if blank
			tableString+=" ";//add a space
		}else{//if not blank
			for(j=0; j<uniqueElem.length; j++){//check which element
				if(uniqueElem[j]==elem[i]){
					tableString+=j.toString();//add appropriate number
				}
			}
		}
		if(i==2 || i==5 || i==8){//end of lines 1, 2, and 3
			tableString+='",<br>		';
		}
	}
	for(i=0; i<uniqueElem.length; i++){//for each unique
		tableString+="'"+i+"', "+ uniqueElem[i];//label definition
		if(i<uniqueElem.length-1){
			tableString+=",<br>		";//if not last add ,
		}
	}
	tableString+=");<br>";// add );
    document.getElementById("out").innerHTML =
	"GameRegistry.addRecipe(new ItemStack("+t0+", "+t10+", "+t11+"), <br>"+
	tableString;
}

function recipeUpdateShapeless() {
	var t0=document.getElementById('shapelessOutput').value;
	var t1=document.getElementById('shapelessIn1').value;
	var t2=document.getElementById('shapelessIn2').value;
	var t3=document.getElementById('shapelessIn3').value;
	var t4=document.getElementById('shapelessIn4').value;
	var t5=document.getElementById('shapelessIn5').value;
	var t6=document.getElementById('shapelessIn6').value;
	var t7=document.getElementById('shapelessIn7').value;
	var t8=document.getElementById('shapelessIn8').value;
	var t9=document.getElementById('shapelessIn9').value;
	var t10=document.getElementById('shapelessOutputCount').value;
	var t11=document.getElementById('shapelessOutputMeta').value;
	var elem = [t1,t2,t3,t4,t5,t6,t7,t8,t9];
	var nonBlank = [];
	$.each(elem, function(i, el){
    if(el!="") nonBlank.push(el);
	});
	var tableString = '';
	for(i=0; i<nonBlank.length; i++){
		if(nonBlank[i]!=""){
			tableString+=nonBlank[i];
		if(i<nonBlank.length-1){
			tableString+=",";
		}}
	}
	tableString+=");";
    document.getElementById("outShapeless").innerHTML =
	"GameRegistry.addShapelessRecipe(new ItemStack("+t0+", "+t10+", "+t11+"), <br>"+
	tableString;
}

function recipeUpdate2x2() {
	var t0=document.getElementById('2x2output').value;
	var t1=document.getElementById('2x2in1').value;
	var t2=document.getElementById('2x2in2').value;
	var t3=document.getElementById('2x2in3').value;
	var t4=document.getElementById('2x2in4').value;
	var t10=document.getElementById('2x2outputCount').value;
	var t11=document.getElementById('2x2outputMeta').value;
	var elem = [t1,t2,t3,t4];
	var uniqueElem = [];
	$.each(elem, function(i, el){
    if($.inArray(el, uniqueElem) === -1 &&	el!="") uniqueElem.push(el);
	});
	var numElm = uniqueElem.length;
	var tableString = '		"';//start of first line
	for(i=0; i<4; i++){//0,1,2
		if(i==2){//start of second and third lines
			tableString+='"';
		}
		if(elem[i]==""){//if blank
			tableString+=" ";//add a space
		}else{//if not blank
			for(j=0; j<uniqueElem.length; j++){//check which element
				if(uniqueElem[j]==elem[i]){
					tableString+=j.toString();//add appropriate number
				}
			}
		}
		if(i==1 || i==3){//end of lines 1, 2, and 3
			tableString+='",<br>		';
		}
	}
	for(i=0; i<uniqueElem.length; i++){//for each unique
		tableString+="'"+i+"', "+ uniqueElem[i];//label definition
		if(i<uniqueElem.length-1){
			tableString+=",<br>		";//if not last add ,
		}
	}
	tableString+=");<br>";
    document.getElementById("outSmall").innerHTML =
	"GameRegistry.addRecipe(new ItemStack("+t0+", "+t10+", "+t11+"), <br>"+
	tableString;
}
function recipeUpdateSmelting() {
	var inp=document.getElementById('smeltInput').value;
	var outp=document.getElementById('smeltOutput').value;
	var outpcount=document.getElementById('smeltOutputCount').value;
	var outpmeta=document.getElementById('smeltOutputMeta').value;
	var exp=document.getElementById('amount').value;
	
	var outstr="GameRegistry.addSmelting("+inp+", new ItemStack("+outp+", "+outpcount+", "+outpmeta+"), 0."+exp+"F);";
	document.getElementById("outSmelting").innerHTML=outstr;
}

function recipeClear3x3() {
	document.getElementById('3x3output').value = "";
	document.getElementById('3x3outputCount').value = "1";
	document.getElementById('3x3outputMeta').value = "0";
	document.getElementById('3x3in1').value = "";
	document.getElementById('3x3in2').value = "";
	document.getElementById('3x3in3').value = "";
	document.getElementById('3x3in4').value = "";
	document.getElementById('3x3in5').value = "";
	document.getElementById('3x3in6').value = "";
	document.getElementById('3x3in7').value = "";
	document.getElementById('3x3in8').value = "";
	document.getElementById('3x3in9').value = "";
	document.getElementById("out").innerHTML = "";
}

function recipeClear2x2() {
	document.getElementById('2x2output').value = "";
	document.getElementById('2x2outputCount').value = "1";
	document.getElementById('2x2outputMeta').value = "0";
	document.getElementById('2x2in1').value = "";
	document.getElementById('2x2in2').value = "";
	document.getElementById('2x2in3').value = "";
	document.getElementById('2x2in4').value = "";
	document.getElementById("outSmall").innerHTML = "";
}

function recipeClearShapeless() {
	document.getElementById('shapelessOutput').value = "";
	document.getElementById('shapelessOutputCount').value = "1";
	document.getElementById('shapelessOutputMeta').value = "0";
	document.getElementById('shapelessIn1').value = "";
	document.getElementById('shapelessIn2').value = "";
	document.getElementById('shapelessIn3').value = "";
	document.getElementById('shapelessIn4').value = "";
	document.getElementById('shapelessIn5').value = "";
	document.getElementById('shapelessIn6').value = "";
	document.getElementById('shapelessIn7').value = "";
	document.getElementById('shapelessIn8').value = "";
	document.getElementById('shapelessIn9').value = "";
	document.getElementById("outShapeless").innerHTML = "";
}

function recipeClearSmelting() {
	document.getElementById('smeltOutput').value = "";
	document.getElementById('smeltOutputCount').value = "1";
	document.getElementById('smeltOutputMeta').value = "0";
	document.getElementById('smeltInput').value = "";
	document.getElementById("outSmelting").innerHTML = "";
}

$(function() {
		    $( "#craftingExpSlider" ).slider({
		      orientation: "horizontal",
		      range: "min",
		      min: 0,
		      max: 9,
		      value: 1,
		      slide: function( event, ui ) {
		        $( "#amount" ).val( ui.value );
		      }
		    });
		    $( "#amount" ).val( $( "#craftingExpSlider" ).slider( "value" ) );
		  });