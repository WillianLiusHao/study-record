const commonTree = {
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
const sousuoTree = {
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
const symmetricTree = {
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

/******************************* 链表 ***************************/
const linkList1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
     
    }
  }
}
const linkList2 = {
  val: 4,
  next: {
    val: 2,
    next: {
      val: 5,
    }
  }
}


// 回文链表
const PalindromeLinkList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 4,
          next: {
            val: 3,
            next: {
              val: 2,
              next: {
                val: 1,
                next: null
              } 
            }
          }
        }
      }
    }
  }
}

// 有环链表
const CircleLinkList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 2,
                next: {
                  val: 3,
                  next: {
                    val: 4,
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


module.exports = {
  commonTree,
  sousuoTree,
  symmetricTree,

  linkList1,
  linkList2,
  PalindromeLinkList,
  CircleLinkList
}
