const commonECS = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: {
        val: 10,
        left: null,
        right: null
      },
      right: {
        val: 11,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

// 搜索二叉树
const sousuoECS = {
  val: 6,
  left: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 8,
    left: {
      val: 7,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
}
// 对称二叉树
const SymmetricECS = {
  val: 1,
  left: {
    val:2,
    left: {
      val: 3,
      left: {
        val: 5
      },
    },
    right: {
      val: 4,
    }
  },
  right: {
    val:2,
    left: {
      val: 4,
     
    },
    right: {
      val: 3,
      right: {
        val: 5
      },
    }
  }
}

const simple = {
  val: 1,
  left: {
    val:5,
    left: null,
    right: null
  },
  right: {
    val: 1,
    left: null,
    right: {
      val: 6
    }
  }
}

module.exports = {
  commonECS,
  sousuoECS,
  SymmetricECS,
  simple
}
