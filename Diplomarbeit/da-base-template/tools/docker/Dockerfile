# Author: Marko Schrempf, Günther Hutter
FROM ubuntu:18.04

# Set the environment variables
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    DEBIAN_FRONTEND=noninteractive

# Update the package list, install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        # Basic utilities
        rsync \
        tree \
        git \
        make \
        build-essential \
        # Tex Live and related packages
        # texlive-full \
        texlive-latex-base \
        texlive-latex-recommended \
        texlive-latex-extra \
        texlive-fonts-recommended \
        texlive-fonts-extra \
        texlive-lang-german \
        texlive-lang-english \
        texlive-bibtex-extra \
        texlive-xetex \
        texlive-science \
        texlive-generic-extra \
        cm-super \
        lmodern \
        texlive-font-utils \
        gsfonts \
        latexmk \
        # Pandoc
        pandoc \
        pandoc-citeproc \
        # Hunspell
        hunspell \
        hunspell-de-at \
        hunspell-en-us && \
    # Clean up apt cache
    apt-get clean && \
    # Remove unnecessary files
    rm -rf \
        /etc/udev \
        /etc/xdg/* \
        /lib/modules/* \
        /lib/udev \
        /tmp/* \
        /usr/bin/lualatex \
        /usr/bin/xelatex \
        /usr/share/X11/* \
        /usr/share/doc/* \
        /usr/share/doc-base/* \
        /usr/share/icons/* \
        /usr/share/info/* \
        /usr/share/locale/* \
        /usr/share/man/* \
        /usr/share/pixmaps/* \
        /usr/share/texlive/texmf-dist/doc \
        /usr/share/texlive/texmf-dist/fonts/source/* \
        /usr/share/texlive/texmf-dist/scripts/* \
        /usr/share/texlive/texmf-dist/source \
        /usr/share/texmf/doc \
        /var/cache/apt/* \
        /var/lib/apt/lists/* \
        /var/lib/dpkg/info/* \
        /var/log/* && \
    # Remove libtool files
    find /usr -name '*.la' -delete

# Set the working directory
WORKDIR /workspace

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /entrypoint.sh

# Set the entrypoint to the script
ENTRYPOINT ["/entrypoint.sh"]
