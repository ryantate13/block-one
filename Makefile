WHOAMI := ryan_tate
PROJECT := block_one
TEST := $(WHOAMI)_$(PROJECT)_test
PUBLISH := $(WHOAMI)_$(PROJECT)_gh_pages
REPO := git@github.com:ryantate13/block-one.git

dockerignore:
	echo '*' > .dockerignore
	cat *.dockerfile | grep COPY | grep -v from= | cut -d' ' -f 2 | sort | uniq | \
		xargs -n 1 -I {} echo !{} >> .dockerignore

.PHONY: dockerignore

test: dockerignore
	@sudo docker build -f test.dockerfile -t $(TEST) . > /dev/null
	@sudo docker run -it --rm $(TEST)

.PHONY: test

run: dockerignore
	sudo docker-compose up

.PHONY: run

publish: dockerignore
	sudo docker build -f gh-pages.dockerfile -t $(PUBLISH) \
		--build-arg WHOAMI=$$(whoami) \
		--build-arg ID=$$(id -u $$(whoami)) \
		.
	sudo docker run -it --rm \
		-e REPO=$(REPO) \
		-v $$HOME/.ssh:$$HOME/.ssh \
		-v $$HOME/.gitconfig:$$HOME/.gitconfig \
		$(PUBLISH)

.PHONY: publish

clean:
	sudo docker-compose down

.PHONY: clean