const ripeMangoTree = {
    //Mùi
    name: "Mùi",
    results: ["Mùi thơm", "Không mùi, mùi lạ "],
    descriptions: [
        "Quả có mùi thơm đặc trưng",
        "Quả không mùi, có mùi lạ (mùi chua, mùi hóa chất, sộc hắc, thối, …)",
    ],
    isLeave: false,
    node0: {
        //Độ nguyên vẹn
        name: "Độ nguyên vẹn",
        results: ["Lành lặn", "Không lành lặn"],
        descriptions: [
            "Xét về tổng thể quả còn nguyên vẹn như khi được thu hoạch: không dập nát, không có vết sâu đục,không bị trầy xước hoặc vết trầy xước không đáng kể (tương đương hoặc nhỏ hơn vết trầy do lấy móng tay bấm vào vỏ). Biểu hiện của vết dập là màu của vỏ có màu đạm bất thường, khi lấy tay nhấn vào những vị trí này sẽ thầy mềm.",
            "Xuất hiện các vết dập, sâu đục hoặc những vết trầy xước lớn",
        ],
        isLeave: false,
        node0: {
            //Chất lượng vỏ
            name: "Chất lượng vỏ",
            results: ["Vỏ sần xùi, xấu xí", "Vỏ căng mịn"],
            descriptions: [
                "Vỏ nhăn nheo, sần sùi, không căng",
                "Vỏ căng, bóng, nhẵn, trên bề mặt vỏ không bị nhăn ",
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
                results: ["Cứng", "Mềm", "Mềm nhũn"],
                descriptions: [
                    "Quả cứng, khi nhấn tay vào không bị lún",
                    "Quả không cứng,khi nhấn tay vào hơi mềm, hơi bị lún",
                    "Quả bị quá mềm, khi nhấn tay vào lún sâu",
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
        },
        node1: {
            //Độ cứng
            name: "Độ cứng",
            results: ["Cứng", "Mềm", "Mềm nhũn"],
            descriptions: [
                "Quả cứng, khi nhấn tay vào không bị lún",
                "Quả không cứng,khi nhấn tay vào hơi mềm, hơi bị lún",
                "Quả bị quá mềm, khi nhấn tay vào lún sâu",
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
                //Tình trạng tồi
                isLeave: true,
                value: "bad",
            },
        },
    },
    node1: {
        //Tình trạng tồi
        isLeave: true,
        value: "bad",
    },
};

export default ripeMangoTree;