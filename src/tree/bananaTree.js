const bananaTree = {
  //Độ già
  name: "Độ già",
  results: ["Chuối già", "Chuối non"],
  images: [
    "https://mymall.vn/wp-content/uploads/2018/11/chuoi-xanh-luoc-co-tac-dung-gi-6.jpg",
    "https://www.baodongthap.vn/database/image/2016/05/28/qua-chuoi-xanh-biet-cach-dung-se-cuc-co-loi.jpg",
  ],
  descriptions: [
    "Chuối già có các góc cạnh của quả sẽ mềm mại, đầy đặn, màu quả xanh nhạt hoặc vàng. Một đặc điểm nữa để nhận biết là thường cuống sẽ có độ héo tương đương với độ chín của quả",
    "Chuối non có các góc cạnh của quả rõ ràng và thiếu đầy đặn, màu quả xanh rất đậm, tổng thể quả chuối nhìn không được tròn như chuối già",
  ],
  isLeave: false,
  node0: {
    //Độ nguyên vẹn
    name: "Độ nguyên vẹn",
    results: ["Lành lặn", "Không lành lặn"],
    images: ["https://www.foodnk.com/wp-content/uploads/2020/12/mot-so-benh-do-vi-sinh-vat-anh-huong-den-chat-luong-chuoi-sau-thu-hoach-min.jpg",
    "https://www.foodnk.com/wp-content/uploads/2020/12/cac-yeu-to-anh-huong-den-chat-luong-chuoi-sau-thu-hoach-min.jpg"],
    descriptions: [
      "Chuối không không bị nứt vỏ, sâu đục, không có vết lõm",
      "Chuối bị nứt vỏ hoặc sâu đục hoặc có vết lõm",
    ],
    isLeave: false,
    node0: {
      //Mùi
      name: "Mùi",
      results: ["Không mùi hoặc thơm", "Mùi men, chua"],
      descriptions: [
        "Chuối chín thường có mùi thơm đặc trưng, chuối xanh sẽ không thơm hoặc ít thơm",
        "Chuối có mùi mem chua là chuối ăn sẽ có mùi vị rất khó chịu, chuối để quá lâu ngày sẽ xuất hiện nhiều đốm đen và trở nên nát, mùi chua",
      ],
      isLeave: false,
      node0: {
        //Độ cứng
        name: "Độ cứng",
        results: ["Cứng", "Mềm", "Nát"],
        descriptions: [
          "Bạn hãy lấy tay nắn thử quả. Nếu tay khó nắn, quả không bị lún vào thì quả vẫn còn cứng",
          "Bạn hãy lấy tay nắn thử quả. Nếu khi nắn quả bị lõm xuống theo vết nắn thì quả đã bị mềm, quả mềm khi nắn vào vỏ sẽ không bị nát ra, sờ vào không thấy ướt",
          "Bạn hãy lấy tay nắn thử quả. Nếu khi nắn quả bị lõm xuống theo vết nắn và vỏ quả nát ra, tay sờ vào thấy ướt, vết lõm sâu thì quả đã bị nát",
        ],
        isLeave: false,
        node0: {
          //Đốm
          name: "Đốm trên vỏ chuối",
          results: ["Không đốm", "Đốm nhỏ", "Đốm to"],
          images: [
            "https://photo-cms-tpo.zadn.vn/w890/uploads/2018/07/5b4ac65d41a0b-d2-600x450.png",
            "https://photo-cms-tpo.zadn.vn/w890/uploads/2018/07/5b4ac65d41a0b-d2-600x450.png",
            "https://photo-cms-tpo.zadn.vn/w890/uploads/2018/07/5b4ac65d41a0b-d2-600x450.png",
          ],
          descriptions: [
            "Hãy so sánh quả bạn cần nhận diện tình trạng với ảnh, nếu giống từ 1 đến 7 là không đốm",
            "Hãy so sánh quả bạn cần nhận diện tình trạng với ảnh, nếu giống từ 8 đến 11 là đốm nhỏ",
            "Hãy so sánh quả bạn cần nhận diện tình trạng với ảnh, nếu giống từ 12 đến 15 là đốm to",
          ],
          isLeave: false,
          node0: {
            //Tình trạng tốt
            isLeave: true,
            value: "good",
          },
          node1: {
            //Tình trạng tốt
            isLeave: true,
            value: "good",
          },
          node2: {
            //Tình trạng khá
            isLeave: true,
            value: "medium",
          },
        },
        node1: {
          //Đốm
          name: "Đốm trên vỏ chuối",
          results: ["Không đốm", "Đốm nhỏ", "Đốm to"],
          images: [
            "https://photo-cms-tpo.zadn.vn/w890/uploads/2018/07/5b4ac65d41a0b-d2-600x450.png",
            "https://photo-cms-tpo.zadn.vn/w890/uploads/2018/07/5b4ac65d41a0b-d2-600x450.png",
            "https://photo-cms-tpo.zadn.vn/w890/uploads/2018/07/5b4ac65d41a0b-d2-600x450.png",
          ],
          descriptions: [
            "Hãy so sánh quả bạn cần nhận diện tình trạng với ảnh , nếu giống từ 1 đến 7 là không đốm",
            "Hãy so sánh quả bạn cần nhận diện tình trạng với ảnh , nếu giống từ 8 đến 11 là đốm nhỏ",
            "Hãy so sánh quả bạn cần nhận diện tình trạng với ảnh , nếu giống từ 12 đến 15 là đốm to",
          ],
          isLeave: false,
          node0: {
            //Tình trạng khá
            isLeave: true,
            value: "medium",
          },
          node1: {
            //Màu cuống
            name: "Màu cuống",
            results: ["Xanh", "Vàng"],
            images: [
              "https://sarefico.com/datafiles/32854/upload/images/image-20201201142049-2.png",
              "https://sarefico.com/datafiles/32854/upload/images/image-20201201142049-2.png",
            ],
            descriptions: [
              "Hãy so sánh quả bạn cần nhận diện tình trạng với ảnh , nếu giống từ 1 đến 4 là cuống xanh",
              "Hãy so sánh quả bạn cần nhận diện tình trạng với ảnh , nếu giống từ 5 đến 7 là cuống vàng",
            ],
            isLeave: false,
            node0: {
              //Tình trạng khá
              isLeave: true,
              value: "medium",
            },
            node1: {
              //Tình trạng tốt
              isLeave: true,
              value: "good",
            },
          },
          node2: {
            //Tình trạng khá
            isLeave: true,
            value: "medium",
          },
        },
        node2: {
          //Tình trạng tồi
          isLeave: true,
          value: "bad",
        },
      },
      node1: {
        //Tình trạng tồi
        isLeave: true,
        value: "bad",
      },
    },
    node1: {
      //Tình trạng tồi
      isLeave: true,
      value: "bad",
    },
  },
  node1: {
    //Tình trạng tồi
    isLeave: true,
    value: "bad",
  },
};

export default bananaTree;
