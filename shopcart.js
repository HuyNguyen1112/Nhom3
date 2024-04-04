const btn=document.querySelectorAll(".giohang")
btn.forEach(function(button,index)
{
    button.addEventListener("click",function(event)
    {{
        var btnItem=event.target
        var product=btnItem.parentElement
        console.log(product)
        var productImg=product.querySelector("img").src
        var productName=product.querySelector("h1").innerText
        var productPrice=product.querySelector("span").innerText
        addcart(productPrice,productName,productImg)
    }})
})

function addcart(productPrice,productName,productImg)
{
    var addtr=document.createElement("tr")
    var cartItem=document.querySelectorAll("tbody tr") 
    for (var i=0;i<cartItem.length;i++)
    {
        var productT=document.querySelectorAll(".title")
         if(productT[i].innerText==productName)
        {
             alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
         }
     }
    var trcontent='<tr><td class="tensp"><img src="'+productImg+'" alt=""><span class=title>'+productName+'</span></td><td><span class="price">'+productPrice+'</span>đ</td><td class="soluong"><input type="number" value="1" min="1"></td><td class="chon"><span class="cartDelete">Xóa</span></td></tr>'
    addtr.innerHTML=trcontent
    var cartTable=document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}

//==============total Price==================//
function carttotal()
{
    var cartItem=document.querySelectorAll("tbody tr")
    var totalA=0
    var totalC=0
    var totalD=0
    for(var i=0;i<cartItem.length;i++)
    {
        var inputValue=cartItem[i].querySelector("input").value
        var productPrice=cartItem[i].querySelector(".price").innerHTML
        var totalA=inputValue*productPrice*1000
        var totalC=totalC+totalA 
    }
    var cartTotalA = document.querySelector(".tongtien span")
    cartTotalA.innerHTML=totalC.toLocaleString('de-DE')
    InputChange()
} 

//----------------delete-----------------------//
function deleteCart()
{
    var cartItem=document.querySelectorAll("tbody tr") 
    for (var i=0;i<cartItem.length;i++)
    {
        var productT=document.querySelectorAll(".cartDelete")
        productT[i].addEventListener("click",function(event)
        {
            var cartDelete=event.target
            var cartItemR=cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
        })
       
    }            
}

function InputChange ()
{
    var cartItem=document.querySelectorAll("tbody tr") 
    for (var i=0;i<cartItem.length;i++)
    {
        var inputValue=cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function()
        {
            carttotal()
        })
       
    }   
}

const cartbnt=document.querySelector(".fa-times")
const cartshow=document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function()
{
    document.querySelector(".cart").style.right="0"
})
cartbnt.addEventListener("click",function()
{
    document.querySelector(".cart").style.right="-150%"
})