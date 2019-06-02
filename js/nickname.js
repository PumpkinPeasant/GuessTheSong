
var nickname = prompt('Введите никнейм');
var i = 0;
var str = 'Ваш никнейм:  '
while (i == 0)
{
	if(nickname.length <= 12)
	{
		alert(str + nickname);
		i++;
	}
	else
	{
		alert('Никнейм должен состоять не более чем из 12 символов');
		nickname = prompt('Введите никнейм');
	}
}
