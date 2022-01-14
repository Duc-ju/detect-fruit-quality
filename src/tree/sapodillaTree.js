const sapodillaTree = {
  //Độ nguyên vẹn
  name: "Độ nguyên vẹn",
  results: ["Nguyên vẹn, lành lặn", "Không nguyên vẹn, không lành lặn"],
  descriptions: [
    "Những quả không bị thối, ủng dập, nấm mốc, có vết động vật ăn, có thể có 1 vài vết sước nhỏ do vận chuyển, va chạm nhẹ",
    "Những quả bị thối, ủng dập, nấm mốc, có vết động vật ăn …",
  ],
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7FY0wC4FMX2bWHcwyDdDBX2FqtzuZwsMsvg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFT6Yjd4ShccfccEwFQNqCr75U9XQOhtAzG1Yal3iUWEUuV9DSG3TFQKxd6Ly-r-v5e0Y&usqp=CAU",
  ],
  isLeave: false,
  node0: {
    //Mùi
    name: "Mùi",
    results: ["Thơm", "Không có mùi hoặt ít thơm", "mùi khó chịu, men chua"],
    descriptions: [
      "Hồng Xiêm chín tới sẽ có mùi thơm đặc trưng",
      "Hồng mới thu hoạch và chưa chín sẽ không có mùi thơm hoặc mùi thơm rất ít",
      "Hồng xiêm chín quá, thối, hỏng hoặc ngâm hoá chất sẽ có mùi men chua hoặc mùi khó chịu",
    ],
    isLeave: false,
    node0: {
      //Độ Cứng
      name: "Độ Cứng",
      results: ["Cứng", "Mềm", "Nát"],
      descriptions: [
        "Dùng tay bóp nhẹ và thấy khó bóp, cứng hoặc có mềm nhưng rất ít",
        "Dùng tay bóp nhẹ và thấy dễ bóp, mềm nhưng không bị nát",
        "Dùng tay bóp nhẹ và thấy quả bị lủng vào",
      ],
      isLeave: false,
      node0: {
        //màu sắc
        name: "Màu sắc",
        results: ["Vàng nâu", "Vàng nhạt pha xanh"],
        descriptions: [
          "quả có màu vàng nầu, hay vàng mật là những quả hông xiêm đã già, khi chín sẽ ngọt",
          "quả hồng xiêm có màu vàng nhạt pha xanh là những quả còn hơi non, và bị hái ép, khi chín sẽ nhạt",
        ],
        images: [
          "https://sohanews.sohacdn.com/k:2016/1-222-ydhi-1462011235439/6-cong-dung-huu-ich-cua-hong-xiem.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXuVHo70VJk283z86P2u-aUhfyOLiIdJnLDHkW5fHlTlui2hqVnsOit3dMl-uLnfApzM&usqp=CAU",
        ],
        isLeave: false,
        node0: {
          //Hình dáng
          name: "Hình dáng",
          results: ["Oval", "Hình Khác"],
          descriptions: [
            "Những quả có hình oval, hình đặc trưng của hồng xiêm",
            "Những quả có hình khác hình oval như hình tròn, hình bè hoặc bị dị dạng",
          ],
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rJEfOxMu34S7W1NBEmDppVNUho5UE4Efrg&usqp=CAU",
            "https://caycothu.vn/wp-content/uploads/2021/07/phong-tru-sau-benh-hai-de-cay-hong-xiem-cho-nhieu-qua.jpg",
          ],
          isLeave: false,
          node0: {
            //Tình trạng tốt
            isLeave: true,
            value: "good",
          },
          node1: {
            //Tình trạng khá
            isLeave: true,
            value: "medium",
          },
        },
        node1: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
      },
      node1: {
        //màu sắc
        name: "Màu sắc",
        results: ["Vàng nâu", "Vàng nhạt pha xanh"],
        descriptions: [
          "quả có màu vàng nầu, hay vàng mật là những quả hông xiêm đã già, khi chín sẽ ngọt",
          "quả hồng xiêm có màu vàng nhạt pha xanh là những quả còn hơi non, và bị hái ép, khi chín sẽ nhạt",
        ],
        images: [
          "https://sohanews.sohacdn.com/k:2016/1-222-ydhi-1462011235439/6-cong-dung-huu-ich-cua-hong-xiem.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXuVHo70VJk283z86P2u-aUhfyOLiIdJnLDHkW5fHlTlui2hqVnsOit3dMl-uLnfApzM&usqp=CAU",

        ],
        isLeave: false,
        node0: {
          //Hình dáng
          name: "Hình dáng",
          results: ["Oval", "Hình Khác"],
          descriptions: [
            "Những quả có hình oval, hình đặc trưng của hồng xiêm",
            "Những quả có hình khác hình oval như hình tròn, hình bè hoặc bị dị dạng",
          ],
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rJEfOxMu34S7W1NBEmDppVNUho5UE4Efrg&usqp=CAU",
            "https://caycothu.vn/wp-content/uploads/2021/07/phong-tru-sau-benh-hai-de-cay-hong-xiem-cho-nhieu-qua.jpg",
          ],
          isLeave: false,
          node0: {
            //Tình trạng tốt
            isLeave: true,
            value: "good",
          },
          node1: {
            //Tình trạng khá
            isLeave: true,
            value: "medium",
          },
        },
        node1: {
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
      //màu sắc
      name: "Màu sắc",
      results: ["Vàng nâu", "Vàng nhạt pha xanh"],
      descriptions: [
        "quả có màu vàng nầu, hay vàng mật là những quả hông xiêm đã già, khi chín sẽ ngọt",
        "quả hồng xiêm có màu vàng nhạt pha xanh là những quả còn hơi non, và bị hái ép, khi chín sẽ nhạt",
      ],
      images: [
        "https://sohanews.sohacdn.com/k:2016/1-222-ydhi-1462011235439/6-cong-dung-huu-ich-cua-hong-xiem.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXuVHo70VJk283z86P2u-aUhfyOLiIdJnLDHkW5fHlTlui2hqVnsOit3dMl-uLnfApzM&usqp=CAU",

      ],
      isLeave: false,
      node0: {
        //Độ Cứng
        name: "Độ Cứng",
        results: ["Cứng", "Mềm", "Nát"],
        descriptions: [
          "Dùng tay bóp nhẹ và thấy khó bóp, cứng hoặc có mềm nhưng rất ít",
          "Dùng tay bóp nhẹ và thấy dễ bóp, mềm nhưng không bị nát",
          "Dùng tay bóp nhẹ và thấy quả bị lủng vào",
        ],
        isLeave: false,
        node0: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
        node1: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
        node2: {
          //Tình trạng kém
          isLeave: true,
          value: "bad",
        },
      },
      node1: {
        //Tình trạng kém
        isLeave: true,
        value: "bad",
      },
    },
    node2: {
      //Tình trạng tổi
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

export default sapodillaTree;