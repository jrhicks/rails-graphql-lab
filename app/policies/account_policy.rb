class AccountPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if user.is_super
        Account
      else
        user.accounts
      end
    end
  end
end
