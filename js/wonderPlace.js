const wonderImages = ["Eye_of_the Sahara.jpg", "Giants_Causeway.jpg", "Ik_Kil.jpg", "Matterhorn.jpg", "pamukkale.jpg", "torre_del_paine.jpg", "tsingy.jpg", "Zhangye_Danxia.jpg"];
const names = ["사하라의 눈", "자이언츠 코즈웨이", "익힐", "마터호른", "파묵칼레", "토레델파이네", "칭기", "정예단샤"];
const ranNum2 = Math.floor(Math.random() * wonderImages.length)
const chosenImage2 = wonderImages[ranNum];
document.querySelector("#wonderPlace").innerText = ` '${names[ranNum2]}(${chosenImage2.split(".")[0]}) '`
const showingImage = document.createElement("img");
showingImage.classList.add("effect");
showingImage.src = `img/${chosenImage2}`;
showingImage.style.width = "500px";
showingImage.style.height = "100%";
showingImage.style.backgroundImage = "url("+showingImage.src +")";
const wonder = document.querySelector(".wonderPlace")
wonder.appendChild(showingImage);
//document.body.appendChild(bgImage);