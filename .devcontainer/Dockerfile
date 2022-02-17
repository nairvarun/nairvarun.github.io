FROM debian:bullseye-slim

RUN useradd --create-home --shell /bin/bash nv                                              && \
    usermod --append --groups sudo nv                                                       && \
    echo "nv:1234" | chpasswd                                                               && \
    echo "export PATH=/home/nv/.local/bin:${PATH}" >> /home/nv/.bashrc                      && \
    echo "alias jn='jupyter notebook --ip 0.0.0.0 --no-browser'" >> /home/nv/.bashrc        && \
    # mkdir /workspace                                                                        && \
    apt update                                                                              && \
    apt upgrade                                                                             && \
    apt install -y                                                                             \
                git                                                                            \
                # nano                                                                           \
                # vi                                                                             \
                # vim                                                                            \
                # neovim                                                                         \
                # chezscheme                                                                     \
                # chicken-bin                                                                    \
                # build-essential                                                                \
                # gdb                                                                            \
                # python3                                                                        \
                # python3-pip                                                                    \
                # python3-venv                                                                   \
                # nodejs                                                                         \
                # npm                                                                            \
                # rustc                                                                          \
                # default-jdk                                                                    \
                # gnu-smalltalk                                                                  \
                # ghc                                                                            \
                # swi-prolog                                                                     \
                # cowsay                                                                         \
                # neofetch                                                                       \
                sudo

# COPY ../ /workspace/

# WORKDIR /workspace/

USER nv
