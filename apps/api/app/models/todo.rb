class Todo < ApplicationRecord
  has_many :comments, dependent: :destroy

  before_validation :normalize_tags

  validates :title, presence: true, length: { maximum: 255 }

  private

  def normalize_tags
    self.tags = Array(tags).map(&:to_s).map(&:strip).reject(&:blank?).uniq
  end
end
