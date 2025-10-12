class TodoSeeder
  def self.seed
    puts "Deleting existing todos..."
    ActiveRecord::Base.strict_loading_by_default = false
    Todo.destroy_all

    puts "Creating todo samples..."
    10.times do
      Todo.create!(
        title: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 2),
        description: Faker::Lorem.paragraph(sentence_count: 2),
        completed: [true, false].sample
      )
    end

    puts "Created #{Todo.count} todos!"
  end
end
