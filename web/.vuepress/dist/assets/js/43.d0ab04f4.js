(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{241:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"linux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),n("h2",{attrs:{id:"concepts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concepts","aria-hidden":"true"}},[s._v("#")]),s._v(" Concepts")]),s._v(" "),n("ul",[n("li",[s._v("ssh")])]),s._v(" "),n("h2",{attrs:{id:"ssh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssh","aria-hidden":"true"}},[s._v("#")]),s._v(" ssh")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent -s"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enable ssh-agent")]),s._v("\nssh-add ~/.ssh/eduard.trandafir@mrm-mccann.com\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("pbcopy "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ~/.ssh/id_rsa.pub\nssh-copy-id id@server\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" id@server\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i private_key user@host\tSpecify a private key to match\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@host -v\tVerbose\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" sshpass\t\t\nsshpass -p your_password "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@hostname\nssh-keygen -t rsa "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t\tssh")]),s._v("\nssh-add ~/.ssh/id_rsa "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\tadd ssh key to ssh agent. load the private key on this machine to the SSH keychain\tssh")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent -s"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If no ssh client is currently running there you need to start one\tssh")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@server_ip_address\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i ssh/eduard.trandafir@mrm-mccann.com mrm@etrandafir.dev.mrmf.de\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"basic-commands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-commands","aria-hidden":"true"}},[s._v("#")]),s._v(" Basic commands")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -1\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"apache"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[s._v("#")]),s._v(" Apache")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/apache2 reload\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/apache2 restart\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" a2ensite "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("config_file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsystemctl stop apache2\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove --purge apache2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"php"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[s._v("#")]),s._v(" Php")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.1 php7.1-cli php7.1-common libapache2-mod-php7.1 php7.1-mysql php7.1-fpm php7.1-curl php7.1-gd php7.1-bz2 php7.1-mcrypt php7.1-json php7.1-tidy php7.1-mbstring php-redis php-memcached php7.1-dom php7.1-sqlite\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.2 php7.2-cli php7.2-common libapache2-mod-php7.2 php7.2-mysql php7.2-fpm php7.2-curl php7.2-gd php7.2-bz2 php7.2-mcrypt php7.2-json php7.2-tidy php7.2-mbstring php-redis php-memcached php7.2-dom php7.2-sqlite\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.1-zip\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.1-mbstring\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("systemctl status mysql.service\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql status\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart nginx.service "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t\tnginx")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\nsystemctl start nginx\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx\nsystemctl status nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"firewall"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#firewall","aria-hidden":"true"}},[s._v("#")]),s._v(" Firewall")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw status\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw status numbered\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"others"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#others","aria-hidden":"true"}},[s._v("#")]),s._v(" Others")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("telnet localhost "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11211")]),s._v("\nflush_all\nquit\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nslookup")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf app/cache/*\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" destination\t\t\nunlink SYMLINK\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart mysql.service "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t\tmysql")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v("\t\t\nphpize\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\t\t\nnetcat\t\t\nssh-fs\t\t\ntelnet\t\t\nbroadcast\t\t\nncdu\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dmesg")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -l\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" --listen\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tulpn\t\t\njournalctl -xe\t\t\nfusermount -u /path/to/sshfs/share\tUnmount the directory "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" is mounted by sshfs\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" -l  /tmp/mymountpoint/\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'word'")]),s._v(" filename\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'word'")]),s._v(" file1 file2 file3\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string1 string2'")]),s._v("  filename\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" otherfile "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'something'")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'something'")]),s._v("\t\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php-fpm php-mysql\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository ppa:ondrej/php\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" search php "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" EXTENSION_NAME\tSearch "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" an extension\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\t\t\nmysql_secure_installation\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/foo/bar/g'")]),s._v(" *\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /path/to/directory\tNo error "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" existing, "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" parent directories as needed\tlinux\nnproc\t\t\nlscpu\t\t\nab -k -c "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("350")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20000")]),s._v(" example.com/\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\t\t\ngunzip\t\t\nadduser username\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -aG "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" username\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - username\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\t\t\nmysql_secure_installation\t\t\ndpkg -s mysql-server\t\t\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rp /path/to/drupal_site /path/to/backup_dir\tThe option -rp means copy recursive and preserve permissions.\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" czf drupalbackup.tgz /path/to/drupal_site/\t\ttar, compress\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzpf drupalbackup.tgz\t\ttar, decompress\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bc")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v("\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v("\nufw limit "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v("\tDisplay the content page by page\t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);