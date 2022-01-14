const appleTree = {
  //Độ nguyên vẹn
  name: "Độ nguyên vẹn",
  results: ["Nguyên vẹn, lành lặn", "Không lành lặn"],
  images: ["https://kenh14cdn.com/2018/3/28/giai-ma-bi-an-tai-sao-tao-le-thuong-co-cham-nho-li-tie04559e742-15222381180261356972347.jpg",
  "https://toquoc.mediacdn.vn/zoom/600_315/Upload/Article/admin/2014/1/17/rez_823_taongoaithoi.jpg"],
  descriptions: [
    "Xét về tổng thể quả còn nguyên vẹn như khi được thu hoạch: không dập nát,  không có vết sâu đục,không bị trầy xước hoặc vết trầy xước không đáng kể (tương đương hoặc nhỏ hơn vết trầy do lấy móng tay bấm vào vỏ). Biểu hiện của vết dập là màu của vỏ có màu đậm bất thường, khi lấy tay nhấn vào những vị trí này sẽ thầy mềm.",
    "Xuất hiện các vết dập, sâu đục hoặc những vết trầy xước lớn",
  ],
  isLeave: false,
  node0: {
    //Mùi
    name: "Mùi",
    results: ["Thơm", "Không có mùi hoặt ít thơm", "mùi khó chịu"],
    descriptions: [
      "Táo chín sẽ có mùi thơm đặc trưng",
      "Táo mới thu hoạch và chưa chín sẽ không có mùi thơm hoặc mùi thơm rất ít",
      "Táo thối, hỏng hoặc ngâm hoá chất sẽ có mùi chua hoặc mùi hắc của hoá chất",
    ],
    isLeave: false,
    node0: {
      //Hình dạng
      name: "Hình dạng",
      results: ["Tròn đều", "Dị dạng"],
      images: ["https://cafefcdn.com/2017/photo-1-1506038695096.jpg",
      "https://danviet.mediacdn.vn/upload/4-2016/images/2016-10-25/147736980077499-tao-1.jpg"],
      descriptions: [
        "Táo khi thu hoạch thường sẽ có hình dạng tròn đều. Bạn hãy nhìn tổng thể quả, nếu quả cân đối hoặc chỉ hơi méo một chút thì hãy tích vào đây nhé",
        "Nếu quả có những vết vẹo lớn, tổng thể quả không còn giữ được hình khối tròn thì bạn tích vào đây nhé",
      ],
      isLeave: false,
      node0: {
        //Độ mịn vỏ
        name: "Độ mịn của vỏ",
        results: ["Nhám", "Bóng nhẵn"],
        descriptions: [
          "Vỏ khi sờ vào cảm giác không được nhẵn hoặc trên vỏ táo xuất hiện một số vết rám lớn (Có kích thước lớn hơn móng tay)",
          "Vỏ căng, bóng, nhẵn, trên bề mặt vỏ không có các vết rám hoặc các vết rám nhỏ không đáng kể (kích thước rám nhỏ hơn kích thước móng tay, chỉ có từ 1-2 vết rám). Vết rám là những vị trí vỏ chuyển sang màu sám, khi sờ vào có cảm giác cứng, thô, màu thường là màu xám, đen hoặc xanh. Một số loại táo vỏ có thể không bóng nhưng nếu thoả mãn các điều kiện khác bạn cũng tích vào đây nhé!",
        ],
        images: [
          "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/An-%C4%91%E1%BA%B7c%20s%E1%BA%A3n%20v%C3%B9ng%20mi%E1%BB%81n/An-8-cach%20ngam%20ruou%20tao%20meo%20chuan%20tay%20bac/cach-ngam-ruou-tao-meo-theo-cong-thuc-chuan-cua-nguoi-tay-bac-2.jpg",
          "https://cafefcdn.com/thumb_w/650/203337114487263232/2020/10/13/photo1602578080665-16025780808271098279436.jpg",
        ],
        isLeave: false,
        node0: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
        node1: {
          //Đặc điểm cuống
          name: "Đặc điểm cuống",
          results: ["Khô hoặc đã rụng", "Tươi"],
          descriptions: [
            "Cuống táo khô rẽ có màu nâu, bẻ thứ sẽ thấy giòn",
            "Cuống táo tươi sẽ có màu xanh hoặc đỏ pha xanh, bẻ thử sẽ thấy cuống táo rất mềm",
          ],
          isLeave: false,
          node0: {
            //Độ cứng
            name: "Độ cứng",
            results: ["Cứng", "Mềm"],
            descriptions: [
              "Bạn hãy lấy tay nắn thử quả. Nếu tay khó nắn, quả không bị lún vào thì quả vẫn còn cứng",
              "Bạn hãy lấy tay nắn thử quả. Nếu khi nắn quả bị lõm xuống theo vết nắn thì quả đã bị mềm",
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
            //Tình trạng tốt
            isLeave: true,
            value: "good",
          },
        },
      },
      node1: {
        //Độ mịn vỏ
        name: "Độ mịn của vỏ",
        results: ["Nhám", "Bóng nhẵn"],
        descriptions: [
          "Vỏ khi sờ vào cảm giác không được nhẵn hoặc trên vỏ táo xuất hiện một số vết rám lớn (Có kích thước lớn hơn móng tay)",
          "Vỏ căng, bóng, nhẵn, trên bề mặt vỏ không có các vết rám hoặc các vết rám nhỏ không đáng kể (kích thước rám nhỏ hơn kích thước móng tay, chỉ có từ 1-2 vết rám). Vết rám là những vị trí vỏ chuyển sang màu sám, khi sờ vào có cảm giác cứng, thô, màu thường là màu xám, đen hoặc xanh. Một số loại táo vỏ có thể không bóng nhưng nếu thoả mãn các điều kiện khác bạn cũng tích vào đây nhé!",
        ],
        images: [
          "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/An-%C4%91%E1%BA%B7c%20s%E1%BA%A3n%20v%C3%B9ng%20mi%E1%BB%81n/An-8-cach%20ngam%20ruou%20tao%20meo%20chuan%20tay%20bac/cach-ngam-ruou-tao-meo-theo-cong-thuc-chuan-cua-nguoi-tay-bac-2.jpg",
          "https://cafefcdn.com/thumb_w/650/203337114487263232/2020/10/13/photo1602578080665-16025780808271098279436.jpg",
        ],
        isLeave: false,
        node0: {
          //Tình trạng kém
          isLeave: true,
          value: "bad",
        },
        node1: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
      },
    },
    node1: {
      //Độ cứng
      name: "Độ cứng",
      results: ["Cứng", "Mềm"],
      descriptions: [
        "Bạn hãy lấy tay nắn thử quả. Nếu tay khó nắn, quả không bị lún vào thì quả vẫn còn cứng",
        "Bạn hãy lấy tay nắn thử quả. Nếu khi nắn quả bị lõm xuống theo vết nắn thì quả đã bị mềm",
      ],
      isLeave: false,
      node0: {
        //Hình dạng
        name: "Hình dạng",
        results: ["Tròn đều", "Dị dạng"],
        descriptions: [
          "Táo khi thu hoạch thường sẽ có hình dạng tròn đều. Bạn hãy nhìn tổng thể quả, nếu quả cân đối hoặc chỉ hơi méo một chút thì hãy tích vào đây nhé",
          "Nếu quả có những vết vẹo lớn, tổng thể quả không còn giữ được hình khối tròn thì bạn tích vào đây nhé",
        ],
        isLeave: false,
        node0: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
        node1: {
          //Độ mịn vỏ
          name: "Độ mịn của vỏ",
          results: ["Nhám", "Bóng nhẵn"],
          descriptions: [
            "Vỏ khi sờ vào cảm giác không được nhẵn hoặc trên vỏ táo xuất hiện một số vết rám lớn (Có kích thước lớn hơn móng tay)",
            "Vỏ căng, bóng, nhẵn, trên bề mặt vỏ không có các vết rám hoặc các vết rám nhỏ không đáng kể (kích thước rám nhỏ hơn kích thước móng tay, chỉ có từ 1-2 vết rám). Vết rám là những vị trí vỏ chuyển sang màu sám, khi sờ vào có cảm giác cứng, thô, màu thường là màu xám, đen hoặc xanh. Một số loại táo vỏ có thể không bóng nhưng nếu thoả mãn các điều kiện khác bạn cũng tích vào đây nhé!",
          ],
          images: [
            "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/An-%C4%91%E1%BA%B7c%20s%E1%BA%A3n%20v%C3%B9ng%20mi%E1%BB%81n/An-8-cach%20ngam%20ruou%20tao%20meo%20chuan%20tay%20bac/cach-ngam-ruou-tao-meo-theo-cong-thuc-chuan-cua-nguoi-tay-bac-2.jpg",
            "https://cafefcdn.com/thumb_w/650/203337114487263232/2020/10/13/photo1602578080665-16025780808271098279436.jpg",
          ],
          isLeave: false,
          node0: {
            //Tình trạng kém
            isLeave: true,
            value: "bad",
          },
          node1: {
            //Đặc điểm cuống
            name: "Đặc điểm cuống",
            results: ["Khô hoặc đã rụng", "Tươi"],
            descriptions: [
              "Cuống táo khô rẽ có màu nâu, bẻ thứ sẽ thấy giòn",
              "Cuống táo tươi sẽ có màu xanh hoặc đỏ pha xanh, bẻ thử sẽ thấy cuống táo rất mềm",
            ],
            isLeave: false,
            node0: {
              //Tình trạng kém
              isLeave: true,
              value: "bad",
            },
            node1: {
              //Tình trạng khá
              isLeave: true,
              value: "medium",
            },
          },
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

export default appleTree;
