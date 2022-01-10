const plumTree = {
  //Độ nguyên vẹn
  name: "Độ nguyên vẹn",
  results: [
    "Lành lặn",
    "Có vết sâu ăn, vết xước nhỏ",
    "Có vết sâu ăn, vết xước to hoặc vết thối",
  ],
  descriptions: [
    "Xung quanh quả mận không có vết sâu, vết xước hoặc vết thối",
    "Xuất hiện các vết sâu ăn, vết xước nhỏ có kích thước nhỏ hơn hạt đậu. Các vết này sẽ ảnh hưởng ít tới tình trạng của quả",
    "Xuất hiện các vết sâu ăn, vết xước lớn có kích thước lớn hơn hạt đậu hoặc xuất hiện vết thối trên bề mặt quả",
  ],
  isLeave: false,
  node0: {
    //Hình dạng
    name: "Hình dạng",
    results: ["Tròn đều", "Méo mó"],
    descriptions: [
      "Mận có hình dạng bình thường: tròn đều, đối xứng",
      "Mận bị vẹo, méo mó khiến tổng thể bị mất cân đối",
    ],
    isLeave: false,
    node0: {
      //Tình trạng vỏ
      name: "Tình trạng vỏ",
      results: ["Mịn, căng mọng, có lớp phấn trắng", "Sần sùi, rám"],
      descriptions: [
        "Vỏ mận mịn, căng bóng, có thể có lớp phấn trắng ở bên ngoài vỏ hoặc không, bề mặt vỏ không có những vết sần sùi, rám",
        "Bề mặt vỏ xuất hiện nhiều những vết sần sùi và vết rám. Vết rám là vị trí mà vỏ của quả chuyển sang màu xám hoặc đen, sờ vào sẽ cảm giác cứng",
      ],
      isLeave: false,
      node0: {
        //Độ cứng
        name: "Độ cứng",
        results: ["Cứng", "Mềm"],
        descriptions: [
          "Lấy tay nắn thử quả, nếu khó nhắn và khi nắn bề mặt quả không bị lõm vào là mận vẫn còn cứng",
          "Lấy tay nắn thử quả, nếu dễ nắn, khi nắn xong vị trí nắn bị lõm xuống thì quả đã bị mềm",
        ],
        isLeave: false,
        node0: {
          //Màu Vỏ
          name: "Màu Vỏ",
          results: ["Xanh xen lẫn hồng tím", "Xanh", "Hồng tím"],
          images: [
            "http://imagesfb.tintuc.vn/upload/images/caobang/20170505/ca.jpg",
            "https://www.dkn.news/wp-content/uploads/2018/04/4609_mYn_tam_hoa_4.jpg",
            "https://media.cooky.vn/article/s640/Article2024-636005654481512389.jpg",
          ],
          descriptions: [
            "Bề mặt vỏ mận xen lẫn giữ màu xanh, hồng và tím, mận có màu này là mận chín tới",
            "Bề mặt vỏ mận chủ yếu là màu xanh hoặc xanh nhạt, mận có màu này là mận còn xanh hoặc mận thiếu ngày thu hoạch",
            "Mịn có màu hồng tím và không còn oha lẫn màu xanh, mận có màu này là mận đã chín kĩ, nếu quả còn cứng thì ăn sẽ rất ngon và ngọt",
          ],
          isLeave: false,
          node0: {
            //Tình trạng tót
            isLeave: true,
            value: "good",
          },
          node1: {
            //Tình trạng khá
            isLeave: true,
            value: "medium",
          },
          node2: {
            //Tình trạng tót
            isLeave: true,
            value: "good",
          },
        },
        node1: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
      },
      node1: {
        //Màu Vỏ
        name: "Màu Vỏ",
        results: ["Xanh xen lẫn hồng tím", "Xanh", "Hồng tím"],
        images: [
          "http://imagesfb.tintuc.vn/upload/images/caobang/20170505/ca.jpg",
          "https://www.dkn.news/wp-content/uploads/2018/04/4609_mYn_tam_hoa_4.jpg",
          "https://media.cooky.vn/article/s640/Article2024-636005654481512389.jpg",
        ],
        descriptions: [
          "Bề mặt vỏ mận xen lẫn giữ màu xanh, hồng và tím, mận có màu này là mận chín tới",
          "Bề mặt vỏ mận chủ yếu là màu xanh hoặc xanh nhạt, mận có màu này là mận còn xanh hoặc mận thiếu ngày thu hoạch",
          "Mịn có màu hồng tím và không còn oha lẫn màu xanh, mận có màu này là mận đã chín kĩ, nếu quả còn cứng thì ăn sẽ rất ngon và ngọt",
        ],
        isLeave: false,
        node0: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
        node1: {
          //Độ cứng
          name: "Độ cứng",
          results: ["Cứng", "Mềm"],
          descriptions: [
            "Lấy tay nắn thử quả, nếu khó nhắn và khi nắn bề mặt quả không bị lõm vào là mận vẫn còn cứng",
            "Lấy tay nắn thử quả, nếu dễ nắn, khi nắn xong vị trí nắn bị lõm xuống thì quả đã bị mềm",
          ],
          isLeave: false,
          node0: {
            //Tình trạng khá
            isLeave: true,
            value: "medium",
          },
          node1: {
            //Tình trạng kém
            isLeave: true,
            value: "bad",
          },
        },
        node2: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
      },
    },
    node1: {
      //Tình trạng vỏ
      name: "Tình trạng vỏ",
      results: ["Mịn, căng mọng, có lớp phấn trắng", "Sần sùi, rám"],
      descriptions: [
        "Vỏ mận mịn, căng bóng, có thể có lớp phấn trắng ở bên ngoài vỏ hoặc không, bề mặt vỏ không có những vết sần sùi, rám",
        "Bề mặt vỏ xuất hiện nhiều những vết sần sùi và vết rám. Vết rám là vị trí mà vỏ của quả chuyển sang màu xám hoặc đen, sờ vào sẽ cảm giác cứng",
      ],
      isLeave: false,
      node0: {
        //Màu Vỏ
        name: "Màu Vỏ",
        results: ["Xanh xen lẫn hồng tím", "Xanh", "Hồng tím"],
        images: [
          "http://imagesfb.tintuc.vn/upload/images/caobang/20170505/ca.jpg",
          "https://www.dkn.news/wp-content/uploads/2018/04/4609_mYn_tam_hoa_4.jpg",
          "https://media.cooky.vn/article/s640/Article2024-636005654481512389.jpg",
        ],
        descriptions: [
          "Bề mặt vỏ mận xen lẫn giữ màu xanh, hồng và tím, mận có màu này là mận chín tới",
          "Bề mặt vỏ mận chủ yếu là màu xanh hoặc xanh nhạt, mận có màu này là mận còn xanh hoặc mận thiếu ngày thu hoạch",
          "Mịn có màu hồng tím và không còn oha lẫn màu xanh, mận có màu này là mận đã chín kĩ, nếu quả còn cứng thì ăn sẽ rất ngon và ngọt",
        ],
        isLeave: false,
        node0: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
        node1: {
          //Độ cứng
          name: "Độ cứng",
          results: ["Cứng", "Mềm"],
          descriptions: [
            "Lấy tay nắn thử quả, nếu khó nhắn và khi nắn bề mặt quả không bị lõm vào là mận vẫn còn cứng",
            "Lấy tay nắn thử quả, nếu dễ nắn, khi nắn xong vị trí nắn bị lõm xuống thì quả đã bị mềm",
          ],
          isLeave: false,
          node0: {
            //Tình trạng khá
            isLeave: true,
            value: "medium",
          },
          node1: {
            //Tình trạng kém
            isLeave: true,
            value: "bad",
          },
        },
        node2: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
      },
      node1: {
        //Độ cứng
        name: "Độ cứng",
        results: ["Cứng", "Mềm"],
        descriptions: [
          "Lấy tay nắn thử quả, nếu khó nhắn và khi nắn bề mặt quả không bị lõm vào là mận vẫn còn cứng",
          "Lấy tay nắn thử quả, nếu dễ nắn, khi nắn xong vị trí nắn bị lõm xuống thì quả đã bị mềm",
        ],
        isLeave: false,
        node0: {
          //Tình trạng tồi
          isLeave: true,
          value: "bad",
        },
        node1: {
          //Màu vỏ
          name: "Màu Vỏ",
          results: ["Xanh xen lẫn hồng tím", "Xanh", "Hồng tím"],
          images: [
            "http://imagesfb.tintuc.vn/upload/images/caobang/20170505/ca.jpg",
            "https://www.dkn.news/wp-content/uploads/2018/04/4609_mYn_tam_hoa_4.jpg",
            "https://media.cooky.vn/article/s640/Article2024-636005654481512389.jpg",
          ],
          descriptions: [
            "Bề mặt vỏ mận xen lẫn giữ màu xanh, hồng và tím, mận có màu này là mận chín tới",
            "Bề mặt vỏ mận chủ yếu là màu xanh hoặc xanh nhạt, mận có màu này là mận còn xanh hoặc mận thiếu ngày thu hoạch",
            "Mịn có màu hồng tím và không còn oha lẫn màu xanh, mận có màu này là mận đã chín kĩ, nếu quả còn cứng thì ăn sẽ rất ngon và ngọt",
          ],
          isLeave: false,
          node0: {
            //Tình trạng khá
            isLeave: true,
            value: "medium",
          },
          node1: {
            //Tình trạng kém
            isLeave: true,
            value: "bad",
          },
          node2: {
            //Tình trạng kém
            isLeave: true,
            value: "bad",
          },
        },
      },
    },
  },
  node1: {
    //Độ cứng
    name: "Độ cứng",
    results: ["Cứng", "Mềm"],
    descriptions: [
      "Lấy tay nắn thử quả, nếu khó nhắn và khi nắn bề mặt quả không bị lõm vào là mận vẫn còn cứng",
      "Lấy tay nắn thử quả, nếu dễ nắn, khi nắn xong vị trí nắn bị lõm xuống thì quả đã bị mềm",
    ],
    isLeave: false,
    node0: {
      //Tình trạng Vỏ
      name: "Tình trạng vỏ",
      results: ["Mịn, căng mọng, có lớp phấn trắng", "Sần sùi, rám"],
      descriptions: [
        "Vỏ mận mịn, căng bóng, có thể có lớp phấn trắng ở bên ngoài vỏ hoặc không, bề mặt vỏ không có những vết sần sùi, rám",
        "Bề mặt vỏ xuất hiện nhiều những vết sần sùi và vết rám. Vết rám là vị trí mà vỏ của quả chuyển sang màu xám hoặc đen, sờ vào sẽ cảm giác cứng",
      ],
      isLeave: false,
      node0: {
        //Hình dạng
        name: "Hình dạng",
        results: ["Tròn đều", "Méo mó"],
        descriptions: [
          "Mận có hình dạng bình thường: tròn đều, đối xứng",
          "Mận bị vẹo, méo mó khiến tổng thể bị mất cân đối",
        ],
        isLeave: false,
        node0: {
          //Tình trạng khá
          isLeave: true,
          value: "medium",
        },
        node1: {
          //Màu Vỏ
          name: "Màu Vỏ",
          results: ["Xanh xen lẫn hồng tím", "Xanh", "Hồng tím"],
          images: [
            "http://imagesfb.tintuc.vn/upload/images/caobang/20170505/ca.jpg",
            "https://www.dkn.news/wp-content/uploads/2018/04/4609_mYn_tam_hoa_4.jpg",
            "https://media.cooky.vn/article/s640/Article2024-636005654481512389.jpg",
          ],
          descriptions: [
            "Bề mặt vỏ mận xen lẫn giữ màu xanh, hồng và tím, mận có màu này là mận chín tới",
            "Bề mặt vỏ mận chủ yếu là màu xanh hoặc xanh nhạt, mận có màu này là mận còn xanh hoặc mận thiếu ngày thu hoạch",
            "Mịn có màu hồng tím và không còn oha lẫn màu xanh, mận có màu này là mận đã chín kĩ, nếu quả còn cứng thì ăn sẽ rất ngon và ngọt",
          ],
          isLeave: false,
          node0: {
            //Tình trạng kém
            isLeave: true,
            value: "bad"
          },
          node1: {
            //Tình trạng kém
            isLeave: true,
            value: "bad"
          },
          node2: {
            //Tình trạng khá
            isLeave: true,
            value: "medium"
          },
        },
      },
      node1: {
        //Tình trạng tồi
        isLeave: true,
        value: "bad",
      },
    },
    node1: {
      //Màu Vỏ
      name: "Màu Vỏ",
      results: ["Xanh xen lẫn hồng tím", "Xanh", "Hồng tím"],
      images: [
        "http://imagesfb.tintuc.vn/upload/images/caobang/20170505/ca.jpg",
        "https://www.dkn.news/wp-content/uploads/2018/04/4609_mYn_tam_hoa_4.jpg",
        "https://media.cooky.vn/article/s640/Article2024-636005654481512389.jpg",
      ],
      descriptions: [
        "Bề mặt vỏ mận xen lẫn giữ màu xanh, hồng và tím, mận có màu này là mận chín tới",
        "Bề mặt vỏ mận chủ yếu là màu xanh hoặc xanh nhạt, mận có màu này là mận còn xanh hoặc mận thiếu ngày thu hoạch",
        "Mịn có màu hồng tím và không còn oha lẫn màu xanh, mận có màu này là mận đã chín kĩ, nếu quả còn cứng thì ăn sẽ rất ngon và ngọt",
      ],
      isLeave: false,
      node0: {
        //Hình dạng
        name: "Hình dạng",
        results: ["Tròn đều", "Méo mó"],
        descriptions: [
          "Mận có hình dạng bình thường: tròn đều, đối xứng",
          "Mận bị vẹo, méo mó khiến tổng thể bị mất cân đối",
        ],
        isLeave: false,
        node0: {
          //Tình trạng Vỏ
          name: "Tình trạng vỏ",
          results: ["Mịn, căng mọng, có lớp phấn trắng", "Sần sùi, rám"],
          descriptions: [
            "Vỏ mận mịn, căng bóng, có thể có lớp phấn trắng ở bên ngoài vỏ hoặc không, bề mặt vỏ không có những vết sần sùi, rám",
            "Bề mặt vỏ xuất hiện nhiều những vết sần sùi và vết rám. Vết rám là vị trí mà vỏ của quả chuyển sang màu xám hoặc đen, sờ vào sẽ cảm giác cứng",
          ],
          isLeave: false,
          node0: {
            //Tình trạng khá
            isLeave: true,
            value: "medium",
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
      node2: {
        //Tình trạng tồi
        isLeave: true,
        value: "bad",
      },
    },
  },
  node2: {
    //Tình trạng tồi
    isLeave: true,
    value: "bad",
  },
};
export default plumTree