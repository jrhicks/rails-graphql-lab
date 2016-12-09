class Membership < ApplicationRecord
  belongs_to :user
  belongs_to :account

  def is_active?
    # Alternatively in the future we may have
    # a role which is considered a non-active role
    true
  end
end
