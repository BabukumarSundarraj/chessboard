function black(c_id,square){
	var append=document.createElement('button');
	append.id=c_id;
	append.style.background='black';
	append.style.width=square;
	append.style.height=square;
	append.style.padding='0px';
	append.style.border='0px';
	document.getElementById("board").appendChild(append);
}

function white(c_id,square){
	var append=document.createElement('button');
	append.id=c_id;
	append.style.background='white';
	append.style.width=square;
	append.style.height=square;
	append.style.padding='0px';
	append.style.border='0px';
	document.getElementById("board").appendChild(append);
}

function chess_cell_creation(){
	var i,j,k=0,c_id,ret;
	var square="12.5vw";

	for(i=1;i<=8;i++)
	{
		c_id=String.fromCharCode(65);
		for(j=1;j<=8;j++)
		{
			c_id+=i.toString(10);
			if(k%2==0)
			{
				if(j%2!=0)
				{
					black(c_id,square);
				}
				else
				{
					white(c_id,square);
				}
			}
			else
			{
				if(j%2!=0)
				{
					white(c_id,square);
				}
				else
				{
					black(c_id,square);
				}
			}
			c_id=String.fromCharCode(j+65);

		}
		k++;
	}

}

chess_cell_creation();