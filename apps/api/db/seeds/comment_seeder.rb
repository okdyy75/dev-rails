class CommentSeeder
  def self.seed
    puts "Creating comment samples..."

    Todo.find_each do |todo|
      rand(1..3).times do
        todo.comments.create!(
          content: Faker::Lorem.paragraph(sentence_count: rand(1..3))
        )
      end
    end

    puts "Created #{Comment.count} comments!"
  end
end
