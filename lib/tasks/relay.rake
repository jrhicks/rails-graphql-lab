namespace :relay do
  desc "Tasks helpfull for React Relay Client"
  task :dump_schema => :environment do
    RelaySchema.dump_schema
  end
end
