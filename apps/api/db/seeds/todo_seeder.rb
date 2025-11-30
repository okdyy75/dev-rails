class TodoSeeder
  def self.seed
    puts "Deleting existing todos..."
    ActiveRecord::Base.strict_loading_by_default = false
    Todo.destroy_all

    puts "Creating todo samples..."
    todos = [
      { title: "買い物", description: "牛乳を買う", tags: [ "家事", "買い出し" ] },
      { title: "朝食を食べる", description: "パンとコーヒー", tags: [ "ルーティン" ] },
      { title: "歯を磨く", description: "朝と夜", tags: [ "ルーティン", "健康" ] },
      { title: "洗濯をする", description: "衣類と下着", tags: [ "家事" ] },
      { title: "お風呂に入る", description: "夜にお風呂に入る", tags: [ "ルーティン" ] },
      { title: "夕食を作る", description: "今日のメニューはカレー", tags: [ "料理", "家事" ] },
      { title: "食器を洗う", description: "食事後の片付け", tags: [ "家事" ] },
      { title: "掃除をする", description: "リビングと寝室", tags: [ "家事", "掃除" ] },
      { title: "本を読む", description: "寝る前に30分読む", tags: [ "趣味", "リラックス" ] },
      { title: "明日の準備をする", description: "バッグの中身を確認", tags: [ "準備" ] }
    ]

    todos.each do |todo_data|
      Todo.create!(
        title: todo_data[:title],
        description: todo_data[:description],
        completed: [ true, false ].sample,
        tags: todo_data[:tags]
      )
    end

    puts "Created #{Todo.count} todos!"
  end
end
