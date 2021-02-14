PREFIX ?= /usr
MYDIR ?= $(PREFIX)/lib/wackyblackie
INSTDIR ?= $(MYDIR)/bpotd
D ?= $(DSTDIR)$(INSTDIR)

all:
	@echo Run `sudo make install' to install.

install:
	@mkdir -p $(DESTDIR)$(INSTDIR)
	@mkdir -p $(DESTDIR)$(INSTDIR)/images
	@cp -p * $(DESTDIR)$(INSTDIR)
	@rm $(D)/Makefile $(D)/gtray
	@chmod 111 $(D)/bpotd $(D)/xtray $(D)/tray $(D)/curl.sh
	@chmod 0000 $(D)/icon.ico $(D)/bpotd-link.sh
	@echo 'export PATH="$(D):$PATH"' >> $$HOME/.bashrc
remove:
	@rm -rf $(D)
