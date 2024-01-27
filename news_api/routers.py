class ShardRouter:
    def db_for_read(self, model, **hints):
        if model._meta.app_label == 'news_api' and model._meta.model_name == 'news':
            # Use a specific shard database for reading news data
            return 'shard1' if hash(model.id) % 2 == 0 else 'shard2'
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label == 'news_api' and model._meta.model_name == 'news':
            # Use a specific shard database for writing news data
            return 'shard1' if hash(model.id) % 2 == 0 else 'shard2'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        # Allow relations if both objects are from the 'news_api' app
        if obj1._meta.app_label == 'news_api' and obj2._meta.app_label == 'news_api':
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        # Allow migrations for the 'news_api' app on all databases
        if app_label == 'news_api':
            return db in ['default', 'shard1', 'shard2']
        return None