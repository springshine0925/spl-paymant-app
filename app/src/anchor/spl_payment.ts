export type SplPayment = {
  "version": "0.1.0",
  "name": "spl_payment",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateOwner",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newOwner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenOwnerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenOwnerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "userInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "updatedTime",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "DepositEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": true
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "userTotalStaked",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalInVault",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": true
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "userTotalStaked",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalInVault",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotAllowedOwner",
      "msg": "SplPaymentError: Not allowed owner"
    },
    {
      "code": 6001,
      "name": "MaxDepositAmount",
      "msg": "SplPaymentError: Over max deposit amont"
    },
    {
      "code": 6002,
      "name": "InvalidAmount",
      "msg": "SplPaymentError: InvalidAmount"
    },
    {
      "code": 6003,
      "name": "ZeroAmount",
      "msg": "SplPaymentError: Should depsoit than 0"
    },
    {
      "code": 6004,
      "name": "InvalidTokenAddress",
      "msg": "SplPaymentError: The token mint address is not correct"
    }
  ]
};

export const IDL: SplPayment = {
  "version": "0.1.0",
  "name": "spl_payment",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateOwner",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newOwner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenOwnerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenOwnerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "userInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "updatedTime",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "DepositEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": true
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "userTotalStaked",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalInVault",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": true
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "userTotalStaked",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalInVault",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotAllowedOwner",
      "msg": "SplPaymentError: Not allowed owner"
    },
    {
      "code": 6001,
      "name": "MaxDepositAmount",
      "msg": "SplPaymentError: Over max deposit amont"
    },
    {
      "code": 6002,
      "name": "InvalidAmount",
      "msg": "SplPaymentError: InvalidAmount"
    },
    {
      "code": 6003,
      "name": "ZeroAmount",
      "msg": "SplPaymentError: Should depsoit than 0"
    },
    {
      "code": 6004,
      "name": "InvalidTokenAddress",
      "msg": "SplPaymentError: The token mint address is not correct"
    }
  ]
};
