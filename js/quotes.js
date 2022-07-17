const quotes = [
    {
      quote: "나는 돼지를 좋아한다. 개는 우리를 우러러보고 고양이는 우리를 얕잡아보지만, 돼지는 우리를 자기와 똑같이 취급한다.",
      author: "윈스턴 처칠",
    },
    {
      quote: "수천 명의 사람이 사랑 없이 살아왔지만, 그 누구도 물 없이 살 수는 없었다.",
      author: "W. H. 오든",
    },
    {
      quote:
        "돈이 행복을 가져다주지 못한다면, 적어도 안락 속에서 불행할 수 있도록 해줍니다.",
      author: "헬렌 걸리 브라운",
    },
    {
      quote: "마음으로 창조하고 지혜로 만들어라.",
      author: "크리스 자미",
    },
    {
      quote: "한 사람에게 '마법'은 다른 사람에게는 과학 기술이 될 수 있어.",
      author: "로버트 하인라인",
    },
    {
      quote: "전술이란 당신이 가진 것으로 할 수 있는 것을 의미합니다.",
      author: "솔 앨린스키",
    },
    {
      quote: "기계만 망가지는 것이 아니라, 사람도 망가진다는 것을 기억하세요.",
      author: "그레고리 벤포드",
    },
    {
      quote: "어떤 생각에 동의하지 않지만, 그 생각을 해볼 수 있는 것이 교육받은 사람의 특징이다.",
      author: "아리스토텔레스",
    },
    {
      quote: "돌멩이가 내 앞길을 막는다고? 하나하나 다 모아주지. 그 돌멩이로 내 성을 만들겠어.",
      author: "니모 녹스",
    },
    {
      quote: "방황하는 모든 이들이 길을 잃는 것은 아니다.",
      author: "J.R.R 톨킨",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = `-${todaysQuote.author}`