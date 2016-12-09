class UserPolicy < ApplicationPolicy
  attr_reader :user, :record, :context

  def initialize(user, record, context)
    @user = user
    @record = record
    @context = context
  end

  class Scope < Scope
    attr_reader :user, :scope, :account_id, :incident_id

    def initialize(user, scope, context)
      @user = user
      @scope = scope
      @account_id = account_id
      @incident_id = incident_id
    end

    def resolve
      if user.is_admin? && context.blank?
        scope
      end
      if account_id.present?
        membership = Membership.where(user_id: user.id, account_id: account_id).first
        if (membership && membership.isActive?)
          return scope.where(account_id: context.id)
        end
      end
      if incident_id.present?
        # Todo Fix
      end
      return scope.where(false)
    end
  end
end
