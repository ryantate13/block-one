WHOAMI := ryan_tate
TEST := $(WHOAMI)_block_one_test

test:
	@sudo docker build -f test.dockerfile -t $(TEST) . > /dev/null
	@sudo docker run -it --rm $(TEST)

.PHONY: test

run:
	sudo docker-compose up

.PHONY: run

clean:
	sudo docker-compose down

.PHONY: clean