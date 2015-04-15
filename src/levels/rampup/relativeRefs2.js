exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C0\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C3\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"C1\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git branch -f master C6;git checkout HEAD~1;git branch -f bugFix HEAD~1",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C5\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C3\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"C2\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "You'll need to use at least one direct reference (hash) to complete this level",
    "fr_FR": "Vous aurez besoin d'utiliser au moins une référence directe (hash) pour compléter ce niveau.",
    "zh_CN": "这一关至少要用到一次直接引用(hash)",
    "zh_TW": "這一關至少要用到一次直接參考（hash）",
    "es_AR": "Vas a necesitar usar al menos una referencia directa (hash) para completar este nivel",
    "pt_BR": "Você precisará usar pelo menos uma referência direta (hash) para completar este nível",
    "de_DE": "Du musst mindestens einen Hash benutzen, um dieses Level zu schaffen",
    "ja"   : "このレベルをクリアするには少なくとも一つの直接リファレンス（hash）を使用する必要があります"
  },
  "name": {
    "en_US": "Relative Refs #2 (~)",
    "de_DE": "Relative Referenzen #2 (~)",
    "ja"   : "相対リファレンス　その２ (~)",
    "es_AR": "Referencias relativas #2 (~)",
    "pt_BR": "Referências relativas #2 (~)",
    "fr_FR": "Références relatives #2 (~)",
    "zh_CN": "相对引用2(~)",
    "zh_TW": "相對引用二（~）"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### The \"~\" operator",
              "",
              "Say you want to move a lot of levels up in the commit tree. It might be tedious to type `^` several times, so Git also has the tilde (~) operator.",
              "",
              "",
              "The tilde operator (optionally) takes in a trailing number that specifies the number of parents you would like to ascend. Let's see it in action"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's specify a number of commits back with `~`."
            ],
            "afterMarkdowns": [
              "Boom! So concise -- relative refs are great."
            ],
            "command": "git checkout HEAD~4",
            "beforeCommand": "git commit; git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Branch forcing",
              "",
              "You're an expert on relative refs now, so let's actually *use* them for something.",
              "",
              "One of the most common ways I use relative refs is to move branches around. You can directly reassign a branch to a commit with the `-f` option. So something like:",
              "",
              "`git branch -f master HEAD~3`",
              "",
              "Moves (by force) the master branch to three parents behind HEAD."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's see that previous command in action"
            ],
            "afterMarkdowns": [
              "There we go! Relative refs gave us a concise way to refer to `C1` and branch forcing (`-f`) gave us a way to quickly move a branch to that location"
            ],
            "command": "git branch -f master HEAD~3",
            "beforeCommand": "git commit; git commit; git commit; git checkout -b bugFix"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Now that you have seen relative refs and branch forcing in combination, lets use them to solve the next level.",
              "",
              "To complete this level, move `HEAD`, `master`, and `bugFix` to their goal destinations shown."
            ]
          }
        }
      ]
    },
    "es_AR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### El operador \"~\"",
              "",
              "Digamos que querés moverte un montón de niveles atrás en tu árbol de commits. Podría ser tedioso tipear `^` muchas veces, por lo que git tiene el operador ~.",
              "",
              "",
              "El operador ~ (opcionalmente) toma una cantidad que especifica la cantidad de padres que querés volver hacia atrás. Veámoslo en acción"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Especifiquemos una cantidad de commits hacia atrás con `~`."
            ],
            "afterMarkdowns": [
              "¡Boom! Bien conciso -- las referencias relativas la rompen."
            ],
            "command": "git checkout HEAD~4",
            "beforeCommand": "git commit; git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Forzando los branches",
              "",
              "Ahora que sos un experto en las referencias relativas, *usémoslas* para algo.",
              "",
              "Una de las formas más comunes en que uso las referencias relativas es para mover las ramas. Podés reasignar directamente una rama a un commit usando la opción `-f`. Así que algo como:",
              "",
              "`git branch -f master HEAD~3`",
              "",
              "Mueve (forzadamente) la rama master tres padres atrás de HEAD."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Veamos ese comando previo en acción"
            ],
            "afterMarkdowns": [
              "¡Ahí vamos! Las referencias relativas nos dieron una manera concisa de referenciar a `C1`, y forzar la rama (`-f`) nos dio una manera rápida de mover la rama a esa ubicación"
            ],
            "command": "git branch -f master HEAD~3",
            "beforeCommand": "git commit; git commit; git commit; git checkout -b bugFix"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ahora que viste las referencias relativas y el forzar ramas combinados, usémoslos para resolver el siguiente nivel.",
              "",
              "Para completar este nivel, mové `HEAD`, `master` y `bugFix` a sus destinos finales."
            ]
          }
        }
      ]
    },
    "pt_BR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### O operador \"~\"",
              "",
              "Digamos que você queira se mover vários níveis para cima na árvore de commits. Pode ser entediante digitar `^` várias vezes, e por isso o Git possui também o operador til (`~`).",
              "",
              "",
              "Um número pode ser passado (opcionalmente) após o operador til, especificando o número de ancestrais que você deseja subir. Vamos vê-lo em ação"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vamos especificar um número de commits para trás com `~`."
            ],
            "afterMarkdowns": [
              "Boom! Tão conciso -- referências relativas são incríveis."
            ],
            "command": "git checkout HEAD~4",
            "beforeCommand": "git commit; git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Forçando os ramos",
              "",
              "Agora que você é um especialista em referências relativas, vamos *usá-las* de fato para alguma coisa.",
              "",
              "Uma das situações mais comuns na qual eu uso referências relativas é quando quero trocar ramos de lugar. Você pode redefinir diretamente o commit para o qual um ramo aponta com a opção `-f`. Desta forma, o seguinte comando:",
              "",
              "`git branch -f master HEAD~3`",
              "",
              "Move (à força) o ramo master 3 ancestrais acima do HEAD."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vejamos o comando anterior em ação"
            ],
            "afterMarkdowns": [
              "Aqui vamos nós! As referências relativas nos deram uma forma concisa de nos referirmos ao `C1`, e a movimentação de ramos (com `-f`) nos deu uma forma de apontar rapidamente um ramo para esse local"
            ],
            "command": "git branch -f master HEAD~3",
            "beforeCommand": "git commit; git commit; git commit; git checkout -b bugFix"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Agora que você viu referências relativas e movimentação de ramos combinadas, vamos usá-las para resolver o próximo nível.",
              "",
              "Para completar este nível, mova o `HEAD` e os ramos `master` e `bugFix` para os destinos mostrados no objetivo."
            ]
          }
        }
      ]
    },
   "fr_FR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### L'opérateur \"~\"",
              "",
              "Disons que vous souhaitez remonter beaucoup de niveaux dans l'arbre des commits. Cela peut être ennuyeux d'utiliser `^` plusieurs fois, ainsi Git a aussi l'opérateur tilde (~).",
              "",
              "",
              "L'opérateur tilde prend optionnellement à sa suite un nombre qui spécifie le nombre de parents que vous souhaitez remonter. Voyons cela en action"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Spécifions le nombre de commits en arrière avec `~`."
            ],
            "afterMarkdowns": [
              "Boum! Tellement rapide -- les références relatives sont géniales."
            ],
            "command": "git checkout HEAD~4",
            "beforeCommand": "git commit; git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Forcer les branches",
              "",
              "Vous êtes maintenant un expert des références relatives, alors servons-nous en.",
              "",
              "L'une des principales façons dont j'utilise les références relatives est pour réorganiser les branches. Vous pouvez directement réassigner les branches à un commit avec l'option `-f`. Ainsi quelque chose comme :",
              "",
              "`git branch -f master HEAD~3`",
              "",
              "bouge (de force) la branche master à trois parents derrière HEAD."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Voyons l'effet de la précédente commande"
            ],
            "afterMarkdowns": [
              "On y est ! Les références relatives nous donne une méthode concise pour référencer `C1` et le forçage de branche (`-f`) nous donne une méthode rapide pour bouger une branche à cette emplacement."
            ],
            "command": "git branch -f master HEAD~3",
            "beforeCommand": "git commit; git commit; git commit; git checkout -b bugFix"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Maintenant que vous avez vu les références relatives et le forçage de branche, utilisons-les pour résoudre le niveau suivant.",
              "",
              "Pour compléter ce niveau, bouger `HEAD`, `master`, et `bugFix` à leurs destinations désignées."
            ]
          }
        }
      ]
    },
   "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Der \"~\"-Operator",
              "",
              "Nehem wir an du willst viele Schritte im Commit-Baum zurückgehen. Dann wird es schnell mühsam immer wieder `^` einzugeben; deswegen gibt es in Git den Tilde-Operator `~`.",
              "",
              "Der Tilde-Operator akzeptiert optional eine Zahl, mit der du angeben kannst vieviele Vorgänger zu zurückgehen willst. Keine Anzahl anzugeben bewirkt dasselbe wie `~1`."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Geben wir mit `~` an wiviele Commits wir zurückgehen wollen"
            ],
            "afterMarkdowns": [
              "Peng! So einfach -- relative Referenzen sind super."
            ],
            "command": "git checkout HEAD~4",
            "beforeCommand": "git commit; git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Erzwungene Branches",
              "",
              "Du bist jetzt Experte in Sachen relative Referenzen, also lass sie uns mal richtig einsetzen.",
              "",
              "Das Verschieben von Branches ist einer der häufigsten Anwendungsfälle dafür. Du kannst einen Branchnamen direkt auf einen bestimmten Commit setzen (_ohne_ ihne vorher ausgecheckt haben zu müssen!) indem du den Parameter `-f` benutzt. So in etwa:",
              "",
              "`git branch -f master HEAD~3`",
              "",
              "Das bewegt (erzwungenermaßen) den `master` auf den Commit drei Vorgänger vor `HEAD`."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Schauen wir uns das mal in Aktion an:"
            ],
            "afterMarkdowns": [
              "Das war's schon! Relative Referenzen ermüglichen es uns den Commit `C1` sehr einfach anzugeben und `git branch -f` ermöglicht es uns, den Branch sehr schnell auf diesen Commit zu setzen."
            ],
            "command": "git branch -f master HEAD~3",
            "beforeCommand": "git commit; git commit; git commit; git checkout -b bugFix"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Jetzt wo du relative Referenzen und erzwungenes Branching in Kombination gesehen hast können wir damit den nächsten Level bewältigen.",
              "",
              "Bewege `HEAD`, `master` und `bugFix` an die jeweils angegebenen Positionen, um diesen Level abzuschließen."
            ]
          }
        }
      ]
    },
    "zh_CN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### The \"~\" operator",
              "",
              "假设需要在提交树中向上移动很多步。使用多个`^`非常无聊，所以Git也引入了波浪(~)操作符。",
              "",
              "",
              "波浪操作符后面可以（可选地）跟一个数字，指定向上移动多少次。看个例子"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "使用`~`一次后退多步."
            ],
            "afterMarkdowns": [
              "唰！如此简洁--相对引用就是好啊！"
            ],
            "command": "git checkout HEAD~4",
            "beforeCommand": "git commit; git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Branch forcing",
              "",
              "你现在是相对引用的高手了，现在*用*他来实际做点事情。",
              "",
              "我使用相对引用最多的就是移动分支。你可以使用`-f`选项把直接让分支指向另一个提交。举个例子:",
              "",
              "`git branch -f master HEAD~3`",
              "",
              "（强制）移动master指向HEAD的第3级父提交。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "要完成此关，移动`HEAD`，`master`和`bugFix`到目标所示的位置。"
            ]
          }
        }
      ]
    },
    "zh_TW": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### \"~\" 符號",
              "",
              "假設需要在 commit tree 中向上移動多個 commit。使用太多 `^` 會非常討人厭，所以 git 也加入了波浪（~）符號。",
              "",
              "",
              "波浪符號後面可以選擇一個數字（你也可以不選擇），該數字可以告訴 Git 我要向上移動多少個 commit 。舉個例子"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "使用 `~` 一次往上移動多個 commit。"
            ],
            "afterMarkdowns": [
              "哇！太簡潔了 -- 相對引用真的很好用！"
            ],
            "command": "git checkout HEAD~4",
            "beforeCommand": "git commit; git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Branch forcing",
              "",
              "你現在是相對引用的高手了，現在用它來實際做點事情。",
              "",
              "我使用相對引用最多的就是移動分支。你可以使用 `-f` 選項直接讓分支指向另一個 commit。舉個例子:",
              "",
              "`git branch -f master HEAD~3`",
              "",
              "（強制）移動 master 指向從 HEAD 往上數的第三個 parent commit。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "要完成這一關，移動 `HEAD`，`master` 和 `bugFix` 到目標所示的位置。"
            ]
          }
        }
      ]
    },
    "ja": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "###\"~\" 演算子",
              "",
              "コミットツリーの中で複数の段階上へ移動したいとします。毎回毎回`^`と打つのは面倒くさくなるかもしれませんので、gitにはチルダの演算子も備わっています。",
              "",
              "",
              "チルダ演算子のあとには、上へ移動したい親コミットの数を表す数字もオプションでつけられます。実際の動作を見てみましょう。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "遡る前のコミット数を`~`で指定しましょう。"
            ],
            "afterMarkdowns": [
              "よっしゃ！効率が良いですねー相対リファレンスはなんと便利です。"
            ],
            "command": "git checkout HEAD~4",
            "beforeCommand": "git commit; git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "###ブランチの強制",
              "",
              "今はあなたも相対リファレンスの達人なので、実践的な使い方を覚えましょう。",
              "",
              "相対リファレンスのよくある使い方としてあるのは、ブランチの移動です。`-f`オプションを使ってブランチを直接コミットに関連付けられます。次のようになります",
              "",
              "`git branch -f master HEAD~3`",
              "",
              "masterブランチを（強制的に）HEADより親三代前へと移動します。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "先ほどのコマンドの動作を見てみましょう。"
            ],
            "afterMarkdowns": [
              "できました！相対リファレンスを使うことで、手短く`C1`を指定することができ、`-f`でブランチを強制的にそこへ移動することができました。"
            ],
            "command": "git branch -f master HEAD~3",
            "beforeCommand": "git commit; git commit; git commit; git checkout -b bugFix"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "相対リファレンスとブランチの強制関連付けを見ましたので、いまここでそれらの方法を使ってみましょう。",
              "",
              "このレベルをクリアするには`HEAD`、`master`、`bugFix`をゴールで指定されている目的位置まで移動してください。"
            ]
          }
        }
      ]
    }
  }
};
